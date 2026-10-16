
import mongoose from "mongoose";

const companies = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    industry: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "Cairo, Egypt",
    },

    website: {
      type: String,
      default: "",
    },

    jobsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companies);

export default Company;
