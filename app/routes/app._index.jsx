import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  return json({ success: true });
};

export default function VoiceSearchDashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Voice Search Settings</h1>
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2>Widget Settings</h2>
        <p>Voice search widget configuration</p>
        <button style={{
          backgroundColor: '#007cba',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Save Settings
        </button>
      </div>
    </div>
  );
}
