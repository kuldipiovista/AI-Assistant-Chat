import { useState } from "react";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { login } from "../../shopify.server";
import { loginErrorMessage } from "./error.server";

export const loader = async ({ request }) => {
  const errors = loginErrorMessage(await login(request));
  return { errors };
};

export const action = async ({ request }) => {
  const errors = loginErrorMessage(await login(request));
  return { errors };
};

export default function Auth() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [shop, setShop] = useState("");
  const { errors } = actionData || loaderData;

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      marginTop: '50px'
    }}>
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '30px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Log in</h2>
        <Form method="post">
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '5px',
              fontWeight: 'bold'
            }}>
              Shop domain
            </label>
            <input
              type="text"
              name="shop"
              value={shop}
              onChange={(e) => setShop(e.target.value)}
              autoComplete="on"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              placeholder="example.myshopify.com"
            />
            {errors?.shop && (
              <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                {errors.shop}
              </p>
            )}
            <p style={{ 
              fontSize: '12px', 
              color: '#666', 
              marginTop: '5px',
              marginBottom: 0
            }}>
              example.myshopify.com
            </p>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007cba',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              width: '100%'
            }}
          >
            Log in
          </button>
        </Form>
      </div>
    </div>
  );
}
