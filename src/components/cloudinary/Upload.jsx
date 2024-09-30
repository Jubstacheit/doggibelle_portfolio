"use client"

import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';

export default function Upload() {
	const uploadPreset = process.env.UNSIGN_UPLOAD_PRESET

	return (
		<CldUploadWidget uploadPreset="TEMP">
			{({ open }) => {
				return (
					<Button onClick={() => open()}>
						<div className='font-heading'>Upload an Image</div>
					</Button>
				);
			}}
		</CldUploadWidget>
	);
}