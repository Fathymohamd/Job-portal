import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

router.post("/ResetPassword", async (req, res) => {
  const { token, confirmPassword, password } = req.body;

  if (!token || !password || !confirmPassword) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  try {

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired token",
      });
    }

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passwordRegex.test(password)) {
  return res.status(400).json({
    message:
"Password must be 8+ chars with a number, uppercase & symbol"
  });
}
  const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    return res.status(200).json({
      message: "Password reset successfully",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
});

export default router;