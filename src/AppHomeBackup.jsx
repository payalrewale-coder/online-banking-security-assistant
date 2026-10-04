import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">🔐</div>

        <div>
          <h1>BankShield</h1>
          <p>Online Banking Security Assistant</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <section className="welcome">
          <h2>Stay Safe While Banking Online</h2>

          <p>
            Protect yourself from phishing, fraud, suspicious links,
            and other online banking threats.
          </p>
        </section>

        <h2 className="section-title">Security Tools</h2>

        <div className="features">

          {/* Security Tips */}
          <div className="card">
            <div className="icon">🛡️</div>
            <h3>Security Tips</h3>

            <p>
              Learn simple ways to protect your online banking account.
            </p>

            <button>View Tips</button>
          </div>

          {/* Link Checker */}
          <div className="card">
            <div className="icon">🔗</div>
            <h3>Check Suspicious Link</h3>

            <p>
              Check a suspicious link before opening it.
            </p>

            <button>Check Link</button>
          </div>

          {/* Password Security */}
          <div className="card">
            <div className="icon">🔑</div>
            <h3>Password Security</h3>

            <p>
              Check whether your password is strong and secure.
            </p>

            <button>Check Password</button>
          </div>

          {/* Fraud Awareness */}
          <div className="card">
            <div className="icon">🚨</div>
            <h3>Fraud Awareness</h3>

            <p>
              Learn about common online banking scams and fraud.
            </p>

            <button>Learn More</button>
          </div>

          {/* Security Checklist */}
          <div className="card">
            <div className="icon">✅</div>
            <h3>Security Checklist</h3>

            <p>
              Check important security practices for your account.
            </p>

            <button>Open Checklist</button>
          </div>

          {/* Emergency Help */}
          <div className="card emergency">
            <div className="icon">🆘</div>
            <h3>Emergency Help</h3>

            <p>
              See what to do if you suspect banking fraud.
            </p>

            <button>Get Help</button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>
          © 2026 BankShield | Online Banking Security Assistant
        </p>
      </footer>
    </div>
  );
}

export default App;