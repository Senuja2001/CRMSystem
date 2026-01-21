import express from "express";
import {
  dashboardSummary,
  pendingCheques,
  monthlySummary,
  yearlySummary
} from "../controllers/report.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/monthly-summary",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  monthlySummary
);

router.get(
  "/yearly-summary",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  yearlySummary
);

// ✅ Dashboard summary
router.get(
  "/dashboard",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  async (req, res, next) => {
    try {
      await dashboardSummary(req, res);
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Pending cheques
router.get(
  "/pending-cheques",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  async (req, res, next) => {
    try {
      await pendingCheques(req, res);
    } catch (error) {
      next(error);
    }
  }

  
);

export default router;
