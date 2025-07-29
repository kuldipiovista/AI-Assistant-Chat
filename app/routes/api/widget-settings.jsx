// app/routes/api/widget-settings.jsx

// In-memory store for dev only. Use DB or metafield for production!
let widgetSettings = { chatEnabled: false };

export const loader = async () => {
  console.log("widgetSettings", widgetSettings);
  return new Response(JSON.stringify(widgetSettings), {
    headers: { "Content-Type": "application/json" },
  });
};

export const action = async ({ request }) => {
  const { chatEnabled } = await request.json();
  console.log("chatEnabled", chatEnabled);
  widgetSettings.chatEnabled = chatEnabled;
  return new Response(JSON.stringify({ success: true }));
};
