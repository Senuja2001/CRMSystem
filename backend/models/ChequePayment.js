import mongoose from "mongoose";

const chequeSchema = new mongoose.Schema(
  {
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
      unique: true
    },

    bankName: { type: String, required: true },
    branchCode: String,
    chequeNumber: { type: String, required: true },
    chequeDate: { type: Date, required: true },
    amount: { type: Number, required: true },

    status: {
      type: String,
      enum: ["PENDING", "CLEARED", "RETURNED"],
      default: "PENDING"
    },

    clearedDate: Date
  },
  { timestamps: true }
);

export default mongoose.model("ChequePayment", chequeSchema);
