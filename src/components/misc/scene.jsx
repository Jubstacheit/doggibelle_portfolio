'use client'

import { Canvas } from "@react-three/fiber";
import {Model} from "./chibibel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Spinner } from "@nextui-org/spinner";
import { Suspense } from "react";

export default function Scene() {
	return (
		<Suspense fallback={<Spinner color="primary"/>}>
			<Canvas style={{ width: "300px", height: "300px", alignSelf: "center" }}>
				<Model />
				<OrbitControls />
				<Environment background preset="forest" />
			</Canvas>
		</Suspense>
	);
}