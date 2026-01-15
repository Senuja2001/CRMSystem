import mongoose from "mongoose";
import Payment from "../models/Payment.js";
import CreditBill from "../models/CreditBill.js";
import ChequePayment from "../models/ChequePayment.js";

export const addChequePayment = async (data, userId) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bill = await CreditBill.findById(data.bill).session(session);
    if (!bill) throw new Error("Bill not found");

    if (data.amount > bill.balanceAmount)
      throw new Error("Amount exceeds balance");

    const payment = await Payment.create(
      [
        {
          bill: bill._id,
          customer: bill.customer,
          paymentMethod: "CHEQUE",
          amount: data.amount,
          receivedBy: userId,
          status: "RECORDED"
        }
      ],
      { session }
    );

    await ChequePayment.create(
      [
        {
          payment: payment[0]._id,
          bankName: data.bankName,
          branchCode: data.branchCode,
          chequeNumber: data.chequeNumber,
          chequeDate: data.chequeDate,
          amount: data.amount
        }
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return payment[0];
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};

export const clearCheque = async (chequeId) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const cheque = await ChequePayment.findById(chequeId).session(session);
    if (!cheque || cheque.status !== "PENDING")
      throw new Error("Invalid cheque");

    const payment = await Payment.findById(cheque.payment).session(session);
    const bill = await CreditBill.findById(payment.bill).session(session);

    bill.paidAmount += cheque.amount;
    bill.balanceAmount -= cheque.amount;
    bill.status = bill.balanceAmount === 0 ? "PAID" : "PARTIALLY_PAID";

    payment.status = "CLEARED";
    cheque.status = "CLEARED";
    cheque.clearedDate = new Date();

    await bill.save({ session });
    await payment.save({ session });
    await cheque.save({ session });

    await session.commitTransaction();
    session.endSession();

    return bill;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
