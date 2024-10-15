"use client";
import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";

const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );
};

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  return (
    <div className="md:min-h-screen w-full flex md:flex-row flex-col">
      <div className="md:min-h-screen md:w-1/2 w-full">
        <div className="w-full h-full flex flex-col items-center justify-center text-background md:px-20 md:pb-60">
          <div className="w-full flex justify-start">
            <Link href="/">
              <h6 className="text-background">Futbolify</h6>
            </Link>
          </div>
          <div className="w-full flex justify-start">
            <h1 className="mt-10">
              Zarządzaj swoim klubem sportowym z łatwością!
            </h1>
          </div>
        </div>
      </div>
      <div className="md:min-h-screen flex flex-col justify-center items-center md:w-1/2 w-full bg-background text-foreground">
        <div className="md:w-1/2 w-full mx-auto p-10 md:p-0">
          <h1>Zaloguj się</h1>
          <div className="flex flex-col gap-6 mt-10">
            <Input
              type="email"
              variant="underlined"
              label="Email"
              placeholder="Wpisz swój e-mail"
              isRequired
              isInvalid={true}
              errorMessage="Wpisz poprawny adres e-mail"
            />
            <Input
              endContent={
                <button
                  className="focus:outline-none text-foreground-400"
                  type="button"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                  aria-label="toggle password visibility"
                >
                  {isPasswordVisible ? <EyeClosed /> : <Eye />}
                </button>
              }
              type={isPasswordVisible ? "text" : "password"}
              variant="underlined"
              label="Hasło"
              placeholder="Wpisz swoje hasło"
              isRequired
            />
          </div>
          <Button color="primary" className="mt-10 w-full">
            Zaloguj się
          </Button>
          <div className="mt-5">
            <div className="flex items-center">
              <div className="w-full h-[1px] bg-foreground-400" />
              <p className="mx-5 text-small-light">lub</p>
              <div className="w-full h-[1px] bg-foreground-400" />
            </div>
            <div className="w-full flex justify-center items-center mt-5">
              <div
                role="button"
                className="flex px-5 py-3 bg-foreground-100 gap-2 w-fit rounded-xl hover:bg-foreground-300 hover:scale-110 transition-all ease-in-out duration-150"
              >
                <GoogleIcon />
                Google
              </div>
            </div>
          </div>
          <div className="mt-5 w-full text-center">
            <p className="text-small-normal">
              Nie masz jeszcze konta?
              <Link
                href="/register"
                className="text-[14px] ml-1 font-bold text-foreground"
              >
                Załóż konto
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
