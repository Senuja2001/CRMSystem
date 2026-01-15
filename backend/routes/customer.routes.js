import express from "express";
import { addCustomer, listCustomers } from "../controllers/customer.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addCustomer);
router.get("/", protect, listCustomers);

export default router;
