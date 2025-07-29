import { useState, useEffect, useCallback } from "react";
import { Checkbox, Button, Card, BlockStack, Toast, Frame } from "@shopify/polaris";

export default function WidgetSettings() {
  const [chatEnabled, setChatEnabled] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Fetch the saved value on mount
  useEffect(() => {
    fetch("/api/widget-settings")
      .then(res => res.json())
      .then(data => setChatEnabled(data.chatEnabled));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch("/api/widget-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatEnabled }),
    });
    setSaving(false);
    if (res.ok) {
      setToastMsg("Settings saved!");
    } else {
      setToastMsg("Failed to save settings.");
    }
    setShowToast(true);
  };

  const toastMarkup = showToast ? (
    <Toast content={toastMsg} onDismiss={() => setShowToast(false)} />
  ) : null;

  return (
    <Frame>
      {toastMarkup}
    </Frame>
  );
}
