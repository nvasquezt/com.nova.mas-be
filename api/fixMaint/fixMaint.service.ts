import { PrismaClient, CtvMaintenances } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllFixMaint = async () => {
  const allFixMaint = await prisma.ctvMaintenances.findMany();
  if (allFixMaint) {
    return allFixMaint;
  } else {
    return null;
  }
};

export const getOneFixMaint = async (idCorrective: number) => {
  const oneFixMaint = await prisma.ctvMaintenances.findUnique({
    where: { idCorrective },
  });
  if (oneFixMaint) {
    return oneFixMaint;
  } else {
    return null;
  }
};

export const addNewFixMaint = async (fixMaint: CtvMaintenances) => {
  const newFixMaint = await prisma.ctvMaintenances.create({ data: fixMaint });
  if (newFixMaint) {
    return newFixMaint;
  } else {
    return null;
  }
};

export const updateFixMaint = async (
  idCorrective: number,
  fixMaint: CtvMaintenances
) => {
  const updatedFixMaint = await prisma.ctvMaintenances.update({
    where: { idCorrective },
    data: fixMaint,
  });
  if (updatedFixMaint) {
    return updatedFixMaint;
  } else {
    return null;
  }
};

export const deleteFixMaint = async (idCorrective: number) => {
  const deletedFixMaint = await prisma.ctvMaintenances.delete({
    where: { idCorrective },
  });
  if (deletedFixMaint) {
    return deletedFixMaint;
  } else {
    return null;
  }
};
