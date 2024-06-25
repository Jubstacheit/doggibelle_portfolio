import dynamic from "next/dynamic";
import Scene from "./scene";
import { Spinner } from "@nextui-org/spinner";

export default function Home() {
  return (
    <section className="h-screen w-full flex justify-center align-middle">
      <Scene />
    </section>
  );
}
