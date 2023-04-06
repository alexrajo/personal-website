import { NavLinkContainer } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col">
        <img src={"/images/TopWaves.svg"} alt="Bottom wave" className="-z-10 w-full h-auto absolute top-0" />
        <div>
          <p className="text-7xl text-center">Welcome</p>
          <p className="text-5xl text-center">I am Alexander</p>
          <NavLinkContainer currentPage="home" />
        </div>
        <img
          src={"/images/BottomWave.svg"}
          alt="Bottom wave"
          className="-z-10 w-full h-auto absolute bottom-0 drop-shadow-md"
        />
      </div>
    </div>
  );
}
