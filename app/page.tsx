import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <div className="bg-white flex flex-row items-center justify-center">
      <div className="max-w-[600px]">
        <Hero/>
      </div>
    </div>
  );
}
