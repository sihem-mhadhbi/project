const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
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

    bloodgroup: {
      type: String,
      default: "A+",
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      role: ["isRecipient", "isDonor", "isAdmin"],
      default: "isRecipient",
    },
    dueDateRequest: {
      type: Date,
    },

    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
// export model
const user = mongoose.model("user", userSchema);
module.exports = user;
