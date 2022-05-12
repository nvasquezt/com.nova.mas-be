import { PrismaClient, Vehicles } from '@prisma/client';

const prisma = new PrismaClient();


export const getAllVehicles = async () => {
    const vehicles = await prisma.vehicles.findMany();
    if (vehicles) {
      return vehicles;
    } else {
      throw new Error('No vehicles found');
    }
}

export const getOneVehicle = async (id: number) => {
    const vehicle = await prisma.vehicles.findUnique({where: { id }});
    if (vehicle) {
      return vehicle;
    }
    throw new Error('No vehicle found');
}

export const addNewVehicle = async (vehicle: Vehicles) => {
  const addVehicle = await prisma.vehicles.create({data: vehicle});
  if (addVehicle) {
    return addVehicle;
  }
  throw new Error('Vehicle was not added');
}

export const updateVehicle = async (id: number, vehicle: Vehicles) => {
  const patchVehicle = await prisma.vehicles.update({ where: { id }, data: vehicle });
  if (patchVehicle) {
    return patchVehicle;
  }
  throw new Error('Vehicle was not updated');
}

export const deleteVehicle = async (id: number) => {
  const deleteVehicle = await prisma.vehicles.delete({ where: { id } });
  if (deleteVehicle) {
    return deleteVehicle;
  }
  throw new Error('Vehicle was not deleted');
}
