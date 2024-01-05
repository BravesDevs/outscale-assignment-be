import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Books } from "./Books";
import { Users } from "./Users";

@Index("bookAuthors_books_bookId_fk", ["bookId"], {})
@Index("bookAuthors_uk", ["bookId", "authorId"], { unique: true })
@Entity("bookAuthors")
export class BookAuthors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bookId", nullable: true })
  bookId: number | null;

  @Column("int", { name: "authorId", nullable: true })
  authorId: number | null;

  @ManyToOne(() => Books, (books) => books.bookAuthors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "bookId", referencedColumnName: "bookId" }])
  book: Books;

  @ManyToOne(() => Users, (users) => users.bookAuthors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "authorId", referencedColumnName: "userId" }])
  author: Users;
}
