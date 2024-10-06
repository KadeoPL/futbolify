import React from "react";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse px-6">
      <div className="w-full aspect-square bg-primary-foreground"></div>
      <div>
        <h1>Zarządzaj swoim klubem sportowym z łatwością!</h1>

        <p>
          Nasza aplikacja pomaga Ci w zarządzaniu terminarzem, składem, wynikami
          i stroną internetową. Skup się na sporcie, a my zajmiemy się resztą.
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
    </section>
  );
};

export default HeroSection;
