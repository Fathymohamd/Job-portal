import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Building2, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const Register = () => {
  const [role, setRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error , setError] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
     checkbox: false,
  });

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
       [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e) => {
e.preventDefault();
setError("");

if (!formData.name.trim()) {
toast.error("Please enter your name");
return;
}

if (!formData.email.trim()) {
toast.error("Please enter your email");
return;
}

const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

if (!emailRegex.test(formData.email)) {
toast.error("Please enter a valid email address");
return;
}

if (!formData.password) {
toast.error("Please enter your password");
return;
}

if (formData.password.length < 8) {
toast.error("Password must be at least 8 characters");
return;
}

if (formData.password !== formData.confirmPassword) {
toast.error("Passwords do not match");
return;
}

if (!formData.checkbox) {
toast.error("Please accept the terms and conditions");
return;
}

try {
const response = await fetch(
"https://job-portal-three-chi.vercel.app/api/auth/register",
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(formData),
}
);


const data = await response.json();

if (!response.ok) {
  toast.error(data.message || "Registration failed");
  return;
}

toast.success("Your account has been created successfully!");

setFormData({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  checkbox: false,
});

setTimeout(() => {
  navigate("/login");
}, 3000);

} catch (error) {

toast.error("Unable to connect to the server");
}
};


  return (
    <main className="register-page">
      <div className="register-container">
  
        {/* Left Side */}
        <div className="register-info">
          <Link to="/" className="register-logo">
            Job<span>Hub</span>
          </Link>

          <div className="register-info-content">
            <span>START YOUR JOURNEY</span>

            <h1>
              Find your dream job
              <br />
              or your next great hire.
            </h1>

            <p>
              Join our platform and connect with thousands of
              talented professionals and companies.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="register-form-container">

          <div className="register-heading">
            <h2>Create your account</h2>

            <p>
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Role */}
            <div className="role-section">
              <label>I want to</label>

              <div className="role-options">

                <button
                  type="button"
                  className={`role-card ${
                    role === "candidate" ? "selected" : ""
                  }`}
                  onClick={() => setRole("candidate")}
                >
                  <UserRound size={22} />

                  <div>
                    <strong>Find a Job</strong>
                    <span>
                      I'm looking for a job
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`role-card ${
                    role === "employer" ? "selected" : ""
                  }`}
                  onClick={() => setRole("employer")}
                >
                  <Building2 size={22} />

                  <div>
                    <strong>Hire Talent</strong>
                    <span>
                      I'm looking for employees
                    </span>
                  </div>
                </button>

              </div>
            </div>

{error && (
  <p className="error-message">
    ⚠ {error}
  </p>
)}
            <div className="input-group">
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
             
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
               
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>

              <div className="password-input">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
               
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="password-input">
                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
            
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms">
              <input
  type="checkbox"
  name="checkbox"
  checked={formData.checkbox}
  onChange={handleChange}
/>

              <span>
                I agree to the{" "}
                <Link to="/terms">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </span>
            </label>

          
            <button
              type="submit"
              className="register-button"
             
            >
              Create Account
            </button>

          </form>

        </div>
      </div>
    </main>
  );
};

export default Register;