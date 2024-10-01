"use client";
import { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Clock() {
	const [time, setTime] = useState(new Date());
	const [is24Hour, setIs24Hour] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true); 
		const interval = setInterval(() => {
			setTime(new Date()); 
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formattedTime = useMemo(() => {
		if (!mounted) return "";
		const hours = is24Hour
			? time.getHours().toString().padStart(2, "0") 
			: (time.getHours() % 12 || 12).toString().padStart(2, "0"); 
		const minutes = time.getMinutes().toString().padStart(2, "0"); 
		const seconds = time.getSeconds().toString().padStart(2, "0");
		return `${hours}:${minutes}:${seconds}`; 
	}, [time, is24Hour, mounted]); 

	return (
		<div className="absolute top-0 left-0">
			<Card className="p-1 border-none shadow-none text-center bg-transparent">
				<div className="flex flex-col text-left">
					<div className="text-2xl text-main font-base tracking-tight select-none bg-none">
						{formattedTime}
					</div>
				</div>
			</Card>
		</div>
	);
}