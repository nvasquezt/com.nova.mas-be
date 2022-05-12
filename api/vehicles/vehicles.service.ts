import { PrismaClient, Vehicles } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllVehicles = async () => {
  const vehicles = await prisma.vehicles.findMany();
  if (vehicles) {
    return vehicles;
  } else {
    return null;
  }
};

export const getOneVehicle = async (id: number) => {
  const vehicle = await prisma.vehicles.findUnique({ where: { id } });
  if (vehicle) {
    return vehicle;
  } else {
    return null;
  }
};

export const addNewVehicle = async (vehicle: Vehicles) => {
  const addVehicle = await prisma.vehicles.create({ data: vehicle });
  if (addVehicle) {
    return addVehicle;
  } else {
    return null;
  }
};

export const updateVehicle = async (id: number, vehicle: Vehicles) => {
  const patchVehicle = await prisma.vehicles.update({
    where: { id },
    data: vehicle,
  });
  if (patchVehicle) {
    return patchVehicle;
  } else {
    return null;
  }
};

export const deleteVehicle = async (id: number) => {
  const deleteVehicle = await prisma.vehicles.delete({ where: { id } });
  if (deleteVehicle) {
    return deleteVehicle;
  } else {
    return null;
  }
};
