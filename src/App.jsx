import { useState } from "react";
import "./App.css";
import SplashScreen from "./SplashScreen";
import Login from "./Login";
import ScamAlerts from "./ScamAlerts";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [userType, setUserType] = useState("");
  const [showRegisteredUsers, setShowRegisteredUsers] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showScamAlerts, setShowScamAlerts] = useState(false);
  const [showLinkChecker, setShowLinkChecker] = useState(false);
  const [link, setLink] = useState("");
  const [linkResult, setLinkResult] = useState("");
  const [showPasswordChecker, setShowPasswordChecker] = useState(false);
  const [password, setPassword] = useState("");
  const [showRiskScanner, setShowRiskScanner] = useState(false);

const [riskAnswers, setRiskAnswers] = useState([
  null,
  null,
  null,
  null,
  null,
  null
]);

const [riskScanned, setRiskScanned] = useState(false);

const [riskScore, setRiskScore] = useState(0);

const [riskLevel, setRiskLevel] = useState("");
  const [showFraudAwareness, setShowFraudAwareness] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(true));
  const [showEmergencyHelp, setShowEmergencyHelp] = useState(false);

  const handleStart = () => {
    setShowSplash(false);
    setShowLogin(true);
  };

  const checkLink = () => {
  if (!link.trim()) {
    setLinkResult("⚠️ Please enter a website link.");
    return;
  }

  const lowerLink = link.toLowerCase();

  if (
    !lowerLink.startsWith("https://") ||
    lowerLink.includes("@") ||
    lowerLink.includes("bit.ly") ||
    lowerLink.includes("tinyurl")
  ) {
    setLinkResult(
      "🚨 Warning: This link has some suspicious signs. Avoid opening it until you verify it."
    );
  } else {
    setLinkResult(
      "✅ No obvious warning signs detected. Still verify the website before entering banking information."
    );
  }
};

const checkPassword = () => {
  if (!password) {
    alert("Please enter a password.");
    return;
  }

  if (password.length < 8) {
    alert("⚠️ Weak Password: Use at least 8 characters.");
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("⚠️ Medium Password: Add an uppercase letter and a number.");
  } else {
    alert(
      "✅ Strong Password: Your password meets the basic security requirements."
    );
  }
};

  if (showSplash) {
    return <SplashScreen onStart={handleStart} />;
  }

   if (showLogin) {
  return (
    <Login
      onLogin={(type) => {
        setUserType(type);
        setShowLogin(false);
      }}
    />
  );
}

