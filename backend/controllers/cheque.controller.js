import { addChequePayment, clearCheque } from "../services/cheque.service.js";

export const addCheque = async (req, res) => {
  try {
    const result = await addChequePayment(req.body, req.user.id);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const clearChequePayment = async (req, res) => {
  try {
    const bill = await clearCheque(req.params.id);
    res.json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
