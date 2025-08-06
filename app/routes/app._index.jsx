import { json } from "@remix-run/node";
import {
  Page,
  Layout,
  Card,
  Button,
  Text
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  return json({ success: true });
};

export default function VoiceSearchDashboard() {
  return (
    <Page title="Voice Search Settings">
      <Layout>
        <Layout.Section>
          <Card title="Widget Settings" sectioned>
            <Text>Voice search widget configuration</Text>
            <Button>Save Settings</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
