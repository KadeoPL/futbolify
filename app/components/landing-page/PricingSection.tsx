"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Check } from "lucide-react";
import { Card, CardBody } from "@nextui-org/react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = React.useState(true);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setIsMonthly(value === "monthly");
  };

  const subscriptionPlans = [
    {
      name: "Team Starter",
      description:
        "Idealne dla małych drużyn, które potrzebują podstawowych narzędzi do zarządzania.",
      monthlyPrice: 49,
      yearlyPrice: 499,
      functions: [
        "Zarządzanie drużyną (do 15 zawodników)",
        "Terminarz meczów (do 10 wydarzeń)",
        "Podstawowe statystyki zawodników",
        "Podstawowa strona drużyny (szablon)",
        "Powiadomienia e-mail o nadchodzących meczach",
      ],
    },
    {
      name: "Pro Squad",
      description:
        "Dla zespołów średniej wielkości, które chcą bardziej zaawansowanych funkcji i większej personalizacji.",
      monthlyPrice: 99,
      yearlyPrice: 999,
      functions: [
        "Wszystkie funkcje z Team Starter",
        "Zarządzanie drużyną (do 30 zawodników)",
        "Nieograniczona liczba meczów",
        "Zaawansowane statystyki zawodników",
        "Personalizowana strona drużyny (edycja układu i kolorów)",
        "Powiadomienia SMS dla zawodników",
        "Integracja z kalendarzem (Google Calendar)",
      ],
    },
    {
      name: "Elite Club",
      description:
        "Dla profesjonalnych drużyn, które potrzebują kompleksowego narzędzia z pełną personalizacją i zaawansowanymi funkcjami.",
      monthlyPrice: 199,
      yearlyPrice: 1199,
      functions: [
        "Wszystkie funkcje z Pro Squad",
        "Zarządzanie drużyną (bez limitu zawodników)",
        "Profesjonalna strona drużyny (własna domena, pełna personalizacja)",
        "Analizy i raporty z meczów (zaawansowane wykresy, analiza wyników)",
        "Moduł zarządzania sponsorami",
        "Priorytetowe wsparcie techniczne 24/7",
        "Integracja z social media (automatyczne posty o wynikach)",
      ],
    },
  ];
  return (
    <section className="flex flex-col text-center mt-32">
      <div className="w-full md:w-1/2 mx-auto">
        <h2>Elastyczne plany cenowe dla każdego klubu</h2>
      </div>
      <div className="flex gap-4 mx-auto mt-16">
        <Button
          color="primary"
          variant={isMonthly ? "solid" : "flat"}
          onClick={handleClick}
          value="monthly"
        >
          Miesięczny
        </Button>
        <Button
          color="primary"
          variant={!isMonthly ? "solid" : "flat"}
          onClick={handleClick}
          value="yearly"
        >
          Roczny
        </Button>
      </div>
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-10 mt-12">
        {subscriptionPlans.map((plan, index) => (
          <Card
            key={index}
            isPressable
            onPress={() => console.log("Click")}
            className="bg-transparent border-2 border-primary-100 w-1/3"
          >
            <CardBody className="flex flex-col  justify-start text-center text-default-100 p-6 hover:bg-primary-100 hover:text-default-800">
              <h6 className="text-primary mb-2">{plan.name}</h6>
              <p className="text-small-light min-h-12">{plan.description}</p>
              <h1 className="my-6">
                {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                <span className="font-light text-xl text-default-500">zł</span>
              </h1>
              {isMonthly ? null : (
                <div className="w-full flex justify-center items-center bg-primary rounded-full gap-2 mb-6 py-2">
                  <h1 className="font-light text-xl text-default-200">
                    Oszczędzasz
                  </h1>
                  <h5>{plan.monthlyPrice * 12 - plan.yearlyPrice}</h5>
                  <h1 className="font-light text-xl text-default-200">zł</h1>
                </div>
              )}
              <ul className="text-left">
                {plan.functions.map((func, index) => (
                  <li key={index} className="flex gap-2 items-center mb-2">
                    <Check size={16} className="text-primary" />
                    {func}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
