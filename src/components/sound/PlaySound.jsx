"use client"
import React, { useState } from 'react'
import {Howl, Howler} from 'howler';
import { Button } from '../ui/button';

export default function PlaySound({ src, loop }) {
	const sound = new Howl({
		src: src
	});
	Howler.volume(0.3);
	loop: loop;
	sound.play();

	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<Button
			onClick={() => {
				if (isPlaying) {
					sound.stop();
					setIsPlaying(false);
					sound.play();
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
