"use client"
import React, { useEffect } from 'react'
import {Howl, Howler} from 'howler';

export default function PlaySound() {
	
	const sound = new Howl({
		src: ['/sound-in-public-folder.mp3']
	});
	Howler.volume(0.1);
	sound.play();
	return (
		null
	)
}
