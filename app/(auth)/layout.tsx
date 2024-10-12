import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: LayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
