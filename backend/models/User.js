import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
checkbox : {
 type: Boolean,
  required: true
},
resetPasswordToken: {
  type: String,
},

resetPasswordExpires: {
  type: Date,
},
  role: {
    type: String,
    enum: ["candidate", "Admin"],
    default: "candidate",
  },
});

const User = mongoose.model("User", userSchema);

export default User;