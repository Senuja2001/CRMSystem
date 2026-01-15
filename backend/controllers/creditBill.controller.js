import { createCreditBill, listCreditBills } from "../services/creditBill.service.js";

export const addCreditBill = async (req, res) => {
  try {
    const bill = await createCreditBill(req.body, req.user.id);
    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCreditBills = async (req, res) => {
  const bills = await listCreditBills();
  res.json(bills);
};
