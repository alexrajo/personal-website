import Footer from "./footer";
import { MobileHomeNav, MobileNav, NavBar, NavBarProps } from "./nav";

interface PageWrapperProps extends NavBarProps {
  children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperProps) {
  const { children, currentPage, className } = props;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="min-h-full flex flex-col flex-1">
        <NavBar currentPage={currentPage} className="xs:invisible xs:absolute sm:visible sm:relative" />
        {currentPage == "home" ? (
          <MobileHomeNav className="sm:invisible sm:absolute" />
        ) : (
          <MobileNav className="sm:invisible sm:absolute" currentPage={currentPage} />
        )}
        <div className={`p-8 ${className}`}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
