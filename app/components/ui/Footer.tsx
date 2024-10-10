import { Link } from "@nextui-org/react";
import React from "react";

export default function Footer() {
  const menuItems = [
    {
      text: "Funkcje",
      href: "#function",
    },
    {
      text: "Cennik",
      href: "#pricing",
    },
    {
      text: "O nas",
      href: "#about-us",
    },
    {
      text: "Kontakt",
      href: "#contact",
    },
  ];
  return (
    <footer className="mt-16 divide-y divide-default-background ">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 items-center pb-6">
        <div>
          <h6>Fubolify</h6>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center ">
          {menuItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-default-background hover:text-primary"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          {/* <!-- Facebook --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>

          {/* <!-- Messenger --> */}
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
          </svg>

          {/* <!-- Instagram --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-default-background pt-6">
        <p className="text-small-light">
          © 2024 Relume. Wszelkie prawa zastrzeżone.
        </p>
        <Link
          className="font-light text-[14px] text-default-background underline"
          href="#"
        >
          Polityka prywatności
        </Link>
        <Link
          className="font-light text-[14px] text-default-background underline"
          href="#"
        >
          Warunki korzystania
        </Link>
        <Link
          className="font-light text-[14px] text-default-background underline"
          href="#"
        >
          Ustawienia cookies
        </Link>
      </div>
    </footer>
  );
}
