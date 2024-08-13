import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/navbar/nav";
import Bg from "@/assets/PortfolioBackground.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew G. Snyder",
  description: "Matthew G. Snyder's personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="main-content-container" className="relative w-screen h-screen">
          <Bg id="background" className="absolute top-0 -z-50 w-full h-full" />
          <div
            id="main-content-wrapper"
            className="flex flex-col w-full h-full relative"
          >
            <Nav />
            <div
              id="content-body-wrapper"
              className="flex-1 relative overflow-y-scroll lg:px-5 z-10"
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
