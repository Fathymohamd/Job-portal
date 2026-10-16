import express from "express";
import crypto from "crypto";
import User  from "../models/User.js"
import nodemailer from "nodemailer"
import dotenv from "dotenv";
;
const router = express.Router();
dotenv.config()
router.post("/ForgotPassword" , async (req , res) => {
    const {email} = req.body
try {
const user = await User.findOne({email})
if(!user) {
return res.status(400).json({
 message: "User not found",
});
}


const token = crypto.randomBytes(32).toString("hex")
user.resetPasswordToken = token;
user.resetPasswordExpires = new Date(
  Date.now() + 15 * 60 * 1000
);
await user.save();
const resetLink = `http://localhost:5173/ResetPassword/${token}`;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Reset Password",
  html: `
    <h2>Reset Password</h2>
    <p>Click the link below to reset your password:</p>
    <a href="${resetLink}">Reset Password</a>
  `,
});

}catch(error) {
    console.log(error)
}
})


export default router

