import React from "react";
import "../../styles/Doc.module.css";

function Doc() {
  return (
    <div className="doc-container">
      <header className="header">
        <h1>Welcome to the App Tutorial</h1>
        <p>Discover how to make the most out of our app with this comprehensive guide.</p>
      </header>

      <div className="main-content">
        <section className="section">
          <h2>Step 1: Setup</h2>
          <p>Start by downloading the app from our official website or app store. Follow the on-screen instructions to install it. Once installed, open the app and complete the initial setup by creating an account or logging in with your existing credentials.</p>
          <p>Ensure your device meets the minimum system requirements listed on our website for the best performance.</p>
        </section>

        <section className="section">
          <h2>Step 2: Using the Features</h2>
          <p>Explore the app’s key features:</p>
          <div className="features">
            <div className="feature-card">
              <h3>Dashboard</h3>
              <p>Get an overview of your activities and upcoming tasks with quick access to essential features.</p>
            </div>
            <div className="feature-card">
              <h3>Notifications</h3>
              <p>Stay updated with real-time notifications about your tasks and interactions.</p>
            </div>
            <div className="feature-card">
              <h3>Settings</h3>
              <p>Customize your experience by adjusting settings, updating your profile, and managing notifications.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Step 3: Troubleshooting</h2>
          <p>Encounter issues? Here are some common troubleshooting tips:</p>
          <div className="troubleshooting">
            <div className="troubleshoot-item">
              <h4>App won’t start:</h4>
              <p>Ensure your device meets the system requirements and try restarting the app. If the issue persists, reinstall the app or contact our support team.</p>
            </div>
            <div className="troubleshoot-item">
              <h4>Features not working:</h4>
              <p>Check for updates to ensure you have the latest version. Verify that your internet connection is stable.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Step 4: Final Notes</h2>
          <p>Thank you for using our app! We hope this guide has been helpful. For more detailed information, visit our <a href="#faq" className="cta-button">FAQ</a> page or reach out to our support team for further assistance.</p>
        </section>
      </div>
    </div>
  );
}

export default Doc;
