"use client";
import React from "react";
import { Button } from "@nextui-org/react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = React.useState(true);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setIsMonthly(value === "monthly");
  };
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
      <div></div>
    </section>
  );
};

export default PricingSection;
