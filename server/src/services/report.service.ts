import prisma from "../config/Prisma";

interface CreateReportPayload {
  taskId: number;
  userId: number;
  description: string;
  progressUpdate: number;
}

export const createReport = async (
  data: CreateReportPayload
) => {

  const report = await prisma.dailyReport.create({
    data: {
      taskId: data.taskId,
      userId: data.userId,
      description: data.description,
      progressUpdate: data.progressUpdate,
      reportDate: new Date(),
    },
  });

  const reports = await prisma.dailyReport.findMany({
    where: {
      taskId: data.taskId,
    },
  });

  const totalProgress = reports.reduce(
    (sum, report) => sum + report.progressUpdate,
    0
  );

  await prisma.task.update({
    where: {
      id: data.taskId,
    },
    data: {
      progress: totalProgress > 100 ? 100 : totalProgress,
      status:
        totalProgress >= 100
          ? "DONE"
          : "IN_PROGRESS",
    },
  });

  return report;
};

export const getReports = async () => {

  return prisma.dailyReport.findMany({
    include: {
      user: true,
      task: true,
    },
    orderBy: {
      reportDate: "desc",
    },
  });

};

export const getReportsByTask = async (
  taskId: number
) => {

  return prisma.dailyReport.findMany({
    where: {
      taskId,
    },
    include: {
      user: true,
    },
    orderBy: {
      reportDate: "desc",
    },
  });

};