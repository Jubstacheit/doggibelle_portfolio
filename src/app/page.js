import React from "react";
import Scene from "./scene";
import colors from "@/lib/colors";
//import Elegg from "@/components/images/Elegg";

export default function Home() {
  return (
    <section className={`h-screen w-full flex justify-center align-middle bg-pink-100 bg-[linear-gradient(to_right,${colors.backgroundGrid}_1px,transparent_1px),linear-gradient(to_bottom,${colors.backgroundGrid}_1px,transparent_1px)] bg-[size:48px_48px]`}>
      <Scene/>
    </section>
  );
}
