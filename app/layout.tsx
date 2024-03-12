import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google";
import "./globals.scss";
import Navigation from "@/app/components/navigation/Navigation";

const inter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dog in the rain",
  description: "Dog in the rain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className={"page"}>{children}</div>
      </body>
    </html>
  );
}
