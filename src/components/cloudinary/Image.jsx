"use client"
import { CldImage } from 'next-cloudinary';

export default async function Image() {
	return (
		<CldImage
			width="960"
			height="600"
			src="btswt4m5ku0kpuyofxpb"
			sizes="100vw"
			alt="Description of my image"
		/>
	);
}