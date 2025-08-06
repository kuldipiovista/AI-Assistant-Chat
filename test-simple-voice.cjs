// Simple test to verify voice recognition issue
const puppeteer = require('puppeteer');

async function testSimpleVoice() {
  console.log('🎤 Simple voice recognition test...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    args: [
      '--use-fake-ui-for-media-stream',
      '--use-fake-device-for-media-stream',
      '--allow-running-insecure-content',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor'
    ]
  });
  
  const page = await browser.newPage();
  
  // Enable console logging
  page.on('console', msg => {
    console.log('Browser:', msg.text());
  });
  
  try {
    // Navigate to a simple test page
    await page.goto('https://kuldip-iovista-demo.myshopify.com');
    
    // Wait for voice bubble
    await page.waitForSelector('#voice-chat-bubble', { timeout: 10000 });
    
    // Test the exact sequence that's failing
    console.log('🔍 Testing voice recognition sequence...');
    
    const testResult = await page.evaluate(async () => {
      const results = [];
      
      // Test 1: Check microphone permission
      try {
        const permission = await navigator.permissions.query({ name: 'microphone' });
        results.push({ test: 'permission', success: true, state: permission.state });
      } catch (error) {
        results.push({ test: 'permission', success: false, error: error.message });
      }
      
      // Test 2: Test getUserMedia
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const tracks = stream.getTracks();
        stream.getTracks().forEach(track => track.stop());
        results.push({ test: 'getUserMedia', success: true, tracks: tracks.length });
      } catch (error) {
        results.push({ test: 'getUserMedia', success: false, error: error.name + ': ' + error.message });
      }
      
      // Test 3: Test Speech Recognition
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
          results.push({ test: 'speechRecognition', success: false, error: 'Not supported' });
        } else {
          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = false;
          recognition.lang = 'en-US';
          
          // Test if we can start recognition
          recognition.start();
          results.push({ test: 'speechRecognition', success: true, message: 'Started successfully' });
          
          // Stop immediately
          setTimeout(() => recognition.stop(), 100);
        }
      } catch (error) {
        results.push({ test: 'speechRecognition', success: false, error: error.message });
      }
      
      return results;
    });
    
    console.log('📊 Test Results:');
    testResult.forEach(result => {
      if (result.success) {
        console.log(`✅ ${result.test}: ${result.message || 'Success'}`);
      } else {
        console.log(`❌ ${result.test}: ${result.error}`);
      }
    });
    
    // Wait a bit to see if any errors occur
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('✅ Simple test completed');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    console.log('🔍 Browser will stay open for manual inspection');
    // await browser.close();
  }
}

testSimpleVoice().catch(console.error); 