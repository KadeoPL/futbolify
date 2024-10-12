"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";

function Signup() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  return (
    <div className="min-h-screen w-full flex flex-row">
      <div className="min-h-screen w-1/2"></div>
      <div className="min-h-screen flex flex-col justify-center items-center w-1/2 bg-background text-foreground">
        <div className="w-1/2 mx-auto">
          <h1>Stwórz konto</h1>
          <div className="flex flex-col gap-6 mt-10">
            <Input
              type="text"
              variant="underlined"
              label="Imię"
              placeholder="Wpisz swoje imię"
            />
            <Input
              type="text"
              variant="underlined"
              label="Nazwisko"
              placeholder="Wpisz swoje nazwisko"
            />
            <Input
              type="text"
              variant="underlined"
              label="Email"
              placeholder="Wpisz swój e-mail"
              isRequired
            />
            <Input
              type="number"
              min={0}
              minLength={9}
              variant="underlined"
              label="Telefon"
              placeholder="Wpisz swój numer telefonu"
              isRequired
              className="appearance-none"
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
            Stwórz konto
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
