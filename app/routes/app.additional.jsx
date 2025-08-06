import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <TitleBar title="Additional page" />
      <h1>Additional Page</h1>
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <p>
          The app template comes with an additional page which
          demonstrates how to create multiple pages within app navigation
          using{" "}
          <a
            href="https://shopify.dev/docs/apps/tools/app-bridge"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007cba', textDecoration: 'none' }}
          >
            App Bridge
          </a>
          .
        </p>
        <p>
          To create your own page and have it show up in the app
          navigation, add a page inside <code>app/routes</code>, and a
          link to it in the <code>&lt;NavMenu&gt;</code> component found
          in <code>app/routes/app.jsx</code>.
        </p>
      </div>
      
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2>Resources</h2>
        <ul>
          <li>
            <a
              href="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007cba', textDecoration: 'none' }}
            >
              App nav best practices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
