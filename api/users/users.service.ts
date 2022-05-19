import { PrismaClient, Users } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const users = await prisma.users.findMany();
  if (users) {
    return users;
  } else {
    return null;
  }
};

export const getOneUser = async (idUser: string) => {
  const user = await prisma.users.findUnique({ where: { idUser } });
  if (user) {
    return user;
  } else {
    return null;
  }
};

export const addNewUser = async (dataUser: Users) => {
  const user = await prisma.users.create({ data: { ...dataUser } });
  if (user) {
    return user;
  } else {
    return null;
  }
};

export const updateUser = async (idUser: string, dataUser: Users) => {
  const user = await prisma.users.update({
    where: { idUser },
    data: dataUser,
  });
  if (user) {
    return user;
  } else {
    return null;
  }
};

export const deleteUser = async (idUser: string) => {
  const user = await prisma.users.delete({ where: { idUser } });
  if (user) {
    return user;
  }
  return null;
};
