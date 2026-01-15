import CreditBill from "../models/CreditBill.js";

const calcDueDate = (billDate, days) =>
  new Date(new Date(billDate).getTime() + days * 24 * 60 * 60 * 1000);

export const createCreditBill = async (data, userId) => {
  const dueDate = calcDueDate(data.billDate, data.creditDays);

  return await CreditBill.create({
    billNumber: `BILL-${Date.now()}`,
    customer: data.customer,
    billDate: data.billDate,
    creditDays: data.creditDays,
    dueDate,
    totalAmount: data.totalAmount,
    paidAmount: 0,
    balanceAmount: data.totalAmount,
    createdBy: userId
  });
};

export const listCreditBills = async () => {
  return await CreditBill.find()
    .populate("customer", "shopName")
    .sort({ createdAt: -1 });
};
