import React from "react";
import Elegg from "@/components/images/Elegg";
import Upload from "@/components/cloudinary/Upload";
import Link from "next/link";
import HomeLinks from "@/components/misc/HomeLinks";
import Image from "next/image";

export default async function Home() {
  const text = "DOGGIBELLE";
  return (
    <section className={`flex h-screen w-full justify-center bg-indigo-950 bg-[linear-gradient(to_right,#7c3a8790_1px,transparent_1px),linear-gradient(to_bottom,#7c3a8790_2px,transparent_2px)] bg-[size:32px_32px] align-middle`}>
      <Elegg loop={false} src="/BOOM.mp3"/>
      <Upload/>
      <HomeLinks />
      <Link href="https://doggibelle.atabook.org" className="absolute z-10 bottom-0 m-2 flex select-none flex-col whitespace-pre text-center font-heading text-xl leading-tight text-main">
        Leave a comment!
      </Link>
      <p className="z-10 absolute bottom-0 left-0 m-2 flex select-none flex-col whitespace-pre text-center font-heading text-3xl leading-tight text-main hover:text-darkText">
        {text.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </p>

      <div className="bg-ayanami absolute top-16 self-center align-middle flex w-full h-3/5 bg-cover invert">
      </div>
    </section>
  );
}