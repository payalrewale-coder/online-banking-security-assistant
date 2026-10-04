import React, { useState } from "react";
import "./ScamAlerts.css";

function ScamAlerts({ onBack }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="scam-alerts-page">

      <div className="scam-alerts-header">

        <h1>🚨 Scam Alerts</h1>
      </div>

      <div className="scam-alerts-intro">
        <h2>Stay Informed. Stay Protected.</h2>

        <p>
          Learn about common banking scams and the warning signs
          that can help you avoid fraud.
        </p>
      </div>

      <div className="scam-alerts-container">

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">🔴</span>
            <h3>Fake KYC Update</h3>
          </div>

          <p>
            Scammers may send messages claiming that your bank
            account or KYC will be blocked unless you update your
            details immediately.
          </p>

          <div className="scam-warning">
            ⚠️ Never share your OTP, PIN, password, or banking
            details through an unexpected link.
          </div>
        </div>

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">📱</span>
            <h3>UPI & QR Code Scams</h3>
          </div>

          <p>
            Fraudsters may send fake payment requests or ask you
            to scan a QR code to receive money.
          </p>

          <div className="scam-warning">
            ⚠️ You normally do not need to enter your UPI PIN
            to receive money.
          </div>
        </div>

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">🔗</span>
            <h3>Phishing & Fake Links</h3>
          </div>

          <p>
            Fake banking links can look similar to genuine websites
            and may try to steal your login or payment information.
          </p>

          <div className="scam-warning">
            ⚠️ Avoid clicking unexpected banking links and verify
            the website address before entering information.
          </div>
        </div>

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">📞</span>
            <h3>Fraud Calls</h3>
          </div>

          <p>
            Someone may call pretending to be from your bank,
            customer support, or another official organization.
          </p>

          <div className="scam-warning">
            ⚠️ Never share your OTP, PIN, CVV, or password with
            an unsolicited caller.
          </div>
        </div>

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">💬</span>
            <h3>SMS & WhatsApp Scams</h3>
          </div>

          <p>
            Fraudulent messages may use urgent warnings, fake
            rewards, account-blocking threats, or suspicious links.
          </p>

          <div className="scam-warning">
            ⚠️ Be careful when a message pressures you to act
            immediately.
          </div>
        </div>

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">💼</span>
            <h3>Job & Investment Scams</h3>
          </div>

          <p>
            Fake jobs and investment opportunities may promise
            easy income or unusually high returns.
          </p>

          <div className="scam-warning">
            ⚠️ Be cautious if someone asks for an upfront payment
            or sensitive banking information.
          </div>
        </div>

        <div className="scam-alert-card">
          <div className="scam-alert-top">
            <span className="scam-alert-icon">🎁</span>
            <h3>Fake Offers & Rewards</h3>
          </div>

          <p>
            Fake lottery, cashback, prize, and festival offers may
            ask you to pay a fee or provide financial information.
          </p>

          <div className="scam-warning">
            ⚠️ Unexpected rewards that require payment or banking
            details should be treated with caution.
          </div>
        </div>

        <div className="warning-signs">
          <h2>🔍 Common Scam Warning Signs</h2>

          <ul>
            <li>⏰ Someone pressures you to act immediately.</li>
            <li>🔗 You receive an unexpected or suspicious link.</li>
            <li>🔐 Someone asks for your OTP, PIN, CVV, or password.</li>
            <li>💰 You are asked to transfer money unexpectedly.</li>
            <li>🎁 You are promised an unrealistic reward or return.</li>
            <li>📞 An unknown caller claims to represent your bank.</li>
          </ul>
        </div>

        <div className="scam-quiz">
          <h2>🧠 Quick Scam Quiz</h2>

          <p>
            A caller claims to be from your bank and asks for
            your OTP. What should you do?
          </p>

          <button onClick={() => checkAnswer("wrong")}>
            A. Give the OTP
          </button>

          <button onClick={() => checkAnswer("correct")}>
            B. End the call and contact the bank through an official channel
          </button>

          <button onClick={() => checkAnswer("wrong")}>
            C. Give only part of the OTP
          </button>

          {selectedAnswer === "correct" && (
            <div className="scam-warning">
              ✅ Correct! Never share your OTP. Contact your bank
              through an official channel if you are concerned.
            </div>
          )}

          {selectedAnswer === "wrong" && (
            <div className="scam-warning">
              ❌ Not quite. Never share your OTP with someone who
              contacts you unexpectedly.
            </div>
          )}
          

        </div>
         <button onClick={onBack}>
            ← Back to Dashboard
            </button>

      </div>
    </div>
  );
}
export default ScamAlerts;