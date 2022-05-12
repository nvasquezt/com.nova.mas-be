import { PrismaClient } from "@prisma/client";

  const prisma = new PrismaClient();

  async function main() {
    const newVehicle = await prisma.vehicles.create({
      data: {
        id: 1,
        licensePlate: "ABC123",
        brand: "Toyota",
        modelAge: 2020,
        classCar: "Camioneta",
        fuelType: "Gasolina",
        cylinder: "1600cc",
        capacity: 4,
        soatCode: "SOAT-123456789",
        insurancePolicy: "SEG-123456789",
        vehiclePhone: 3205481235,
        status: true,
      },
    });
    console.log('Vehicle created', newVehicle);

    const allVehicles = await prisma.vehicles.findMany();
    console.log('All vehicles', allVehicles);
    console.dir(allVehicles, { depth: null });
  }

  main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
