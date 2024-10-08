import React from "react";
import { UserPen, Bolt, MonitorCheck } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="flex flex-col text-center mt-32">
      <div className="flex flex-col w-full md:w-1/2 mx-auto">
        <h2>Jak to działa?</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-16 md:gap-8 mt-12 md:mt-20 w-full justify-center">
        <div className="w-full md:w-1/3">
          <div className="w-full h-24 grid place-items-center text-primary">
            <UserPen className="w-auto h-full" strokeWidth={1} />
          </div>
          <h4 className="mt-6 mb-2">Zarejestruj się</h4>
          <p className="text-regular-normal">Załóż konto w kilka minut</p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full h-24 grid place-items-center text-primary">
            <Bolt className="w-auto h-full" strokeWidth={1} />
          </div>
          <h4 className="mt-6 mb-2">Skonfiguruj klub</h4>
          <p className="text-regular-normal">
            Dodaj informacje o swoim klubie.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full h-24 grid place-items-center text-primary">
            <MonitorCheck className="w-auto h-full" strokeWidth={1} />
          </div>
          <h4 className="mt-6 mb-2">Zarządzaj i udostępniaj</h4>
          <p className="text-regular-normal">
            Korzystaj z aplikacji, aby zarządzać terminarzami i stroną.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
