import React from "react";
import Elegg from "@/components/images/Elegg";
import Upload from "@/components/cloudinary/Upload";

export default async function Home() {
  const text = "DOGGIBELLE";
  return (
    <section className={`flex h-screen w-full justify-center bg-indigo-950 bg-[linear-gradient(to_right,#7c3a8790_1px,transparent_1px),linear-gradient(to_bottom,#7c3a8790_2px,transparent_2px)] bg-[size:32px_32px] align-middle`}>
      <Elegg loop={false} src="/BOOM.mp3"/>
      <Upload/>
      <p className="absolute bottom-0 left-0 m-2 flex select-none flex-col whitespace-pre font-base text-3xl leading-tight text-main">
        {text.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </p>
    </section>
  );
}