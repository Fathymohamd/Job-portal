
import express from "express";
import Company from "../Schema/Companies.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: companies.length,
      companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch companies",
    });
  }
});

export default router;


