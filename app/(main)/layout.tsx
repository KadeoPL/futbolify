import React from "react";
import MainNavbar from "../components/ui/MainNavbar";
import Footer from "../components/ui/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
