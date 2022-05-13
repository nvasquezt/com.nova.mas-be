import { PrismaClient, TrackingLogs } from '@prisma/client';

  const prisma = new PrismaClient();

  export const getAllTrackingLogs = async () => {
    const trackingLogs = await prisma.trackingLogs.findMany();
    if (trackingLogs) {
      return trackingLogs;
    }
    return null;
  }

  export const getOneTrackingLog = async (idLog: number) => {
    const trackingLog = await prisma.trackingLogs.findUnique({ where: { idLog } });
    if (trackingLog) {
      return trackingLog;
    }
    return null;
  }

  export const addNewTrackingLog = async (trackingLog: TrackingLogs) => {
    const newTrackingLog = await prisma.trackingLogs.create({ data: trackingLog });
    if (newTrackingLog) {
      return newTrackingLog;
    }
    return null;
  }

  export const updateTrackingLog = async (idLog: number, trackingLog: TrackingLogs) => {
    const updatedTrackingLog = await prisma.trackingLogs.update({ where: { idLog }, data: trackingLog });
    if (updatedTrackingLog) {
      return updatedTrackingLog;
    }
    return null;
  }

  export const deleteTrackingLog = async (idLog: number) => {
    const deletedTrackingLog = await prisma.trackingLogs.delete({ where: { idLog } });
    if (deletedTrackingLog) {
      return deletedTrackingLog;
    }
    return null;
  }
