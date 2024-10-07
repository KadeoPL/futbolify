import React from "react";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <header className="w-full flex justify-center">
      <div className="max-w-[1440px] flex flex-col md:flex-row-reverse items-center">
        <div className="w-full aspect-square md:w-1/2 bg-primary-foreground mb-12 mt-6"></div>
        <div className="w-full md:w-1/2">
          <h1>Zarządzaj swoim klubem sportowym z łatwością!</h1>
          <p className="text-medium-norma mt-5 mb-6">
            Nasza aplikacja pomaga Ci w zarządzaniu terminarzem, składem,
            wynikami i stroną internetową. Skup się na sporcie, a my zajmiemy
            się resztą.
          </p>
          <div className="flex gap-4">
            <Button variant="shadow" color="primary">
              Rozpocznij teraz
            </Button>
            <Button variant="ghost" color="primary">
              Dowiedz się więcej
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
