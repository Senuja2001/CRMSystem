import Customer from "../models/Customer.js";

export const createCustomer = async (data, userId) => {
  return await Customer.create({
    ...data,
    createdBy: userId
  });
};

export const getCustomers = async () => {
  return await Customer.find({ status: "ACTIVE" });
};
