import React from "react";
import Image from "next/image";

export default function Elegg() {	
	return (
		<div className="absolute right-0">
			<Image src="/elegg-nikke.gif" unoptimized width={200} height={200} layout="fixed" objectFit="contain" />
		</div>
	);
}

export { Elegg };