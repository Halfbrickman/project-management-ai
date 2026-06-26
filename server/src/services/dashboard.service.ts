import prisma from "../config/Prisma";

export const getDashboardSummary = async () => {

  const totalProjects =
    await prisma.project.count();

  const totalTasks =
    await prisma.task.count();

  const completedTasks =
    await prisma.task.count({
      where: {
        status: "DONE",
      },
    });

  const ongoingTasks =
    await prisma.task.count({
      where: {
        status: "IN_PROGRESS",
      },
    });

  const completionRate =
    totalTasks === 0
      ? 0
      : Number(
          (
            (completedTasks / totalTasks) *
            100
          ).toFixed(2)
        );

  return {
    totalProjects,
    totalTasks,
    completedTasks,
    ongoingTasks,
    completionRate,
  };
};