import express from "express";
import { dashboardSummary, pendingCheques } from "../controllers/report.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";


const router = express.Router();

router.get("/dashboard", protect, dashboardSummary);
router.get("/pending-cheques", protect, pendingCheques);
router.get(
  "/dashboard",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  dashboardSummary
);

export default router;
