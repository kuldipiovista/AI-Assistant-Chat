import { json } from "@remix-run/node";
import {
  Page,
  Layout,
  Card,
  Button,
  FormLayout,
  TextField,
  Select,
  Checkbox,
  ColorPicker,
  RangeSlider,
  Banner,
  Stack,
  TextStyle,
  Badge,
  DataTable,
  Modal,
  TextContainer,
  Heading
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  
  // Get current settings from metafields
  const response = await admin.graphql(
    `query getVoiceSearchSettings {
      shop {
        metafield(namespace: "voice_search", key: "settings") {
          value
        }
      }
    }`
  );
  
  const responseJson = await response.json();
  const settings = responseJson.data?.shop?.metafield?.value 
    ? JSON.parse(responseJson.data.shop.metafield.value)
    : getDefaultSettings();
    
  return json({ settings });
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  
  const settings = {
    // Widget Settings
    widgetEnabled: formData.get("widgetEnabled") === "true",
    widgetPosition: formData.get("widgetPosition"),
    widgetColor: formData.get("widgetColor"),
    widgetSize: parseInt(formData.get("widgetSize")),
    
    // Voice Settings
    voiceEnabled: formData.get("voiceEnabled") === "true",
    voiceLanguage: formData.get("voiceLanguage"),
    voiceTimeout: parseInt(formData.get("voiceTimeout")),
    
    // Product Settings
    showProductImages: formData.get("showProductImages") === "true",
    showProductPrices: formData.get("showProductPrices") === "true",
    showComparePrices: formData.get("showComparePrices") === "true",
    maxProductsToShow: parseInt(formData.get("maxProductsToShow")),
    
    // Ollama Settings
    ollamaEnabled: formData.get("ollamaEnabled") === "true",
    ollamaModel: formData.get("ollamaModel"),
    ollamaEndpoint: formData.get("ollamaEndpoint"),
  };
  
  // Save settings to metafields
  const mutation = `
    mutation updateVoiceSearchSettings($input: MetafieldInput!) {
      metafieldsSet(metafields: [$input]) {
        metafields {
          id
          value
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  await admin.graphql(mutation, {
    variables: {
      input: {
        namespace: "voice_search",
        key: "settings",
        type: "json",
        value: JSON.stringify(settings),
        ownerId: "gid://shopify/Shop/1"
      }
    }
  });
  
  return json({ success: true, settings });
};

function getDefaultSettings() {
  return {
    widgetEnabled: true,
    widgetPosition: "bottom-right",
    widgetColor: "#5c6ac4",
    widgetSize: 56,
    voiceEnabled: true,
    voiceLanguage: "en-US",
    voiceTimeout: 5000,
    showProductImages: true,
    showProductPrices: true,
    showComparePrices: true,
    maxProductsToShow: 5,
    ollamaEnabled: true,
    ollamaModel: "whisper",
    ollamaEndpoint: "http://localhost:11434"
  };
}

export default function VoiceSearchDashboard() {
  const [settings, setSettings] = useState(getDefaultSettings());
  const [isSaving, setIsSaving] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [testResults, setTestResults] = useState(null);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      const formData = new FormData();
      Object.entries(settings).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      
      const response = await fetch("/app", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        // Show success message
        console.log("Settings saved successfully");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
    } finally {
      setIsSaving(false);
    }
  }, [settings]);

  const handleTestVoice = useCallback(async () => {
    setShowTestModal(true);
    setTestResults({ status: "testing", message: "Testing voice search..." });
    
    try {
      const response = await fetch("/api/voice-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          voiceInput: "test snowboard",
          useOllama: settings.ollamaEnabled
        })
      });
      
      const data = await response.json();
      setTestResults({
        status: "success",
        message: "Voice search test successful!",
        data: data
      });
    } catch (error) {
      setTestResults({
        status: "error",
        message: "Voice search test failed: " + error.message
      });
    }
  }, [settings.ollamaEnabled]);

  const widgetSettingsRows = [
    ["Widget Enabled", settings.widgetEnabled ? "✅ Enabled" : "❌ Disabled"],
    ["Position", settings.widgetPosition],
    ["Color", settings.widgetColor],
    ["Size", `${settings.widgetSize}px`]
  ];

  const voiceSettingsRows = [
    ["Voice Enabled", settings.voiceEnabled ? "✅ Enabled" : "❌ Disabled"],
    ["Language", settings.voiceLanguage],
    ["Timeout", `${settings.voiceTimeout}ms`],
    ["Ollama Model", settings.ollamaModel],
    ["Ollama Endpoint", settings.ollamaEndpoint]
  ];

  return (
    <Page
      title="Voice Search Settings"
      primaryAction={{
        content: "Save Settings",
        onAction: handleSave,
        loading: isSaving
      }}
      secondaryActions={[
        {
          content: "Test Voice Search",
          onAction: handleTestVoice
        }
      ]}
    >
      <Layout>
        {/* Widget Settings */}
        <Layout.Section>
          <Card title="Widget Settings" sectioned>
            <FormLayout>
              <Checkbox
                label="Enable Voice Search Widget"
                checked={settings.widgetEnabled}
                onChange={(checked) => setSettings({...settings, widgetEnabled: checked})}
              />
              
              <Select
                label="Widget Position"
                options={[
                  {label: "Bottom Right", value: "bottom-right"},
                  {label: "Bottom Left", value: "bottom-left"},
                  {label: "Top Right", value: "top-right"},
                  {label: "Top Left", value: "top-left"}
                ]}
                value={settings.widgetPosition}
                onChange={(value) => setSettings({...settings, widgetPosition: value})}
              />
              
              <TextField
                label="Widget Color"
                value={settings.widgetColor}
                onChange={(value) => setSettings({...settings, widgetColor: value})}
                helpText="Enter hex color code (e.g., #5c6ac4)"
              />
              
              <RangeSlider
                label="Widget Size"
                value={settings.widgetSize}
                min={40}
                max={80}
                step={4}
                onChange={(value) => setSettings({...settings, widgetSize: value})}
                output
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        {/* Voice Settings */}
        <Layout.Section>
          <Card title="Voice Settings" sectioned>
            <FormLayout>
              <Checkbox
                label="Enable Voice Recognition"
                checked={settings.voiceEnabled}
                onChange={(checked) => setSettings({...settings, voiceEnabled: checked})}
              />
              
              <Select
                label="Voice Language"
                options={[
                  {label: "English (US)", value: "en-US"},
                  {label: "English (UK)", value: "en-GB"},
                  {label: "Spanish", value: "es-ES"},
                  {label: "French", value: "fr-FR"},
                  {label: "German", value: "de-DE"}
                ]}
                value={settings.voiceLanguage}
                onChange={(value) => setSettings({...settings, voiceLanguage: value})}
              />
              
              <TextField
                label="Voice Timeout (ms)"
                type="number"
                value={settings.voiceTimeout.toString()}
                onChange={(value) => setSettings({...settings, voiceTimeout: parseInt(value) || 5000})}
                helpText="How long to listen for voice input"
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        {/* Ollama Settings */}
        <Layout.Section>
          <Card title="Ollama AI Settings" sectioned>
            <FormLayout>
              <Checkbox
                label="Enable Ollama Processing"
                checked={settings.ollamaEnabled}
                onChange={(checked) => setSettings({...settings, ollamaEnabled: checked})}
              />
              
              <TextField
                label="Ollama Model"
                value={settings.ollamaModel}
                onChange={(value) => setSettings({...settings, ollamaModel: value})}
                helpText="Model name for voice processing (e.g., whisper, llama3.2)"
              />
              
              <TextField
                label="Ollama Endpoint"
                value={settings.ollamaEndpoint}
                onChange={(value) => setSettings({...settings, ollamaEndpoint: value})}
                helpText="Ollama API endpoint URL"
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        {/* Product Display Settings */}
        <Layout.Section>
          <Card title="Product Display Settings" sectioned>
            <FormLayout>
              <Checkbox
                label="Show Product Images"
                checked={settings.showProductImages}
                onChange={(checked) => setSettings({...settings, showProductImages: checked})}
              />
              
              <Checkbox
                label="Show Product Prices"
                checked={settings.showProductPrices}
                onChange={(checked) => setSettings({...settings, showProductPrices: checked})}
              />
              
              <Checkbox
                label="Show Compare Prices"
                checked={settings.showComparePrices}
                onChange={(checked) => setSettings({...settings, showComparePrices: checked})}
              />
              
              <TextField
                label="Max Products to Show"
                type="number"
                value={settings.maxProductsToShow.toString()}
                onChange={(value) => setSettings({...settings, maxProductsToShow: parseInt(value) || 5})}
                helpText="Maximum number of products to display in results"
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        {/* Current Settings Summary */}
        <Layout.Section>
          <Card title="Current Settings Summary" sectioned>
            <Stack vertical spacing="loose">
              <div>
                <TextStyle variation="strong">Widget Settings</TextStyle>
                <DataTable
                  columnContentTypes={['text', 'text']}
                  headings={['Setting', 'Value']}
                  rows={widgetSettingsRows}
                />
              </div>
              
              <div>
                <TextStyle variation="strong">Voice Settings</TextStyle>
                <DataTable
                  columnContentTypes={['text', 'text']}
                  headings={['Setting', 'Value']}
                  rows={voiceSettingsRows}
                />
              </div>
            </Stack>
          </Card>
        </Layout.Section>

        {/* Status Banner */}
        <Layout.Section>
          <Banner
            title="Voice Search Status"
            status={settings.widgetEnabled && settings.voiceEnabled ? "success" : "warning"}
          >
            {settings.widgetEnabled && settings.voiceEnabled 
              ? "Voice search widget is active and ready to use on your storefront."
              : "Voice search is currently disabled. Enable it in the settings above."
            }
          </Banner>
        </Layout.Section>
      </Layout>

      {/* Test Modal */}
      <Modal
        open={showTestModal}
        onClose={() => setShowTestModal(false)}
        title="Voice Search Test Results"
        primaryAction={{
          content: "Close",
          onAction: () => setShowTestModal(false)
        }}
      >
        <Modal.Section>
          <TextContainer>
            {testResults && (
              <div>
                <Heading>Test Status: {testResults.status}</Heading>
                <p>{testResults.message}</p>
                {testResults.data && (
                  <div>
                    <TextStyle variation="strong">Test Results:</TextStyle>
                    <pre>{JSON.stringify(testResults.data, null, 2)}</pre>
                  </div>
                )}
              </div>
            )}
          </TextContainer>
        </Modal.Section>
      </Modal>
    </Page>
  );
}
