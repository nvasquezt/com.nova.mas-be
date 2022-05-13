import { PrismaClient, Annotations } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllAnnotations = async () => {
  const allAnnotations = await prisma.annotations.findMany();
  if (allAnnotations) {
    return allAnnotations;
  } else {
    return null;
  }
};

export const getAnnotationByUser = async (id: string) => {
  const oneAnnotation = await prisma.annotations.findMany({
    where: { idUserFk: id },
  });
  if (oneAnnotation) {
    return oneAnnotation;
  } else {
    return null;
  }
};

export const createAnnotation = async (annotation: Annotations) => {
  const newAnnotation = await prisma.annotations.create({ data: annotation });
  if (newAnnotation) {
    return newAnnotation;
  } else {
    return null;
  }
};

export const updateAnnotation = async (id: number, annotation: Annotations) => {
  const updatedAnnotation = await prisma.annotations.update({
    where: { idAnnotation: id },
    data: annotation,
  });
  if (updatedAnnotation) {
    return updatedAnnotation;
  } else {
    return null;
  }
};

export const deleteAnnotation = async (id: number) => {
  const deletedAnnotation = await prisma.annotations.delete({
    where: { idAnnotation: id },
  });
  if (deletedAnnotation) {
    return deletedAnnotation;
  } else {
    return null;
  }
};
