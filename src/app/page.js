import dynamic from "next/dynamic";
import Scene from "./scene";

export default function Home() {
  return (
    /*<main className="flex min-h-screen flex-col items-center justify-between p-24">*/
    <div className="h-screen w-full">
      <Scene />
    </div>
    /*</main>*/
  );
}
