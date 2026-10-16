import express from "express";
import Company from "./companySchema.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();

    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

export default router;

