"use server";

import { signIn } from "@/auth";

interface LoginData {
  email: string;
  password: string;
}

async function login(data: LoginData) {
  return await signIn("credentials", data);
}

export { login };
