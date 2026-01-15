import express from "express";
import { addCreditBill, getCreditBills } from "../controllers/creditBill.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", protect, addCreditBill);
router.get("/", protect, getCreditBills);
router.post(
  "/",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR", "SALES_REP"),
  addCreditBill
);

router.get(
  "/",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  getCreditBills
);

export default router;
