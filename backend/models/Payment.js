import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CreditBill",
      required: true
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },

    paymentMethod: {
      type: String,
      enum: ["CASH", "CHEQUE"],
      required: true
    },

    amount: { type: Number, required: true },

    status: {
      type: String,
      enum: ["RECORDED", "CLEARED", "RETURNED"],
      default: "RECORDED"
    },

    receivedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
