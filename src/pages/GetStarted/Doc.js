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
          <h2>Unlock the Power of Our App</h2>
          <p>
            Effortlessly keep your subitems in sync with changes made to the
            main column, or sync main column changes to subitems' columns
            automatically. Instantly update the person responsible for changes
            with the latest user who made the edit. Effortlessly add the user
            who made the change to the People column. Automatically update Start
            and End Dates based on the timeline when the status changes. Ensure
            Start and End Dates reflect any changes in both status and timeline
            for accurate scheduling.
          </p>
        </section>

        <section className="section">
          <h2>How to Install Our App</h2>
          <p>Open the App Marketplace and navigate to the App Marketplace in monday.com.</p>
          <p>Search for Power Tools by entering “Power Tools” into the search bar.</p>
          <p>Select our app and click the install button (it may vary based on the button available on the home screen).</p>
        </section>

        <section className="section">
          <h2>Getting Started with Our App</h2>
          <p>
            Access the Integration Center by heading over to the Integration
            Center in the board. Search for “Power Tools” by typing “Power
            Tools” into the search bar and selecting it. If you encounter any
            issues finding it, refresh or try searching again until it appears.
          </p>
          <p>Choose and configure your automation. Find the perfect automation for your needs, set it up, and watch it work its magic!</p>
        </section>

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
          <p>Thank you for using our app! We hope this guide has been helpful. For more detailed information, visit our FAQ page or reach out to our support team for further assistance.</p>
        </section>
      </div>
    </div>
  );
}

export default Doc;
