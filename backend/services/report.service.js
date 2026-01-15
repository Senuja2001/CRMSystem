import Payment from "../models/Payment.js";
import ChequePayment from "../models/ChequePayment.js";
import CreditBill from "../models/CreditBill.js";

export const getDashboardSummary = async () => {
  const totalCredits = await CreditBill.aggregate([
    { $group: { _id: null, total: { $sum: "$totalAmount" } } }
  ]);

  const cashTotal = await Payment.aggregate([
    { $match: { paymentMethod: "CASH", status: "CLEARED" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const chequeTotal = await Payment.aggregate([
    { $match: { paymentMethod: "CHEQUE", status: "CLEARED" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  return {
    totalCredits: totalCredits[0]?.total || 0,
    cashCollected: cashTotal[0]?.total || 0,
    chequeCollected: chequeTotal[0]?.total || 0
  };
};

export const getPendingCheques = async (filters) => {
  return await ChequePayment.find({
    status: "PENDING",
    ...(filters.bankName && { bankName: filters.bankName }),
    ...(filters.chequeDate && { chequeDate: filters.chequeDate })
  }).populate("payment");
};
