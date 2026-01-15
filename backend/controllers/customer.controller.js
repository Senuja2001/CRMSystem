import { createCustomer, getCustomers } from "../services/customer.service.js";

export const addCustomer = async (req, res) => {
  try {
    const customer = await createCustomer(req.body, req.user.id);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const listCustomers = async (req, res) => {
  const customers = await getCustomers();
  res.json(customers);
};
