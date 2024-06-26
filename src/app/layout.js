import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Doggibelle",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <main className={inter.className}>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
