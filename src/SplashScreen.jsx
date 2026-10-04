import "./SplashScreen.css";

function SplashScreen({ onStart }) {
  return (
    <div className="splash-screen">
      <div className="splash-card">
        <div className="splash-logo">🔐</div>

        <h1>BankShield</h1>

        <p>Online Banking Security Assistant</p>

        <div className="splash-shield">🛡️</div>

        <h2>Stay Safe. Bank Securely.</h2>

        <p className="splash-description">
          Protect your banking information from online fraud,
          phishing and other security threats.
        </p>

        <button className="start-button" onClick={onStart}>
          Get Started
        </button>
      </div>

      <div className="splash-footer">
        Your security is our priority
      </div>
    </div>
  );
}

export default SplashScreen;