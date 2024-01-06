import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Book } from "../models/types";
import { BookGenre } from "../models/types/books.types";

export const publishBookService = async (
  data: Book & { authors: number[] }
) => {
  try {
    // Check if book already exists
    const book = await prisma.books.findFirst({
      where: {
        bookName: data.bookName,
      },
    });

    if (book) {
      throw new Error("Book already exists");
    }

    const response = await prisma.books.create({
      data: {
        bookName: data.bookName,
        bookPrice: data.bookPrice,
        bookGenre: BookGenre[data.bookGenre],
        yearPublished: data.yearPublished,
        isPublished_: 1,
      },
    });

    const bookAuthors = await prisma.bookAuthors.createMany({
      data: data.authors.map((author) => ({
        bookId: response.bookId,
        authorId: author,
      })),
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
