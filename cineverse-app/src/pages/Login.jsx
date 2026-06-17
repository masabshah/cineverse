import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password length validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Login successful
    alert("Login Successful!");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <form className="login-card" onSubmit={handleLogin}>
          <h1>Cinverse</h1>

          <p className="tagline">
            Experience Movies Like Never Before
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

          <p className="signup-link">
            New User?
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              {" "}
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}