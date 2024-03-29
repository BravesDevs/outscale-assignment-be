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

export const searchBooksService = async (query) => {
  try {
    const books = await prisma.books.findMany({
      where: {
        bookName: {
          contains: query,
        },
      },
      include: {
        bookAuthors: true,
      },
    });
    return books;
  } catch (error) {
    throw new Error(error);
  }
};

export const unpublishBookService = async (bookId) => {
  try {
    const response = await prisma.books.update({
      where: {
        bookId: parseInt(bookId),
      },
      data: {
        isPublished_: 0,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

export const getUserBooksService = async (userId) => {
  try {
    const books = await prisma.books.findMany({
      where: {
        bookAuthors: {
          some: {
            authorId: userId,
          },
        },
        isPublished_: 1,
      },
    });
    return books;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPublishedBooksService = async () => {
  try {
    const books = await prisma.books.findMany({
      where: {
        isPublished_: 1,
      },
    });
    return books;
  } catch (error) {
    throw new Error(error);
  }
};
