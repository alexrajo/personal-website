import Footer from "./footer";
import { NavBar, NavBarProps } from "./nav";

interface PageWrapperProps extends NavBarProps {
  children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperProps) {
  const { children, currentPage } = props;

  return (
    <div>
      <NavBar currentPage={currentPage} />
      {children}
      <Footer />
    </div>
  );
}
