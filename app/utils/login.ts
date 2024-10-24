import { signIn } from "next-auth/react";

interface LoginData {
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  try {
    const result = await signIn("credentials", {
      redirect: false, // Zapobieganie przekierowaniu
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      throw new Error(result.error);
    }

    return result;
  } catch (error: any) {
    console.log(error);
    return { error: error.message };
  }
}
