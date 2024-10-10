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
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-10 mt-12">
        {subscriptionPlans.map((plan, index) => (
          <Card
            key={index}
            isPressable
            onPress={() => console.log("Click")}
            className="bg-transparent border-2 border-primary-100"
          >
            <CardBody className="flex flex-col justify-center text-center text-default-100 p-6 hover:bg-primary-100 hover:text-default-800">
              <h6 className="text-primary mb-2">{plan.name}</h6>
              <p className="text-small-light">{plan.description}</p>
              <h1 className="my-6">
                {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                <span className="font-light text-xl text-default-500">zł</span>
              </h1>
              {isMonthly ? null : (
                <div className="w-full flex justify-center items-center bg-primary rounded-full gap-2 mb-6">
                  <h1 className="font-light text-xl text-default-200">
                    Oszczędzasz
                  </h1>
                  <h3>{plan.monthlyPrice * 12 - plan.yearlyPrice}</h3>
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
