import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Eye, EyeOff, BriefcaseBusiness } from "lucide-react";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error , setError] = useState(false)
  
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    if(!confirmPassword.trim()){
      toast.error("Please enter your Password")
      return
    }

    try {
      const res = await fetch(
        "http://localhost:8080/api/auth/ResetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            confirmPassword,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }
      setPassword("")
        setConfirmPassword("")
        setError("")
   setTimeout(()=>{ navigate("/login")} , 2000)

    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className="reset-password">

  <div className="reset-password-box">
    <h2>Reset Password</h2>
          {error && (
  <p className="error-message">
    ⚠ {error}
  </p>
)}
    <form className="reset-password-form" onSubmit={handleSubmit}>
    <div className="input-wrapper">
  <input
    id="password"
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter your password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? (
      <EyeOff size={18} />
    ) : (
      <Eye size={18} />
    )}
  </button>
</div>

     <div className="input-wrapper">
  <input
    id="password"
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
  >
    {showConfirmPassword ? (
      <EyeOff size={18} />
    ) : (
      <Eye size={18} />
    )}
  </button>
</div>
      <button type="submit">Reset Password</button>
    </form>
  </div>
</div>
  );
};

export default ResetPassword;