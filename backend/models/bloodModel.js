const mongoose = require("mongoose");
const bloodSchema = new mongoose.Schema(
  {
    bloodGroup: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    bloodBank_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expiredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);
//export model
const Blood = mongoose.model("Blood", bloodSchema);
module.exports = Blood;
