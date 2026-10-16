import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
   const [error , setError] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault();
if(!email.trim()){
  toast.error("Please enter your email")
  return
}
  try {
    const res = await fetch(
      "hhttps://job-portal-three-chi.vercel.app/api/auth/ForgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }
setEmail("");
setError("");

  } catch (error) {
    console.log("FETCH ERROR:", error);
  }
};
  return (
    <section className="forgot-page">
      <div className="forgot-container">

        <div className="forgot-header">
          <div className="forgot-icon">🔐</div>

          <h1>Forgot Password?</h1>

          <p>
            Enter your email address and we'll help you reset
            your password.
          </p>
        </div>
        {error && (
  <p className="error-message">
    ⚠ {error}
  </p>
)}

        <form className="forgot-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

    <div className="input-wrapper">
  <input
    id="password"
    type="text"
    name="email"
    placeholder="Enter your password"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
          </div>

          <button type="submit" className="reset-button">
            Send Reset Link
          </button>

        </form>

        <div className="forgot-footer">
          <Link to="/login">
            ← Back to Login
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ForgotPassword;