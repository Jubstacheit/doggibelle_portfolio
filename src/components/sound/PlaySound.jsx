"use client"
import React, { useState } from 'react'
import {Howl, Howler} from 'howler';

export default function PlaySound() {
	const sound = new Howl({
		src: ['/sound-in-public-folder.mp3']
	});
	Howler.volume(0.3);
	loop: true;
	sound.play();

	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<Button
			onClick={() => {
				if (isPlaying) {
					sound.stop();
					setIsPlaying(false);
				} else {
					sound.play();
					setIsPlaying(true);
				}
			}}
		>
			{isPlaying ? 'Stop' : 'Play'}
		</Button>
	)
}
