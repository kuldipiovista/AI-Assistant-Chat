// Test script to debug voice recognition issues
const puppeteer = require('puppeteer');

async function testVoiceRecognition() {
  console.log('🎤 Testing voice recognition...');
  
  const browser = await puppeteer.launch({ 
    headless: false, // Set to true if you don't want to see the browser
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
  });
  
  const page = await browser.newPage();
  
  // Enable console logging
  page.on('console', msg => {
    console.log('Browser Console:', msg.text());
  });
  
  // Enable error logging
  page.on('pageerror', error => {
    console.error('Browser Error:', error.message);
  });
  
  try {
    // Navigate to your Shopify store
    console.log('📱 Navigating to Shopify store...');
    await page.goto('https://kuldip-iovista-demo.myshopify.com', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    console.log('✅ Page loaded successfully');
    
    // Wait for the voice chat bubble to appear
    console.log('🔍 Looking for voice chat bubble...');
    await page.waitForSelector('#voice-chat-bubble', { timeout: 10000 });
    console.log('✅ Voice chat bubble found');
    
    // Click the voice chat bubble
    console.log('🎤 Clicking voice chat bubble...');
    await page.click('#voice-chat-bubble');
    
    // Wait a moment for the recognition to start
    await page.waitForTimeout(2000);
    
    // Check if there are any error messages
    const errorElements = await page.$$('.voice-error-modal, .voice-loading-modal, .voice-success-modal');
    if (errorElements.length > 0) {
      console.log('⚠️  Modal detected - checking for errors...');
      const modalText = await page.evaluate(() => {
        const modal = document.querySelector('.voice-error-modal, .voice-loading-modal, .voice-success-modal');
        return modal ? modal.textContent : 'No modal found';
      });
      console.log('Modal content:', modalText);
    }
    
    // Check console logs for specific errors
    console.log('🔍 Checking for voice recognition errors...');
    const logs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('script')).map(script => {
        if (script.textContent.includes('audio-capture')) {
          return 'Found audio-capture error in script';
        }
        return null;
      }).filter(Boolean);
    });
    
    if (logs.length > 0) {
      console.log('❌ Found audio-capture errors in scripts');
    }
    
    // Test microphone permission
    console.log('🎤 Testing microphone permission...');
    const permissionResult = await page.evaluate(async () => {
      try {
        const permission = await navigator.permissions.query({ name: 'microphone' });
        return {
          state: permission.state,
          granted: permission.state === 'granted'
        };
      } catch (error) {
        return { error: error.message };
      }
    });
    
    console.log('Microphone permission:', permissionResult);
    
    // Test getUserMedia
    console.log('🎤 Testing getUserMedia...');
    const mediaResult = await page.evaluate(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const tracks = stream.getTracks();
        stream.getTracks().forEach(track => track.stop());
        return {
          success: true,
          trackCount: tracks.length,
          trackKind: tracks[0] ? tracks[0].kind : 'unknown'
        };
      } catch (error) {
        return { 
          success: false, 
          error: error.name + ': ' + error.message 
        };
      }
    });
    
    console.log('getUserMedia result:', mediaResult);
    
    // Test Speech Recognition
    console.log('🎤 Testing Speech Recognition...');
    const speechResult = await page.evaluate(() => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        return { available: false, error: 'Speech Recognition not supported' };
      }
      
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        return { 
          available: true, 
          supported: true,
          lang: recognition.lang,
          continuous: recognition.continuous
        };
      } catch (error) {
        return { 
          available: true, 
          supported: false, 
          error: error.message 
        };
      }
    });
    
    console.log('Speech Recognition result:', speechResult);
    
    // Wait a bit more to see if recognition starts
    console.log('⏳ Waiting for voice recognition to start...');
    await page.waitForTimeout(5000);
    
    // Check if the bubble changed to listening state
    const bubbleState = await page.evaluate(() => {
      const bubble = document.getElementById('voice-chat-bubble');
      const icon = document.getElementById('voice-bubble-icon');
      if (!bubble || !icon) return 'not-found';
      
      const isListening = bubble.style.animation.includes('pulse');
      const iconText = icon.textContent;
      
      return {
        isListening,
        iconText,
        background: bubble.style.background
      };
    });
    
    console.log('Bubble state:', bubbleState);
    
    console.log('✅ Voice recognition test completed');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    // Keep browser open for manual inspection
    console.log('🔍 Browser will stay open for manual inspection. Close it when done.');
    // await browser.close();
  }
}

// Run the test
testVoiceRecognition().catch(console.error); 