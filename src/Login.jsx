import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserLogin = (event) => {
  event.preventDefault();

  let savedUsers = JSON.parse(
    localStorage.getItem("bankShieldUsers")
  ) || [];

  // Old single-user data ko new users list mein convert karna
  const oldUser = JSON.parse(
    localStorage.getItem("bankShieldUser")
  );

  if (savedUsers.length === 0 && oldUser) {
    savedUsers = [oldUser];
    localStorage.setItem(
      "bankShieldUsers",
      JSON.stringify(savedUsers)
    );
  }

  const userIndex = savedUsers.findIndex(
    (user) =>
      user.email === userEmail &&
      user.password === userPassword
  );

  if (userIndex !== -1) {
    savedUsers[userIndex].lastLogin =
      new Date().toLocaleString();

    savedUsers[userIndex].loginCount =
      (savedUsers[userIndex].loginCount || 0) + 1;

    localStorage.setItem(
      "bankShieldUsers",
      JSON.stringify(savedUsers)
    );

    onLogin("user");
  } else {
    alert("Invalid User Email or Password!");
  }
};

  const handleAdminLogin = (event) => {
    event.preventDefault();

    if (
      adminEmail === "admin@gmail.com" &&
      adminPassword === "admin123"
    ) {
      onLogin("admin");
    } else {
      alert("Invalid Admin Email or Password!");
    }
  };

  const handleCreateAccount = (event) => {
  event.preventDefault();

  if (!name.trim() || !newEmail.trim() || !newPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (newPassword.length < 6) {
    alert("Password must contain at least 6 characters.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  let savedUsers = JSON.parse(
    localStorage.getItem("bankShieldUsers")
  ) || [];

  const oldUser = JSON.parse(
    localStorage.getItem("bankShieldUser")
  );

  if (savedUsers.length === 0 && oldUser) {
    savedUsers = [oldUser];
  }

  const emailExists = savedUsers.some(
    (user) =>
      user.email.toLowerCase() === newEmail.trim().toLowerCase()
  );

  if (emailExists) {
    alert("An account with this email already exists.");
    return;
  }

  const newUser = {
    name: name.trim(),
    email: newEmail.trim(),
    password: newPassword,
    registeredAt: new Date().toLocaleString(),
    lastLogin: "Not logged in yet",
    loginCount: 0
  };

  savedUsers.push(newUser);

  localStorage.setItem(
    "bankShieldUsers",
    JSON.stringify(savedUsers)
  );

  localStorage.setItem(
    "bankShieldUser",
    JSON.stringify(newUser)
  );

  alert("Account created successfully! Please login.");

  setUserEmail(newEmail);
  setUserPassword("");

  setName("");
  setNewEmail("");
  setNewPassword("");
  setConfirmPassword("");

  setShowCreateAccount(false);
};

  if (showCreateAccount) {
    return (
      <div className="login-page">

        <div className="login-header">
          <h1>🔐 BankShield</h1>
          <p>Online Banking Security Assistant</p>
        </div>

        <div className="login-container">

          <div className="login-box user-box">

            <h2>👤 CREATE ACCOUNT</h2>

            <form onSubmit={handleCreateAccount}>

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={newEmail}
                onChange={(event) =>
                  setNewEmail(event.target.value)
                }
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Create password"
                value={newPassword}
                onChange={(event) =>
                  setNewPassword(event.target.value)
                }
                required
              />

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                required
              />

              <button
                type="submit"
                className="login-button"
              >
                Create Account
              </button>

            </form>

            <button
              type="button"
              className="create-account"
              onClick={() => setShowCreateAccount(false)}
            >
              ← Back to Login
            </button>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="login-page">

      <div className="login-header">
        <h1>🔐 BankShield</h1>
        <p>Online Banking Security Assistant</p>
      </div>

      <div className="login-container">

        <div className="login-box user-box">

          <h2>👤 USER LOGIN</h2>

          <form onSubmit={handleUserLogin}>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(event) =>
                setUserEmail(event.target.value)
              }
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(event) =>
                setUserPassword(event.target.value)
              }
              required
            />

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          <button
            type="button"
            className="create-account"
            onClick={() => setShowCreateAccount(true)}
          >
            Create Account
          </button>

        </div>

        <div className="login-box admin-box">

          <h2>👨‍💼 ADMIN LOGIN</h2>

          <form onSubmit={handleAdminLogin}>

            <label>Admin Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={adminEmail}
              onChange={(event) =>
                setAdminEmail(event.target.value)
              }
              required
            />

            <label>Admin Password</label>

            <input
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(event) =>
                setAdminPassword(event.target.value)
              }
              required
            />

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;