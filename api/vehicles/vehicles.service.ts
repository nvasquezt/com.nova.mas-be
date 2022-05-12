import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const getAllVehicles = async () => {
    const vehicles = await prisma.vehicles.findMany();
    if (vehicles) {
      return vehicles;
    } else {
      throw new Error('No vehicles found');
    }
}

export default getAllVehicles;
