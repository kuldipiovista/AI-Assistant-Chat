import { json } from "@remix-run/node";
import { useState, useCallback } from "react";
import {
  Page,
  Layout,
  Card,
  Button,
  Text,
  BlockStack,
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Banner,
  DataTable
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  return json({ success: true });
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  return json({ success: true });
};

function getDefaultSettings() {
  return {
    // Ollama Configuration
    ollamaEnabled: process.env.OLLAMA_ENABLED === "true",
    ollamaEndpoint: process.env.OLLAMA_ENDPOINT || "http://localhost:11434",
    ollamaModel: process.env.OLLAMA_MODEL || "whisper",
    ollamaFallbackEnabled: process.env.OLLAMA_FALLBACK_ENABLED === "true",
    
    // Voice Search Configuration
    voiceSearchEnabled: process.env.VOICE_SEARCH_ENABLED === "true",
    voiceLanguage: process.env.VOICE_LANGUAGE || "en-US",
    voiceTimeout: process.env.VOICE_TIMEOUT || "5000",
    
    // Widget Configuration
    widgetEnabled: true,
    widgetPosition: "bottom-right",
    widgetTheme: "light"
  };
}

export default function VoiceSearchDashboard() {
  const [settings, setSettings] = useState(getDefaultSettings());
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    // Save settings logic here
    setTimeout(() => setIsSaving(false), 1000);
  }, []);

  const widgetSettingsRows = [
    ['Widget Enabled', settings.widgetEnabled ? 'Yes' : 'No'],
    ['Position', settings.widgetPosition],
    ['Theme', settings.widgetTheme],
  ];

  const voiceSettingsRows = [
    ['Voice Search Enabled', settings.voiceSearchEnabled ? 'Yes' : 'No'],
    ['Language', settings.voiceLanguage],
    ['Timeout', `${settings.voiceTimeout}ms`],
    ['Ollama Enabled', settings.ollamaEnabled ? 'Yes' : 'No'],
    ['Ollama Endpoint', settings.ollamaEndpoint],
    ['Ollama Model', settings.ollamaModel],
  ];

  return (
    <Page title="Voice Search Settings">
      <Layout>
        <Layout.Section>
          <Card title="Widget Settings" sectioned>
            <BlockStack gap="400">
              <Text>Voice search widget configuration</Text>
              <DataTable
                columnContentTypes={['text', 'text']}
                headings={['Setting', 'Value']}
                rows={widgetSettingsRows}
              />
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card title="Voice Search Configuration" sectioned>
            <BlockStack gap="400">
              <Text>Voice recognition and Ollama integration settings</Text>
              <DataTable
                columnContentTypes={['text', 'text']}
                headings={['Setting', 'Value']}
                rows={voiceSettingsRows}
              />
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
            <BlockStack gap="400">
              <Banner title="Voice Recognition Status" status="info">
                <p>Voice recognition is currently {settings.voiceSearchEnabled ? 'enabled' : 'disabled'}. 
                Make sure your browser supports speech recognition and microphone access is granted.</p>
              </Banner>
              <Button 
                primary 
                onClick={handleSave}
                loading={isSaving}
              >
                Save Settings
              </Button>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
