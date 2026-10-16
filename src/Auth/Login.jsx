import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Eye, EyeOff, BriefcaseBusiness } from "lucide-react";
import { useSelector , useDispatch } from "react-redux";
import {loginUser}  from "../redux/slices/authSlice"
import { setUser } from "../redux/slices/getCurrentUser";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector((state)=> state.auth.user)
  const loading = useSelector((state) => state.auth.loading);
  console.log(user)

  const dispatch = useDispatch();
 
   useEffect(()=>{
   dispatch(loginUser)
   } , [dispatch])

  const navigate = useNavigate()

    const [error , setError] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
     checkbox: false
  });

  
  const handleChange = (e) => {
    const { name, value , type, checked} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


const handleSubmit = async (e) => {
e.preventDefault();
setError("");


if (!formData.email.trim() || !formData.password.trim()) {
toast.error("Please enter your email and password");
return;
}


const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

if (!emailRegex.test(formData.email)) {
toast.error("Please enter a valid email address");
return;
}


if (formData.password.length < 8) {
toast.error("Password must be at least 8 characters");
return;
}


if (!formData.checkbox) {
toast.error("Please accept the checkbox before continuing");
return;
}

try {

const data = await dispatch(
loginUser({
email: formData.email.trim(),
password: formData.password,
checkbox: formData.checkbox,
})
).unwrap();


toast.success("Login successful!");
dispatch(setUser(data));

setFormData({
  email: "",
  password: "",
  checkbox: false,
});

setTimeout(() => {
  navigate("/");
}, 3000);


} catch (error) {
console.log("Login error:", error);


toast.error(
  typeof error === "string"
    ? error
    : "فشل تسجيل الدخول، تأكد من الإيميل والباسورد"
);


}
};

  

  return (
    <main className="login-page">
      <div className="login-container">

        {/* Left Side */}

        <section className="login-info">

          <Link to="/" className="login-logo">
            Job<span>Hub</span>
          </Link>

          <div className="login-info-content">

            <div className="login-icon">
              <BriefcaseBusiness size={28} />
            </div>

            <span>WELCOME BACK</span>

            <h1>
              Your next
              <br />
              opportunity is waiting.
            </h1>

            <p>
              Sign in to discover new opportunities,
              manage your applications, and continue
              building your career.
            </p>

          </div>

        </section>

        {/* Right Side */}

        <section className="login-form-container">

          <div className="login-heading">

            <h2>Welcome back</h2>

            <p>
              Don't have an account?{" "}
              <Link to="/register">
                Create an account
              </Link>
            </p>

          </div>

        {error && (
  <p className="error-message">
    ⚠ {error}
  </p>
)}

          <form onSubmit={handleSubmit}>



            <div className="login-input-group">

              <label htmlFor="email">
                Email Address
              </label>

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

            <div className="login-input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgotpassword">
                  Forgot password?
                </Link>

              </div>

              <div className="login-password-input">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
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

     

            <label className="remember-me">

              <input type="checkbox"  name="checkbox"  
               checked={formData.checkbox}
               onChange={handleChange}/>

              <span>Remember me</span>

            </label>

         

          <button
  type="submit"
  className="login-button"
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</button>

          </form>

     

          <div className="login-divider">
            <span>or continue with</span>
          </div>



          <div className="social-login">

            <button type="button">
              Google
            </button>

            <button type="button">
              GitHub
            </button>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Login;