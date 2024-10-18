"use client"
import React from "react";
import Image from "next/image";
import { Howl, Howler } from "howler";
import { useState } from "react";

export default function Elegg( { loop, src } ) {
	const sound = new Howl({
		src: src
	});
	Howler.volume(1);
	loop: loop;

	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div className="absolute right-0 top-0" onClick={
			() => {
				if (isPlaying) {
					sound.stop();
					setIsPlaying(false);
					sound.play();
					setIsPlaying(true);
				} else {
					sound.play();
					setIsPlaying(true);
				}
			}
		}>
			<Image src="/elegg-nikke.gif" unoptimized width={200} height={200} layout="fixed" objectFit="contain"/>
		</div>
	);
}