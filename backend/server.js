import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import connectDB from "./config/db.js";

import Register from "./routes/Register.js";

import Login from "./routes/Login.js";

import ForgotPassword from "./routes/Forgot-Password.js";

import ResetPassword from "./routes/ResetPassword.js";

import Company from "./routes/companySchema/companySchema.js";

import Token from "./routes/getCurrentUserme.js"

import logout from "./routes/logout.js"

import cookieParser from "cookie-parser";

import seedCompanies from "./routes/seedCompanies.js";

import companiesRouter from "./routes/companiesRouter.js";



dotenv.config()

const app = express()
app.use(express.json());
app.use(cookieParser());
connectDB()


const allowedOrigins = [
  "http://localhost:5173",
  "https://job-portal-lklg.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


app.use(express.json());

app.use("/api/auth", Register);

app.use("/api/auth", Login);

app.use("/api/auth", ForgotPassword);

app.use("/api/auth", ResetPassword);

app.use("/api/auth", Company);

app.use("/me", Token);

app.use("/logout", logout);

app.use("/api/companies", seedCompanies);

app.use("/api/companies", companiesRouter);

app.get("/", async (req, res) => {
  res.send("Server running ");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});