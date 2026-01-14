import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { protect } from "./middlewares/auth.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");

  
});

app.get("/api/test", protect, (req, res) => {
  res.json({ user: req.user });
});

export default app;
