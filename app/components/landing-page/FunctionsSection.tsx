import React from "react";
import { Button } from "@nextui-org/react";

function FunctionsSection() {
  return (
    <section id="#function" className="flex flex-col text-center mt-32">
      <div className="flex flex-col w-full md:w-1/2 mx-auto">
        <h2>Kluczowe funkcje, które ułatwiają zarządzanie</h2>
        <p className="text-regular-normal mt-5">
          Nasza aplikacja oferuje szereg funkcji, które usprawniają zarządzanie
          Twoim klubem sportowym. Odkryj, jak możesz zyskać więcej czasu na to,
          co naprawdę ważne.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 mt-12 md:mt-20 w-full justify-center">
        <div className="w-full md:w-1/3">
          <div className="w-full h-48 md:h-60 bg-primary-foreground"></div>
          <h4 className="mt-6 mb-2">Terminarz</h4>
          <p className="text-regular-normal">
            Twórz i zarządzaj harmonogramami meczów oraz treningów.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full h-48 md:h-60 bg-primary-foreground"></div>
          <h4 className="mt-6 mb-2">Składy i zawodnicy</h4>
          <p className="text-regular-normal">
            Zarządzaj listą zawodników i ich pozycjami.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full h-48 md:h-60 bg-primary-foreground"></div>
          <h4 className="mt-6 mb-2">Wyniki i statystyki</h4>
          <p className="text-regular-normal">
            Monitoruj wyniki i statystyki drużyny.
          </p>
        </div>
      </div>
      <div className="flex gap-4 mx-auto mt-12 md:mt-20">
        <Button variant="shadow" color="primary">
          Zobacz
        </Button>
        <Button variant="ghost" color="primary">
          Dowiedz się więcej
        </Button>
      </div>
    </section>
  );
}

export default FunctionsSection;
