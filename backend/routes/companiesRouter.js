
import express from "express";
import Companies from "../Schema/Companies.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const company = await Companies.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
      });
    }

    res.status(200).json({
      message: "Company fetched successfully",
      company,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

export default router;
