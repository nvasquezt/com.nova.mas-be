import { PrismaClient, SpecMaintenances } from '@prisma/client';

  const prisma = new PrismaClient();

  export const getAllSpecificMaint = async () => {
    const allSpecMaint = await prisma.specMaintenances.findMany();
    if (allSpecMaint) {
      return allSpecMaint;
    } else {
      return null;
    }
  }

  export const getOneSpecificMaint = async (idSpecific: number) => {
    const oneSpecMaint = await prisma.specMaintenances.findUnique({ where: { idSpecific } });
    if (oneSpecMaint) {
      return oneSpecMaint;
    } else {
      return null;
    }
  }

  export const addNewSpecificMaint = async (specificMaint: SpecMaintenances) => {
    const newSpecMaint = await prisma.specMaintenances.create({ data: specificMaint });
    if (newSpecMaint) {
      return newSpecMaint;
    } else {
      return null;
    }
  }

  export const updateSpecificMaint = async (idSpecific: number, specificMaint: SpecMaintenances) => {
    const updatedSpecMaint = await prisma.specMaintenances.update({ where: { idSpecific }, data: specificMaint });
    if (updatedSpecMaint) {
      return updatedSpecMaint;
    } else {
      return null;
    }
  }

  export const deleteSpecificMaint = async (idSpecific: number) => {
    const deletedSpecMaint = await prisma.specMaintenances.delete({ where: { idSpecific } });
    if (deletedSpecMaint) {
      return deletedSpecMaint;
    } else {
      return null;
    }
  }
