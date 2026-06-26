import express from "express";
import cors from "cors";
import projectRoutes from "./routes/project.routes";
import taskRoutes from "./routes/task.routes";
import reportRoutes from "./routes/report.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import aiRoutes from "./routes/ai.routes";

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
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use(
  "/api/ai-recommendations",
  aiRoutes
);

export default app;