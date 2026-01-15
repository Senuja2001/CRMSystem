import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    shopName: { type: String, required: true },
    ownerName: String,

    phonePrimary: { type: String, required: true },
    phoneSecondary: String,

    address: String,
    city: String,
    district: String,
    province: String,

    brNumber: String,

    category: {
      type: String,
      enum: ["GROCERY", "PHARMACY", "WHOLESALE", "FARM_SHOP"],
      required: true
    },

    classification: {
      type: String,
      enum: ["SMALL", "A", "B", "C", "D"],
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);
