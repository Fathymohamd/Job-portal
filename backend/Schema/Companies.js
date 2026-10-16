
import mongoose from "mongoose";

const companies = new mongoose.Schema(
  {
    // Basic Information
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
      trim: true,
    },

    // Company Details
    location: {
      type: String,
      default: "Cairo, Egypt",
    },

    website: {
      type: String,
      default: "",
    },

    foundedYear: {
      type: Number,
      default: null,
    },

    companySize: {
      type: String,
      default: "",
    },

    companyType: {
      type: String,
      default: "",
    },

    employeesCount: {
      type: Number,
      default: 0,
    },

    jobsCount: {
      type: Number,
      default: 0,
    },

    // Contact Information
    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      default: "",
    },

    // Company Culture
    mission: {
      type: String,
      default: "",
    },

    vision: {
      type: String,
      default: "",
    },

    culture: {
      type: String,
      default: "",
    },

    benefits: {
      type: [String],
      default: [],
    },

    // Social Media Links
    socialLinks: {
      linkedin: {
        type: String,
        default: "",
      },

      facebook: {
        type: String,
        default: "",
      },

      twitter: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companies);

export default Company;
