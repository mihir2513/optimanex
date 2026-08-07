import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Optimanex",
  description: "Get in touch with our team for a free consultation and discuss your next software project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
