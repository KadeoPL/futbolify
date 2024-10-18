import { prisma } from "@/prisma/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(
  request: NextRequest,
  response: NextResponse,
) {
  if (request.method === "POST") {
    const { firstName, lastName, email, phoneNumber, password } =
      await request.json();

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          phoneNumber,
          password: hashedPassword,
        },
      });
      return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
