/* eslint-disable react/prop-types */
import React from "react";

export default function RootLayout({ children }) {

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
