import { PrismaClient, PrevMaintenances } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPrevMaint = async () => {
  const allPrevMaint = await prisma.prevMaintenances.findMany();
  if (allPrevMaint) {
    return allPrevMaint;
  } else {
    return null;
  }
};

export const getOnePrevMaint = async (idVehicleFk : number) => {
  const onePrevMaint = await prisma.prevMaintenances.findMany({
    where: { idVehicleFk  },
  });
  if (onePrevMaint) {
    return onePrevMaint;
  } else {
    return null;
  }
};

export const addNewPrevMaint = async (prevMaint: PrevMaintenances) => {
  const newPrevMaint = await prisma.prevMaintenances.create({
    data: prevMaint,
  });
  if (newPrevMaint) {
    return newPrevMaint;
  } else {
    return null;
  }
};

export const updatePrevMaint = async (
  idMaintenance: number,
  prevMaint: PrevMaintenances
) => {
  const updatedPrevMaint = await prisma.prevMaintenances.update({
    where: { idMaintenance },
    data: prevMaint,
  });
  if (updatedPrevMaint) {
    return updatedPrevMaint;
  } else {
    return null;
  }
};

export const deletePrevMaint = async (idMaintenance: number) => {
  const deletedPrevMaint = await prisma.prevMaintenances.delete({
    where: { idMaintenance },
  });
  if (deletedPrevMaint) {
    return deletedPrevMaint;
  } else {
    return null;
  }
};
