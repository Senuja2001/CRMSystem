import { addCashPayment } from "../services/payment.service.js";

export const cashPayment = async (req, res) => {
  try {
    const bill = await addCashPayment(req.body, req.user.id);
    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
