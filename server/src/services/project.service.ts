import prisma from "../config/Prisma";

interface CreateProjectPayload {
  name: string;
  description?: string;
  startDate: string;
  deadline: string;
  status: string;
  pmId: number;
}

export const createProject = async (
  data: CreateProjectPayload
) => {

  const project = await prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      startDate: new Date(data.startDate),
      deadline: new Date(data.deadline),
      status: data.status,
      pmId: data.pmId,
    },
  });

  return project;
};

export const getProjects = async () => {

  return prisma.project.findMany({
    include: {
      pm: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

};