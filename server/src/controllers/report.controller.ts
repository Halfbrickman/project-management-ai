import { Request, Response } from "express";
import {
  createReport,
  getReports,
  getReportsByTask,
} from "../services/report.service";

export const create = async (
  req: Request,
  res: Response
) => {

  try {

    const user = (req as any).user;

    const report = await createReport({
      ...req.body,
      userId: user.id,
    });

    res.status(201).json({
      success: true,
      data: report,
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

  const reports = await getReports();

  res.json({
    success: true,
    data: reports,
  });

};

export const findByTask = async (
  req: Request,
  res: Response
) => {

  const reports = await getReportsByTask(
    Number(req.params.taskId)
  );

  res.json({
    success: true,
    data: reports,
  });

};