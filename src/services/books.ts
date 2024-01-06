import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Book } from "../models/types";
import { BookGenre } from "../models/types/books.types";

export const publishBookService = async (book: Book) => {
  try {
    return await prisma.books.create({
      data: {
        bookName: book.bookName,
        bookPrice: book.bookPrice,
        bookGenre: BookGenre[book.bookGenre],
        yearPublished: book.yearPublished,
        isPublished_: 1,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
