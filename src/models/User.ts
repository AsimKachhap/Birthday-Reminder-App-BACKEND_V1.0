import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
      min: 3,
      max: 20,
    },

    email: {
      type: String,
      required: [true, "Please enter your Email."],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter your Password."],
      select: false,
    },

    displayPicture: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/552/552721.png",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified) return next();
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", UserSchema);
