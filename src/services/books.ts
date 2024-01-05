import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const publishBookService = async (data) => {
  try {
    const book = await prisma.books.create({
      data,
    });
    return book;
  } catch (error) {
    throw new Error(error);
  }
};
