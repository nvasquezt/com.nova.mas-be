import { PrismaClient, Dates } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDates = async () => {
  const allDates = await prisma.dates.findMany();
  if (allDates) {
    return allDates;
  } else {
    return null;
  }
};

export const getOneDateByVehicle = async (id: number) => {
  const oneDate = await prisma.dates.findFirst({ where: { idVehicleFk: id } });
  if (oneDate) {
    return oneDate;
  } else {
    return null;
  }
};

export const createDate = async (date: Dates) => {
  const newDate = await prisma.dates.create({ data: date });
  if (newDate) {
    return newDate;
  } else {
    return null;
  }
};

export const updateDate = async (id: number, date: Dates) => {
  const updatedDate = await prisma.dates.update({
    where: { dateCode: id },
    data: date,
  });
  if (updatedDate) {
    return updatedDate;
  } else {
    return null;
  }
};

export const deleteDate = async (id: number) => {
  const deletedDate = await prisma.dates.delete({ where: { dateCode: id } });
  if (deletedDate) {
    return deletedDate;
  } else {
    return null;
  }
};
