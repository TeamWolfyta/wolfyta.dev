import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "wolfyta.dev",
  description: "My (TeamWolfyta) personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}
