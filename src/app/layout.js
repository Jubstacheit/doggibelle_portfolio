/* eslint-disable react/prop-types */
import React from "react";
import { Inter, Teko, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const teko = Teko({ subsets: ["latin"], display: "swap", variable: "--font-teko" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrainsMono" });

export const metadata = {
  title: "Doggibelle",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <main className={`${inter.variable} ${teko.variable} ${jetbrainsMono.variable}`}>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
