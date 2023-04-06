import Footer from "./footer";
import { MobileNav, NavBar, NavBarProps } from "./nav";

interface PageWrapperProps extends NavBarProps {
  children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperProps) {
  const { children, currentPage } = props;

  return (
    <div className="min-h-screen">
      <NavBar currentPage={currentPage} className="xs:invisible xs:absolute" />
      <div className="p-8">{children}</div>
      <Footer />
      <MobileNav className="sm:invisible" />
      <img src={"/images/BottomWave.svg"} alt="Bottom wave" className="-z-10 w-full h-auto absolute bottom-0" />
    </div>
  );
}
