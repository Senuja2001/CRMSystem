import express from "express";
import { addCustomer, listCustomers } from "../controllers/customer.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";


const router = express.Router();

router.post("/", protect, addCustomer);
router.get("/", protect, listCustomers);
router.post(
  "/",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR", "SALES_REP"),
  addCustomer
);

router.get(
  "/",
  protect,
  allowRoles("ADMIN", "DISTRIBUTOR"),
  listCustomers
);
export default router;
