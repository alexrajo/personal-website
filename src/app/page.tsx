import { MobileNav, MobileNavLinkList, NavLinkContainer } from "@/components/nav";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex justify-center items-center h-full flex-col">
          <img src={"/images/TopWaves.svg"} alt="Bottom wave" className="-z-10 w-full h-auto absolute top-0" />
          <div>
            <p className="text-7xl text-center">Welcome</p>
            <p className="text-5xl text-center">I am Alexander</p>
            <NavLinkContainer currentPage="home" className="xs:invisible sm:visible" />
          </div>
          <MobileNav buttonClassName="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <img src={"/images/BottomWave.svg"} alt="Bottom wave" className="-z-10 w-full h-auto absolute bottom-0" />
        </div>
      </div>
    </>
  );
}