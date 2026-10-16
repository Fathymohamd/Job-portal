import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/" , async(req , res) =>{
    try {
      const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }

const decoded = jwt.verify(
    token ,
    process.env.JWT_SECRET
)
    const user = await User.findById(decoded.id).select(
      "-password"
    );

        if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
        user:{
         id : user._id,
         name : user.name,
         email : user.email
        }
    })
    } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
})

export default router;