// Simple vanilla JavaScript voice chat bubble
// No React or Polaris dependencies

(function() {
  'use strict';
  
  console.log('[DEBUG] Initializing voice chat bubble...');
  
  let isListening = false;
  let recognition = null;
  let audioStream = null;
  let isInitialized = false;
  let hasMicrophoneAccess = false;
  
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

  // Check microphone permission status
  async function checkMicrophonePermission() {
    try {
      const permission = await navigator.permissions.query({ name: 'microphone' });
      console.log('[DEBUG] Microphone permission status:', permission.state);
      return permission.state;
    } catch (error) {
      console.log('[DEBUG] Could not check permission status:', error);
      return 'unknown';
    }
  }

  // Create voice chat bubble
  function createVoiceBubble() {
    const bubble = document.createElement('div');
    bubble.id = 'voice-chat-bubble';
    bubble.style.cssText = `
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
    `;

    const icon = document.createElement('div');
    icon.id = 'voice-bubble-icon';
    icon.innerHTML = '🎤';
    icon.style.cssText = `
      font-size: 24px;
      color: white;
      user-select: none;
      transition: all 0.3s ease;
    `;

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

      // Check current permission status
      const permissionStatus = await checkMicrophonePermission();
      console.log('[DEBUG] Current permission status:', permissionStatus);

      if (permissionStatus === 'denied') {
        showErrorModal('Microphone access is denied. Please enable it in your browser settings and refresh the page.');
        return;
      }

      // If we already have microphone access, start recognition directly
      if (hasMicrophoneAccess && audioStream) {
        console.log('[DEBUG] Using existing microphone access');
        if (recognition && !isListening) {
          recognition.start();
        }
        return;
      }

      // Request microphone permission
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
      hasMicrophoneAccess = true;
      console.log('[DEBUG] Microphone access granted');

      // Start speech recognition after ensuring audio is ready
      setTimeout(() => {
        if (recognition && !isListening) {
          console.log('[DEBUG] Starting speech recognition...');
          try {
            recognition.start();
          } catch (error) {
            console.error('[DEBUG] Error starting recognition:', error);
            // Try alternative approach for some browsers
            if (window.webkitSpeechRecognition) {
              recognition = new window.webkitSpeechRecognition();
              recognition.continuous = false;
              recognition.interimResults = false;
              recognition.lang = 'en-US';
              recognition.maxAlternatives = 1;
              
              recognition.onstart = () => {
                console.log('[DEBUG] Voice recognition started (webkit)');
                isListening = true;
                updateBubbleUI();
              };
              
              recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log('[DEBUG] Voice recognized:', transcript);
                processVoiceInput(transcript);
              };
              
              recognition.onerror = (event) => {
                console.error('[DEBUG] Speech recognition error (webkit):', event.error);
                handleRecognitionError(event.error);
              };
              
              recognition.onend = () => {
                console.log('[DEBUG] Voice recognition ended (webkit)');
                isListening = false;
                updateBubbleUI();
              };
              
              recognition.start();
            }
          }
        }
      }, 200);
      
    } catch (error) {
      console.error('[DEBUG] Microphone access error:', error);
      
      // Try to start recognition anyway (some browsers work without explicit permission)
      if (recognition && !isListening) {
        console.log('[DEBUG] Trying speech recognition without explicit permission...');
        try {
          recognition.start();
        } catch (recognitionError) {
          console.error('[DEBUG] Recognition start error:', recognitionError);
          handleRecognitionError('audio-capture');
        }
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
  }

  // Handle recognition errors
  function handleRecognitionError(error) {
    console.error('[DEBUG] Recognition error:', error);
    
    let message = 'Sorry, I couldn\'t understand your voice. Please try again.';
    
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
      
      // Show loading state
      showLoadingModal('Processing your voice input...');
      
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('[DEBUG] Voice search result:', result);

      // Hide loading modal
      hideLoadingModal();

      // Handle the result
      if (result.success && result.searchQuery) {
        // Show success message
        showSuccessModal(`Searching for: "${result.searchQuery}"`);
        
        // Redirect to search results after a short delay
        setTimeout(() => {
          // Try to find the search form on the page
          const searchForm = document.querySelector('form[action*="search"]') || 
                           document.querySelector('input[name="q"]') ||
                           document.querySelector('.search-form');
          
          if (searchForm) {
            // If there's a search form, submit it
            const searchInput = searchForm.querySelector('input[name="q"]') || 
                              searchForm.querySelector('input[type="text"]');
            if (searchInput) {
              searchInput.value = result.searchQuery;
              searchForm.submit();
            } else {
              // Fallback: redirect to search URL
              window.location.href = `/search?q=${encodeURIComponent(result.searchQuery)}`;
            }
          } else {
            // Fallback: redirect to search URL
            window.location.href = `/search?q=${encodeURIComponent(result.searchQuery)}`;
          }
        }, 2000);
      } else {
        showErrorModal('Sorry, I couldn\'t process your voice input. Please try again.');
      }

    } catch (error) {
      console.error('[DEBUG] Error processing voice input:', error);
      hideLoadingModal();
      showErrorModal('Sorry, there was an error processing your voice input. Please try again.');
    }
  }

  // Show loading modal
  function showLoadingModal(message) {
    hideAllModals();
    
    const modal = document.createElement('div');
    modal.id = 'voice-loading-modal';
    modal.style.cssText = `
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
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 8px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;

    const title = document.createElement('h3');
    title.textContent = 'Voice Product Search';
    title.style.cssText = `
      margin: 0 0 20px 0;
      color: #333;
    `;

    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = message;
    loadingMessage.style.cssText = `
      margin: 0 0 20px 0;
      color: #666;
    `;

    const spinner = document.createElement('div');
    spinner.innerHTML = '⏳';
    spinner.style.cssText = `
      font-size: 40px;
      margin: 20px 0;
      animation: spin 1s linear infinite;
    `;

    modalContent.appendChild(title);
    modalContent.appendChild(loadingMessage);
    modalContent.appendChild(spinner);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }

  // Show success modal
  function showSuccessModal(message) {
    hideAllModals();
    
    const modal = document.createElement('div');
    modal.id = 'voice-success-modal';
    modal.style.cssText = `
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
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 8px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;

    const title = document.createElement('h3');
    title.textContent = 'Voice Product Search';
    title.style.cssText = `
      margin: 0 0 20px 0;
      color: #333;
    `;

    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    successMessage.style.cssText = `
      margin: 0 0 20px 0;
      color: #008060;
    `;

    const icon = document.createElement('div');
    icon.innerHTML = '✅';
    icon.style.cssText = `
      font-size: 40px;
      margin: 20px 0;
    `;

    modalContent.appendChild(title);
    modalContent.appendChild(successMessage);
    modalContent.appendChild(icon);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      modal.remove();
    }, 3000);
  }

  // Hide all modals
  function hideAllModals() {
    const modals = ['voice-error-modal', 'voice-loading-modal', 'voice-success-modal'];
    modals.forEach(id => {
      const modal = document.getElementById(id);
      if (modal) {
        modal.remove();
      }
    });
  }

  // Hide loading modal
  function hideLoadingModal() {
    const modal = document.getElementById('voice-loading-modal');
    if (modal) {
      modal.remove();
    }
  }

  // Show error modal
  function showErrorModal(message) {
    hideAllModals();
    
    const modal = document.createElement('div');
    modal.id = 'voice-error-modal';
    modal.style.cssText = `
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
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 8px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;

    const title = document.createElement('h3');
    title.textContent = 'Voice Product Search';
    title.style.cssText = `
      margin: 0 0 20px 0;
      color: #333;
    `;

    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.cssText = `
      margin: 0 0 20px 0;
      color: #d82c0d;
    `;

    const icon = document.createElement('div');
    icon.innerHTML = '🎤';
    icon.style.cssText = `
      font-size: 40px;
      margin: 20px 0;
    `;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = `
      background: #008060;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    `;

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
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
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

})();