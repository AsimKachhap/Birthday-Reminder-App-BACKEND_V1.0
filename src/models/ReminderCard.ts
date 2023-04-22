import mongoose from "mongoose";

const ReminderCardSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "Please enter your Name."],
    min: 3,
    max: 20,
  },

  date: {
    type: Date,
    required: [true, "Please enter the birthday Date."],
    default: Date.now(),
  },

  displayPicture: {
    type: String,
    required: true,
    default: "https://cdn-icons-png.flaticon.com/512/552/552721.png",
  },

  favourite: {
    type: Boolean,
    default: false,
    required: true,
  },

  notification: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const ReminderCard = mongoose.model("ReminderCard", ReminderCardSchema);
export default ReminderCard;
