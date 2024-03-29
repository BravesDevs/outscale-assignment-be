import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookAuthors } from "./BookAuthors";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "userId" })
  userId: number;

  @Column("varchar", { name: "firstName", length: 100 })
  firstName: string;

  @Column("varchar", { name: "lastName", length: 100 })
  lastName: string;

  @Column("varchar", { name: "emailAddress", nullable: true, length: 100 })
  emailAddress: string | null;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @OneToMany(() => BookAuthors, (bookAuthors) => bookAuthors.author)
  bookAuthors: BookAuthors[];
}
