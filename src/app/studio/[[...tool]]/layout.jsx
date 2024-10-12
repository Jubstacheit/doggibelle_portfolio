/* eslint-disable react/prop-types */
import React from "react";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";



export default function RootLayout({ children }) {

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<NextUIProvider>
					<main>
						{children}
					</main>
				</NextUIProvider>
			</body>
		</html>
	);
}
