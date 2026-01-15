import express from "express";
import { addCreditBill, getCreditBills } from "../controllers/creditBill.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addCreditBill);
router.get("/", protect, getCreditBills);

export default router;
