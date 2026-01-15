import mongoose from "mongoose";
import Payment from "../models/Payment.js";
import CreditBill from "../models/CreditBill.js";

export const addCashPayment = async (data, userId) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bill = await CreditBill.findById(data.bill).session(session);
    if (!bill) throw new Error("Bill not found");

    if (data.amount > bill.balanceAmount)
      throw new Error("Payment exceeds balance");

    await Payment.create(
      [
        {
          bill: bill._id,
          customer: bill.customer,
          paymentMethod: "CASH",
          amount: data.amount,
          receivedBy: userId,
          status: "CLEARED"
        }
      ],
      { session }
    );

    bill.paidAmount += data.amount;
    bill.balanceAmount -= data.amount;

    bill.status =
      bill.balanceAmount === 0 ? "PAID" : "PARTIALLY_PAID";

    await bill.save({ session });

    await session.commitTransaction();
    session.endSession();

    return bill;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
