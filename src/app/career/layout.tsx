import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Optimanex",
  description: "Join our team of passionate engineers, designers, and problem-solvers building software that makes a real difference.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
