import { AnimatedBackground } from "@/components/decoration";
import { MobileHomeNav, MobileNavLinkList, NavLinkContainer } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home - Alexander RJ",
  description:
    "The personal website of Alexander RJ. This is the home page. Here you can find links to the other pages.",
};

export default function Home() {
  return (
    <>
      <div className="fixed bottom-0 top-0 w-screen">
        <AnimatedBackground className="w-full pointer-events-none" />
        <div className="flex justify-center items-center h-full flex-col">
          <img src={"/images/TopWaves.svg"} alt="Top wave" className="-z-10 w-full h-auto absolute top-0" />
          <div>
            <p className="text-7xl text-center">Welcome</p>
            <p className="text-5xl text-center">I am Alexander</p>
            <NavLinkContainer currentPage="home" className="xs:invisible sm:visible" />
          </div>
          <MobileHomeNav buttonClassName="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
          <div className="-z-10 w-full h-auto absolute bottom-0 pointer-events-none">
            <img src={"/images/BottomWave.svg"} alt="Bottom wave" width={"100%"} />
          </div>
          <div className="absolute left-0 right-0 bottom-5 flex justify-center">
            <Link href={"/licenses"}>Licenses</Link>
          </div>
        </div>
      </div>
    </>
  );
}
