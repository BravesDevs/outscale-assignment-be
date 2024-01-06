import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { User } from "../models/types";

import bcrypt from "bcrypt";

const saltRounds = 10;
const jwt = require("jsonwebtoken");

export const registerUserService = async (user: User) => {
  try {
    // Check if user already exists

    const userExists = await prisma.users.findFirst({
      where: {
        emailAddress: user.emailAddress,
      },
    });

    // If user already exists, throw error

    if (userExists) {
      throw new Error("User already exists");
    }

    // If user does not exist, hash password

    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    // If user does not exist, create user

    return await prisma.users.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUserService = async (user: User) => {
  try {
    // Check if user exists

    const userExists = await prisma.users.findFirst({
      where: {
        emailAddress: user.emailAddress,
      },
    });

    // If user does not exist, throw error

    if (!userExists) {
      throw new Error("User does not exist");
    }

    // If user exists, compare passwords

    const passwordMatch = await bcrypt.compare(
      user.password,
      userExists.password
    );

    // If passwords do not match, throw error

    if (!passwordMatch) {
      throw new Error("Passwords do not match");
    }

    // If passwords match, create token

    const token = jwt.sign(
      {
        id: userExists.userId,
        emailAddress: userExists.emailAddress,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Return token
    return token;
  } catch (error) {
    throw new Error(error);
  }
};
