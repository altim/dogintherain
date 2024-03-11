import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.scss";
import Navigation from "@/app/components/navigation/Navigation";

const inter = Comic_Neue({ subsets: ["latin"], weight: ["300", "400", "700"] });

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
