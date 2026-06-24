import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import { authenticateToken } from "./middleware/auth.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Project Management AI API Running",
  });
});

// TEST JWT
app.get(
  "/api/profile",
  authenticateToken,
  (req, res) => {
    return res.json({
      success: true,
      message: "Token valid",
    });
  }
);

app.use("/api/auth", authRoutes);

export default app;