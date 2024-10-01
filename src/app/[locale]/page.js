import React from "react";
import Scene from "@/components/misc/scene";
import Elegg from "@/components/images/Elegg";
import Upload from "@/components/cloudinary/Upload";
import Image from "@/components/cloudinary/Image";
import Clock from "@/components/misc/Clock";

export default async function Home() {

  return (
    <section className={`h-screen w-full flex justify-center align-middle bg-indigo-950 bg-[linear-gradient(to_right,#7c3a8790_2px,transparent_2px),linear-gradient(to_bottom,#7c3a8790_2px,transparent_2px)] bg-[size:48px_48px]`}>
      
      <Scene/>
      <Elegg/>
      <Upload/>
      <Image/>
    </section>
  );
}
