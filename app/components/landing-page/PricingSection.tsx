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
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-10">
        {subscriptionPlans.map((plan, index) => (
          <Card key={index} isPressable onPress={() => console.log("Click")}>
            <CardBody className="flex flex-col justify-center text-center">
              <h6>{plan.name}</h6>
              <p className="text-small-light">{plan.description}</p>
              <h1>{isMonthly ? plan.monthlyPrice : plan.yearlyPrice} zł</h1>
              {isMonthly ? null : (
                <h3>{plan.monthlyPrice * 12 - plan.yearlyPrice}</h3>
              )}
              <ul className="text-left">
                {plan.functions.map((func, index) => (
                  <li key={index} className="flex gap-2 items-center mb-2">
                    <Check size={16} />
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
