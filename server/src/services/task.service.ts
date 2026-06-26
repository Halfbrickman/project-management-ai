import prisma from "../config/Prisma";

interface CreateTaskPayload {
  projectId: number;
  assignedTo: number;
  title: string;
  description?: string;
  deadline: string;
  estimatedDuration: number;
  priority: string;
}

export const createTask = async (
  data: CreateTaskPayload
) => {

  return prisma.task.create({
    data: {
      projectId: data.projectId,
      assignedTo: data.assignedTo,
      title: data.title,
      description: data.description,
      deadline: new Date(data.deadline),
      estimatedDuration: data.estimatedDuration,
      priority: data.priority,

      progress: 0,
      status: "TODO",
    },
  });

};

export const getTasks = async () => {

  return prisma.task.findMany({
    include: {
      project: true,
      assignee: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

};

export const updateProgress = async (
  id: number,
  progress: number
) => {

  return prisma.task.update({
    where: { id },
    data: {
      progress,
      status:
        progress >= 100
          ? "DONE"
          : "IN_PROGRESS",
    },
  });

};