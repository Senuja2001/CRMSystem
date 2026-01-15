import mongoose from "mongoose";

const creditBillSchema = new mongoose.Schema(
  {
    billNumber: { type: String, required: true, unique: true },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },

    billDate: { type: Date, required: true },

    creditDays: {
      type: Number,
      enum: [7, 14, 21, 28],
      required: true
    },

    dueDate: { type: Date, required: true },

    totalAmount: { type: Number, required: true },
    paidAmount: { type: Number, default: 0 },
    balanceAmount: { type: Number, required: true },

    status: {
      type: String,
      enum: ["PENDING", "PARTIALLY_PAID", "PAID", "OVERDUE"],
      default: "PENDING"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("CreditBill", creditBillSchema);
