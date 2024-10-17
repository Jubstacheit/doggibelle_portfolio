import React from "react";
import Elegg from "@/components/images/Elegg";
import Upload from "@/components/cloudinary/Upload";

export default async function Home() {
  const text = "DOGGIBELLE";
  return (
    <section className={`h-screen w-full flex justify-center align-middle bg-indigo-950 bg-[linear-gradient(to_right,#7c3a8790_2px,transparent_2px),linear-gradient(to_bottom,#7c3a8790_2px,transparent_2px)] bg-[size:48px_48px]`}>
      <Elegg/>
      <Upload/>
      <p className="font-base flex flex-col select-none whitespace-pre text-3xl text-main m-2 left-0 bottom-0 absolute leading-tight">
        {text.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </p>
    </section>
  );
}