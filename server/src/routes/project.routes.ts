import { Router } from "express";
import {
  create,
  findAll,
} from "../controllers/project.controller";

import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticateToken,
  create
);

router.get(
  "/",
  authenticateToken,
  findAll
);

export default router;