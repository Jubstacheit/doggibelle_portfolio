/* eslint-disable react/prop-types */
import React from "react";
import { Inter, Teko, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/components/misc/CRTEffect.css"
import {NextUIProvider} from "@nextui-org/react";
import { getCurrentLocale } from "../../locales/server";
import Clock from "@/components/misc/Clock";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const teko = Teko({ subsets: ["latin"], display: "swap", variable: "--font-teko" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrainsMono" });

export const metadata = {
  title: "Doggibelle",
  description: "portfolio",
};


export default function RootLayout({ children }) {
  const locale = getCurrentLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="overflow-hidden">
        <NextUIProvider>
            <main className={`${inter.variable} ${teko.variable} ${jetbrainsMono.variable}`}>
              <Clock />
              {children}
            </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
