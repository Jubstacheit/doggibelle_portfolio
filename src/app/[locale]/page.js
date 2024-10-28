import React from "react";
import Elegg from "@/components/images/Elegg";
import Link from "next/link";
import HomeLinks from "@/components/misc/HomeLinks";
import "./TV.css"


export default async function Home() {
  const text = "DOGGIBELLE";
  return (
    <div className="tv-frame">
      <section className={`crt flex h-screen w-full justify-center bg-indigo-950 bg-[linear-gradient(to_right,#7c3a8790_1px,transparent_1px),linear-gradient(to_bottom,#7c3a8790_2px,transparent_2px)] bg-[size:32px_32px] align-middle`}>
        {/* Elegg gif and sound on click */}
        <Elegg loop={false} src="/BOOM.mp3"/>

        {/* Links to socials */}
        <HomeLinks />

        {/* Link to atabook */}
        <Link href="https://doggibelle.atabook.org" className="absolute z-10 bottom-0 m-2 flex select-none flex-col whitespace-pre text-center font-heading text-xl leading-tight text-main">
          Leave a comment!
        </Link>

        {/* DOGGIBELLE text */}
        <p className="z-10 absolute bottom-0 left-0 m-2 flex select-none flex-col whitespace-pre text-center font-heading text-3xl leading-tight text-main hover:text-darkText">
          {text.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </p>

        {/* Hero section */}
        <div className="flex flex-col z-10 self-center text-center w-full space-y-4 mb-48 md:mb-96 p-4">
          <p className="text-main font-heading text-md md:text-3xl text-left w-1/3 md:w-1/4 h-full">
            Welcome to <span className="hover:text-darkText text-wrap">DOGGIBELLE.QUEST</span>!
          </p>
          <p className="text-main font-base text-left text-sm md:text-2xl w-1/4 h-full">
            I&apos;m Bonnie, a multidisciplinary artist. This is my small blog - portfolio - whatever. I&apos;m sharing all of my works here. Feel free to explore :3
          </p>
        </div>

          {/* Background */}
        <div className="bg-ayanami absolute top-16 self-center align-middle flex w-full h-3/5 bg-cover invert">
        </div>
      </section>
    </div>
  );
}