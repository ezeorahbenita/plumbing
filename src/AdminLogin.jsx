import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
  e.preventDefault();

  setError("");

  try {
    const response = await fetch(
      "http://localhost:5000/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await response.json();

 if (response.ok && data.success) {
  localStorage.setItem("adminToken", data.token);
  onLogin();
  }
    else {
      setError(data.message || "Invalid email or password.");
    }
  }
   catch (error) {
    setError("Unable to connect to the server.");
  }

};

  return (
    <div className="admin-login">

      <div className="login-card">

        <div className="login-logo">
          DE-SOFEX
        </div>

        <p className="admin-label">
          ADMIN PORTAL
        </p>

        <h1>
          Welcome Back
        </h1>

        <p className="login-description">
          Sign in to manage plumbing bookings and
          customer requests.
        </p>

        <form onSubmit={handleLogin}>

          <div className="login-field">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          <div className="login-field">

            <label>
              Password
            </label>

            <div className="password-input-container">

  <input type={showPassword ? "text" : "password"} placeholder="Enter password"
    value={password} onChange={(e) =>setPassword(e.target.value) }
    required/>

  <button type="button" className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}> {showPassword ? "🙈" : "👁️"}
  </button>

</div>

          </div>


          {error && (
            <p className="login-error">
              {error}
            </p>
          )}


          <button
            type="submit"
            className="login-btn"
          >
            Login to Dashboard
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;