if (showRegisteredUsers) {
  const registeredUsers =
    JSON.parse(localStorage.getItem("bankShieldUsers")) || [];

  return (
    <div className="registered-users-page">

      <h1>👥 Registered Users</h1>

      <p>
        View users who have registered for the BankShield application.
      </p>

      <div className="registered-users-card">

        <h2>👥 User List</h2>

        {registeredUsers.length === 0 ? (
          <p>No registered users found.</p>
        ) : (
          <div className="users-table">

            <div className="user-row user-header">
              <span>Name</span>
              <span>Email</span>
              <span>Registered</span>
              <span>Last Login</span>
              <span>Login Count</span>
            </div>

            {registeredUsers.map((user, index) => (
              <div className="user-row" key={index}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.registeredAt || "N/A"}</span>
                <span>{user.lastLogin || "Not logged in"}</span>
                <span>{user.loginCount || 0}</span>
              </div>
            ))}

          </div>
        )}

      </div>

      <button
        className="back-dashboard-btn"
        onClick={() => setShowRegisteredUsers(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

  if (showTips){
  return (
    <div className="tips-page">
      <h1>🛡️ Security Tips</h1>

      <p>Follow these simple tips to stay safe while banking online.</p>

      <div className="tips-list">
        <p>🔐 Use a strong and unique password for your banking account.</p>

        <p>📱 Never share your OTP, PIN, or password with anyone.</p>

        <p>🔗 Avoid clicking suspicious banking links.</p>

        <p>📶 Avoid using public Wi-Fi for banking transactions.</p>

        <p>🔗 Always verify a website link before entering banking details.</p>

        <p>📲 Keep your banking app and mobile device updated.</p>
        
        <p>🔔 Enable transaction alerts to monitor your account activity.</p>
        
        <p>💳 Check your bank statements regularly for unauthorized transactions.</p>
        
        <p>🚨 Contact your bank immediately if you notice suspicious activity.</p>
      </div>

      <button onClick={() => setShowTips(false)}>
        ← Back to Dashboard
      </button>
    </div>
  );
}

if (showScamAlerts) {
  return (
    <ScamAlerts
      onBack={() => setShowScamAlerts(false)}
    />
  );
}


if (showLinkChecker) {
  return (
    <div className="link-checker-page">

      <h1>🔗 Check Suspicious Link</h1>

      <p>
        Enter a link below to check it for common warning signs
        and suspicious activity.
      </p>

      <div className="link-checker-card">

        <h2>Check Your Link</h2>

        <input
          type="text"
          placeholder="Enter website link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button onClick={checkLink}>
          Check Link
        </button>

        {linkResult && (
          <p className="link-result">
            {linkResult}
          </p>
        )}

      </div>

      <button
        className="back-dashboard-btn"
        onClick={() => setShowLinkChecker(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}
if (showPasswordChecker) {
  return (
    <div className="password-checker-page">

      <h1>🔑 Password Security</h1>

      <p>
        Enter your password to check its basic strength and learn how
        secure your password is.
      </p>

      <div className="password-checker-card">

        <h2>Check Your Password</h2>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={checkPassword}>
          Check Password
        </button>

      </div>

      <button
        className="back-dashboard-btn"
        onClick={() => setShowPasswordChecker(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

if (showFraudAwareness) {
  return (
    <div className="fraud-awareness-page">

      <div className="fraud-top">
        <div>
          <h1>🚨 Fraud Awareness</h1>
          <p>
            Learn how scammers target online banking users and how you can
            protect yourself from common fraud attempts.
          </p>
        </div>
      </div>

      <div className="fraud-warning">
        <span>🔐</span>
        <div>
          <h2>Stay Alert, Stay Safe</h2>
          <p>
            Your bank will never ask you to share your OTP, PIN, CVV,
            password, or other confidential banking information.
          </p>
        </div>
      </div>

      <h2 className="section-title">Common Banking Frauds</h2>

      <div className="fraud-list">

        <div className="fraud-item">
          <div className="fraud-icon">📱</div>
          <div>
            <h3>OTP, PIN & Password Scams</h3>
            <p>
              Fraudsters may pretend to be bank employees and ask for your
              OTP, PIN, or password. They may create fear by saying your
              account will be blocked. Never share these details with anyone.
            </p>
          </div>
        </div>

        <div className="fraud-item">
          <div className="fraud-icon">🔗</div>
          <div>
            <h3>Phishing & Fake Banking Links</h3>
            <p>
              Fake SMS, emails, and messages may contain links that look like
              your bank's website. These links can steal your login or card
              information. Always use your bank's official app or website.
            </p>
          </div>
        </div>

        <div className="fraud-item">
          <div className="fraud-icon">📞</div>
          <div>
            <h3>Fake Bank Calls</h3>
            <p>
              Scammers may call pretending to be bank employees or KYC agents.
              They often create urgency and ask for confidential information.
              End the call and contact your bank through an official number.
            </p>
          </div>
        </div>

        <div className="fraud-item">
          <div className="fraud-icon">💳</div>
          <div>
            <h3>Card & Banking Details Fraud</h3>
            <p>
              Never share your card number, CVV, PIN, password, or other
              banking details. Criminals can misuse this information for
              unauthorized transactions. Keep your financial information private.
            </p>
          </div>
        </div>

        <div className="fraud-item">
          <div className="fraud-icon">🎁</div>
          <div>
            <h3>Fake Rewards & Cashback</h3>
            <p>
              Scammers may promise prizes, cashback, or refunds to gain your
              trust. They may ask you to click a link or pay a small fee.
              Do not make payments to claim unexpected rewards.
            </p>
          </div>
        </div>

      </div>

      <div className="fraud-action">
        <h2>🚨 If You Suspect Fraud</h2>
        <p>
          Stop communicating with the suspicious person and do not share
          any more information. Contact your bank immediately through an
          official channel and report any suspicious transaction.
        </p>
      </div>

      <button
        className="back-dashboard-btn"
        onClick={() => setShowFraudAwareness(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

if (showRiskScanner) {
  const riskQuestions = [
    "Do you use a strong and unique password for online banking?",
    "Is Two-Factor Authentication enabled on your banking account?",
    "Do you never share your OTP, PIN, or password with anyone?",
    "Do you verify website links before entering banking information?",
    "Do you regularly update your banking app?",
    "Do you avoid using public Wi-Fi for online banking?"
  ];

  const allAnswered = riskAnswers.every(
    (answer) => answer !== null
  );

  const scanRisk = () => {
    const safeAnswers = riskAnswers.filter(
      (answer) => answer === true
    ).length;

    const score = Math.round(
      (safeAnswers / riskQuestions.length) * 100
    );

    setRiskScore(score);

    if (score >= 80) {
      setRiskLevel("Low Risk");
    } else if (score >= 50) {
      setRiskLevel("Medium Risk");
    } else {
      setRiskLevel("High Risk");
    }

    setRiskScanned(true);
  };

  const selectRiskAnswer = (index, answer) => {
    setRiskAnswers((previous) =>
      previous.map((item, i) =>
        i === index ? answer : item
      )
    );
  };

  return (
    <div className="risk-scanner-page">

      {/* Header */}

      <h1>🔍 Security Risk Scanner</h1>

      {/* Introduction */}

      <p>
        Scan your banking security habits and identify possible
        security risks. Answer the questions below to check your
        current security level.
      </p>


      {/* Security Questions */}

      <div className="risk-scanner-card">

        <h2>🔍 Start Security Scan</h2>

        <p>
          Answer each question honestly to calculate your
          security risk level.
        </p>

        <div className="risk-questions">

          {riskQuestions.map((question, index) => (
            <div
              className="risk-question"
              key={index}
            >

              <p>
                {index + 1}. {question}
              </p>

              <div className="risk-options">

                <button
                  className={
                    riskAnswers[index] === true
                      ? "risk-option selected"
                      : "risk-option"
                  }
                  onClick={() =>
                    selectRiskAnswer(index, true)
                  }
                >
                  Yes
                </button>

                <button
                  className={
                    riskAnswers[index] === false
                      ? "risk-option selected"
                      : "risk-option"
                  }
                  onClick={() =>
                    selectRiskAnswer(index, false)
                  }
                >
                  No
                </button>

              </div>

            </div>
          ))}

        </div>


        {/* Scan Button */}

        <button
          className="scan-risk-btn"
          onClick={scanRisk}
          disabled={!allAnswered}
        >
          🔍 Scan My Security
        </button>

      </div>


      {/* Risk Result */}

      {riskScanned && (
        <div className="risk-result-card">

          <div className="risk-result-icon">
            {riskScore >= 80
              ? "🛡️"
              : riskScore >= 50
              ? "⚠️"
              : "🚨"}
          </div>

          <div>

            <h2>Security Risk Result</h2>

            <h3>
              Security Score: {riskScore}%
            </h3>

            <h3>
              Risk Level: {riskLevel}
            </h3>

            <p>
              {riskScore >= 80
                ? "Your security practices are generally strong. Keep following safe banking practices."
                : riskScore >= 50
                ? "Your security practices have some weaknesses. Review the recommended actions below."
                : "Your security practices have several risks. Take the recommended actions to improve your banking security."
              }
            </p>

          </div>

        </div>
      )}


      {/* Recommended Actions */}

      {riskScanned && riskScore < 100 && (
        <div className="risk-recommendations">

          <h2>💡 Recommended Actions</h2>

          <ul>

            {riskAnswers[0] === false && (
              <li>
                Use a strong and unique password for your
                banking account.
              </li>
            )}

            {riskAnswers[1] === false && (
              <li>
                Enable Two-Factor Authentication for
                additional protection.
              </li>
            )}

            {riskAnswers[2] === false && (
              <li>
                Never share your OTP, PIN, or password
                with anyone.
              </li>
            )}

            {riskAnswers[3] === false && (
              <li>
                Always verify website links before entering
                your banking information.
              </li>
            )}

            {riskAnswers[4] === false && (
              <li>
                Keep your banking application updated.
              </li>
            )}

            {riskAnswers[5] === false && (
              <li>
                Avoid using public Wi-Fi for online banking.
              </li>
            )}

          </ul>

        </div>
      )}


      {/* Back to Dashboard */}

      <button
        className="back-dashboard-btn"
        onClick={() => setShowRiskScanner(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}


if (showChecklist) {
  const checklistItems = [
    "Use Strong & Unique Password.",
    "Enable Two-Factor Authentication.",
    "Never share OTP, PIN, or password.",
    "Update Banking Apps Regularly.",
    "Verify URLs Before Login.",
    "Lock Your Device.",
    "Avoid banking on public Wi-Fi."
  ];

  const allChecked = checkedItems.every((item) => item === true);

  const toggleChecklistItem = (index) => {
    setCheckedItems((previous) =>
      previous.map((item, i) =>
        i === index ? !item : item
      )
    );
  };

  return (
    <div className="checklist-page">

      <h1>🛡️ Security Checklist</h1>

      <p>
        Complete the checklist below to review important security
        practices for safe online banking.
      </p>

      <div className="checklist-content">

        <h2>Security Checks</h2>

        {checklistItems.map((item, index) => (
          <div className="checklist-item" key={index}>

            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => toggleChecklistItem(index)}
            />

            <span>{item}</span>

          </div>
        ))}

      </div>

      {allChecked ? (
        <div className="security-result secure">

          <div className="result-icon">🛡️</div>

          <div>
            <h2>You're Secure!</h2>

            <p>
              Great job! You have completed all security checks.
              Keep following these practices to protect your
              banking account.
            </p>
          </div>

        </div>
      ) : (
        <div className="security-result warning">

          <div className="result-icon">⚠️</div>

          <div>
            <h2>Security Check Incomplete</h2>

            <p>
              Complete the remaining checks to improve your
              banking security.
            </p>
          </div>

        </div>
      )}

      <button
        className="back-dashboard-btn"
        onClick={() => setShowChecklist(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

if (showEmergencyHelp) {
  return (
    <div className="emergency-help-page">

      <h1>🚨 Emergency Help</h1>

      <p>
        If you suspect an online banking fraud or cyber crime, take
        immediate action and use the official reporting channels below.
      </p>

      <div className="emergency-main">

        {/* Helpline Section */}
        <div className="helpline-section">

          <div className="emergency-phone-icon">
            📞
          </div>

          <h2>National Cyber Crime Helpline</h2>

          <div className="helpline-number">
            1930
          </div>

          <a
            href="tel:1930"
            className="call-button"
          >
            📞 Call 1930
          </a>

        </div>


        {/* Cyber Crime Portal */}
        <div className="cybercrime-section">

          <h2>Report Cyber Crime</h2>

          <p>
            Report cyber fraud and other cyber crimes through the
            official government portal.
          </p>

          <a
            href="https://www.cybercrime.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="report-button"
          >
            Report Cyber Crime
          </a>

          <p className="website-name">
            cybercrime.gov.in
          </p>

        </div>


        {/* What to do */}
        <div className="victim-section">

          <h2>What to do if you are a victim?</h2>

          <div className="victim-step">
            <span>•</span>
            <p>Immediately call your bank.</p>
          </div>

          <div className="victim-step">
            <span>•</span>
            <p>Change your banking passwords.</p>
          </div>

          <div className="victim-step">
            <span>•</span>
            <p>Report the incident at cybercrime.gov.in.</p>
          </div>

        </div>


        {/* Safety Reminder */}
        <div className="emergency-reminder">
          🔒 Never share your OTP, PIN, CVV or password with anyone.
        </div>

      </div>


      {/* Back to Dashboard */}
      <button
        className="back-dashboard-btn"
        onClick={() => setShowEmergencyHelp(false)}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}
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

            <button onClick={() => setShowTips(true)}>
  View Tips
</button>
          </div>

          {/* Scam Alerts */}
<div className="card">
  <div className="icon">🚨</div>

  <h3>Scam Alerts</h3>

  <p>
    Learn about common scams, warning signs, and fraud alerts.
  </p>

  <button onClick={() => setShowScamAlerts(true)}>
    View Scam Alerts
  </button>
</div>

          {/* Link Checker */}
          <div className="card">
            <div className="icon">🔗</div>
            <h3>Check Suspicious Link</h3>

            <p>
              Check a suspicious link before opening it.
            </p>

            <button onClick={() => setShowLinkChecker(true)}>
  Check Link
</button>
          </div>

          {/* Password Security */}
          <div className="card">
            <div className="icon">🔑</div>
            <h3>Password Security</h3>

            <p>
              Check whether your password is strong and secure.
            </p>

            <button onClick={() => setShowPasswordChecker(true)}>
  Check Password
</button>
          </div>


          {/* Fraud Awareness */}
          <div className="card">
            <div className="icon">🚨</div>
            <h3>Fraud Awareness</h3>

            <p>
              Learn about common online banking scams and fraud.
            </p>

            <button onClick={() => setShowFraudAwareness(true)}>
              Learn More
            </button>
          </div>

          {/* Security Checklist */}
          <div className="card">
            <div className="icon">✅</div>
            <h3>Security Checklist</h3>

            <p>
              Check important security practices for your account.
            </p>

            <button onClick={() => setShowChecklist(true)}>
              Open Checklist
            </button>
          </div>

          {/* Emergency Help */}
          <div className="card emergency">
            <div className="icon">🆘</div>
            <h3>Emergency Help</h3>

            <p>
              See what to do if you suspect banking fraud.
            </p>

            <button onClick={() => setShowEmergencyHelp(true)}>
              Get Help
            </button>
          </div>

          {/* Security Risk Scanner */}
<div className="card">
  <div className="icon">🔍</div>
  <h3>Security Risk Scanner</h3>

  <p>
    Scan your banking security habits and identify possible risks.
  </p>

  <button onClick={() => setShowRiskScanner(true)}>
    Start Scan
  </button>
</div>

{userType === "admin" && (
  <div className="card">
    <div className="icon">👥</div>
    <h3>Registered Users</h3>
    <p>
      View users registered with BankShield.
    </p>
    <button onClick={() => setShowRegisteredUsers(true)}>
      View Users
    </button>
  </div>
)}

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