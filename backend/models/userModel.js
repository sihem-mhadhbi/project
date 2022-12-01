const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
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
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isDonor: {
      type: Boolean,
      default: false,
    },
    isRecipient: {
      type: Boolean,
      default: false,
    },
    bloodGroup: {
      type: String,
    },
    isAccepted: {
      type: Boolean,
      default: false,
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
