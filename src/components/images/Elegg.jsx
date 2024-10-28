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
		<div className="absolute right-0 bottom-0 lg:right-1/3 lg:bottom-20 lg:-mr-32 z-20" onClick={
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
			<Image src="/elegg-nikke.gif" unoptimized className="w-12 h-auto crt brightness-50" width={100} height={100} objectFit="contain"/>
		</div>
	);
}