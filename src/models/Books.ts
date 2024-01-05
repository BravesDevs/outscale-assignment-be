import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookAuthors } from "./BookAuthors";

@Entity("books")
export class Books {
  @PrimaryGeneratedColumn({ type: "int", name: "bookId" })
  bookId: number;

  @Column("varchar", { name: "bookName", length: 100 })
  bookName: string;

  @Column("int", { name: "bookPrice", nullable: true })
  bookPrice: number | null;

  @Column("enum", { name: "bookGenre", enum: ["Novel", "Fiction", "Mystery"] })
  bookGenre: "Novel" | "Fiction" | "Mystery";

  @Column("year", { name: "yearPublished" })
  yearPublished: number;

  @Column("tinyint", { name: "isPublished?", default: () => "'0'" })
  isPublished: number;

  @OneToMany(() => BookAuthors, (bookAuthors) => bookAuthors.book)
  bookAuthors: BookAuthors[];
}
