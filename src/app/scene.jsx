'use client'

import { Canvas } from "@react-three/fiber";
import {Model} from "./chibibel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Scene() {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<Model />
				<OrbitControls />
				<Environment background preset="forest" />
			</Suspense>
		</Canvas>
	);
}