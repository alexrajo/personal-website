import Footer from "./footer";
import { MobileHomeNav, MobileNav, NavBar, NavBarProps } from "./nav";

interface PageWrapperProps extends NavBarProps {
  children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperProps) {
  const { children, currentPage } = props;

  return (
    <div className="min-h-screen">
      <NavBar
        currentPage={currentPage}
        className="xs:invisible xs:absolute sm:visible sm:relative"
      />
      {currentPage == "home" ? (
        <MobileHomeNav className="sm:invisible" />
      ) : (
        <MobileNav className="sm:invisible" currentPage={currentPage} />
      )}
      <div className="p-8">{children}</div>
      <Footer />
    </div>
  );
}
