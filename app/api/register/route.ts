import { prisma } from "@/prisma/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, phoneNumber, password } =
    await request.json();

  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    return NextResponse.json(
      { message: "Wszystkie pola są wymagane." },
      { status: 400 },
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Ten adres e-mail jest już zajęty." },
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
}
