import express from "express";
import { addCheque, clearChequePayment } from "../controllers/cheque.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addCheque);
router.put("/:id/clear", protect, clearChequePayment);

export default router;
