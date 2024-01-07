export enum BookGenre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Mystery = "Mystery",
  SciFi = "Sci-Fi",
  Romance = "Romance",
  Travel = "Travel",
  Life = "Life",
}

export type Book = {
  bookName: string;
  bookPrice: number;
  bookGenre: BookGenre;
  yearPublished: number;
};
