import React from "react";
import Image from "next/image";

export default function Elegg() {	
	return (
		<div className="w-28 h-28 absolute right-0">
			<Image src="/elegg-nikke.gif" unoptimized width={2000} height={2000} layout="fixed" objectFit="contain" />
		</div>
	);
}

export { Elegg };