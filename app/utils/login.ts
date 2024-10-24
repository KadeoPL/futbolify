import { signIn } from "next-auth/react";

interface LoginData {
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  const result = await signIn("credentials", {
    redirect: false,
    email: data.email,
    password: data.password,
  });

  if (result) {
    return result;
  } else {
    return null;
  }
}
