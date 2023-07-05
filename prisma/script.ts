import { PrismaClient } from '@prisma/client';

const prismaClientObj = new PrismaClient();

async function prismaQuery(callback): Promise<object | void> {
  try {
    const retObj = await callback();
    await prismaClientObj.$disconnect();
    return retObj;
  } catch (e) {
    console.error(e);
    await prismaClientObj.$disconnect();
    process.exit(1);
  }
}

export default { prismaQuery, prismaClientObj };
