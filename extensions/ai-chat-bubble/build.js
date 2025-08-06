const fs = require('fs');
const path = require('path');

// Read the React component
const reactComponentPath = path.join(__dirname, 'src/embed.chat.jsx');
const outputPath = path.join(__dirname, 'assets/embed.chat.js');

// Plain JavaScript version of the voice chat bubble
const plainJavaScript = `// Simple vanilla JavaScript voice chat bubble
// No React or Polaris dependencies

(function() {
  'use strict';
  
  console.log('[DEBUG] Initializing voice chat bubble...');
  
  let isListening = false;
  let recognition = null;
  let audioStream = null;
  let isInitialized = false;
  
  // Check if speech recognition is supported
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    console.error('[ERROR] Speech recognition not supported in this browser');
    return;
  }

  // Initialize speech recognition
  function initializeRecognition() {
    if (isInitialized) return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    // Configure recognition settings
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    // Set up event handlers
    recognition.onstart = () => {
      console.log('[DEBUG] Voice recognition started');
      isListening = true;
      updateBubbleUI();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('[DEBUG] Voice recognized:', transcript);
      processVoiceInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error('[DEBUG] Speech recognition error:', event.error);
      handleRecognitionError(event.error);
    };

    recognition.onend = () => {
      console.log('[DEBUG] Voice recognition ended');
      isListening = false;
      updateBubbleUI();
    };

    isInitialized = true;
  }

  // Create voice chat bubble
  function createVoiceBubble() {
    const bubble = document.createElement('div');
    bubble.id = 'voice-chat-bubble';
    bubble.style.cssText = \`
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      cursor: pointer;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      border: 3px solid white;
    \`;

    const icon = document.createElement('div');
    icon.id = 'voice-bubble-icon';
    icon.innerHTML = '🎤';
    icon.style.cssText = \`
      font-size: 24px;
      color: white;
      user-select: none;
      transition: all 0.3s ease;
    \`;

    bubble.appendChild(icon);
    document.body.appendChild(bubble);

    // Add click event
    bubble.addEventListener('click', handleBubbleClick);
    
    // Add hover effects
    bubble.addEventListener('mouseenter', (e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });
    
    bubble.addEventListener('mouseleave', (e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });

    return bubble;
  }

  // Update bubble UI based on listening state
  function updateBubbleUI() {
    const bubble = document.getElementById('voice-chat-bubble');
    const icon = document.getElementById('voice-bubble-icon');
    
    if (!bubble || !icon) return;

    if (isListening) {
      bubble.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
      icon.innerHTML = '🔴';
      bubble.style.animation = 'pulse 1s infinite';
    } else {
      bubble.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      icon.innerHTML = '🎤';
      bubble.style.animation = 'none';
    }
  }

  // Handle bubble click
  async function handleBubbleClick() {
    if (isListening) {
      stopListening();
    } else {
      await startListening();
    }
  }

  // Start listening
  async function startListening() {
    try {
      // Initialize recognition if not already done
      if (!isInitialized) {
        initializeRecognition();
      }

      // Check if we already have microphone access
      if (audioStream) {
        // We already have access, start recognition directly
        if (recognition) {
          recognition.start();
        }
        return;
      }

      // Request microphone permission first
      console.log('[DEBUG] Requesting microphone access...');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });

      // Store stream for cleanup
      audioStream = stream;
      console.log('[DEBUG] Microphone access granted');

      // Start speech recognition after a short delay to ensure audio is ready
      setTimeout(() => {
        if (recognition && !isListening) {
          console.log('[DEBUG] Starting speech recognition...');
          recognition.start();
        }
      }, 100);
      
    } catch (error) {
      console.error('[DEBUG] Microphone access error:', error);
      
      // Try to start recognition anyway (some browsers work without explicit permission)
      if (recognition && !isListening) {
        console.log('[DEBUG] Trying speech recognition without explicit permission...');
        recognition.start();
      } else {
        handleRecognitionError('audio-capture');
      }
    }
  }

  // Stop listening
  function stopListening() {
    if (recognition && isListening) {
      recognition.stop();
    }
    
    // Don't stop the audio stream immediately, keep it for reuse
    // Only stop it when the page is unloaded
  }

  // Handle recognition errors
  function handleRecognitionError(error) {
    console.error('[DEBUG] Recognition error:', error);
    
    let message = 'Sorry, I couldn\\'t understand your voice. Please try again.';
    
    switch (error) {
      case 'audio-capture':
        message = 'Microphone access is required. Please allow microphone access in your browser settings and try again.';
        break;
      case 'not-allowed':
        message = 'Microphone access denied. Please enable it in your browser settings and refresh the page.';
        break;
      case 'no-speech':
        message = 'No speech detected. Please try speaking again.';
        break;
      case 'network':
        message = 'Network error. Please check your connection and try again.';
        break;
      case 'aborted':
        message = 'Voice recognition was interrupted. Please try again.';
        break;
      case 'service-not-allowed':
        message = 'Voice recognition service not allowed. Please check your browser settings.';
        break;
    }

    showErrorModal(message);
  }

  // Process voice input
  async function processVoiceInput(transcript) {
    try {
      console.log('[DEBUG] Processing voice input:', transcript);
      
      // Send to voice search API
      const response = await fetch('/api/voice-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voiceInput: transcript,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const result = await response.json();
      console.log('[DEBUG] Voice search result:', result);

      // Handle the result (e.g., redirect to search results)
      if (result.success && result.searchQuery) {
        // Redirect to search results
        window.location.href = \`/search?q=\${encodeURIComponent(result.searchQuery)}\`;
      }

    } catch (error) {
      console.error('[DEBUG] Error processing voice input:', error);
      showErrorModal('Sorry, there was an error processing your voice input. Please try again.');
    }
  }

  // Show error modal
  function showErrorModal(message) {
    // Remove existing modal if any
    const existingModal = document.getElementById('voice-error-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'voice-error-modal';
    modal.style.cssText = \`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
    \`;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = \`
      background: white;
      padding: 30px;
      border-radius: 8px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    \`;

    const title = document.createElement('h3');
    title.textContent = 'Voice Product Search';
    title.style.cssText = \`
      margin: 0 0 20px 0;
      color: #333;
    \`;

    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.cssText = \`
      margin: 0 0 20px 0;
      color: #d82c0d;
    \`;

    const icon = document.createElement('div');
    icon.innerHTML = '🎤';
    icon.style.cssText = \`
      font-size: 40px;
      margin: 20px 0;
    \`;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = \`
      background: #008060;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    \`;

    closeButton.addEventListener('click', () => {
      modal.remove();
    });

    modalContent.appendChild(title);
    modalContent.appendChild(errorMessage);
    modalContent.appendChild(icon);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  // Add CSS animations
  function addStyles() {
    const style = document.createElement('style');
    style.textContent = \`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    \`;
    document.head.appendChild(style);
  }

  // Clean up audio stream when page is unloaded
  window.addEventListener('beforeunload', () => {
    if (audioStream) {
      audioStream.getTracks().forEach(track => track.stop());
    }
  });

  // Initialize when DOM is ready
  function init() {
    // Check if already initialized
    if (document.getElementById('voice-chat-bubble')) {
      return;
    }

    addStyles();
    createVoiceBubble();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();`;

// Write the plain JavaScript to the output file
fs.writeFileSync(outputPath, plainJavaScript);
console.log('✅ Built plain JavaScript version of embed.chat.js'); 