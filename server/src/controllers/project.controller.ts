import { Request, Response } from "express";
import {
  createProject,
  getProjects,
} from "../services/project.service";

export const create = async (
  req: Request,
  res: Response
) => {

  try {

    const user = (req as any).user;

    const project = await createProject({
      ...req.body,
      pmId: user.id,
    });

    res.status(201).json({
      success: true,
      message: "Project berhasil dibuat",
      data: project,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const findAll = async (
  req: Request,
  res: Response
) => {

  try {

    const projects = await getProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};