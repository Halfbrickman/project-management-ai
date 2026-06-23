import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Project Management AI API Running",
  });
});

export default app;