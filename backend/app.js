import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { protect } from "./middlewares/auth.middleware.js";
import customerRoutes from "./routes/customer.routes.js";
import creditBillRoutes from "./routes/creditBill.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import chequeRoutes from "./routes/cheque.routes.js";
import reportRoutes from "./routes/report.routes.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/credit-bills", creditBillRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/cheques", chequeRoutes);
app.use("/api/reports", reportRoutes);


app.get("/", (req, res) => {
  res.send("API Running");

  
});

app.get("/api/test", protect, (req, res) => {
  res.json({ user: req.user });
});

export default app;
