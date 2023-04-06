"use client";

import Link from "next/link";

export type NavLinkContainerProps = {
  currentPage?: "home" | "projects" | "aboutme" | "contact";
};

export interface NavBarProps extends NavLinkContainerProps {}

export function NavLinkContainer(props: NavLinkContainerProps) {
  const { currentPage } = props;

  return (
    <div className="flex text-3xl space-x-2 mt-16">
      <Link href={"/"} className={`hover:drop-shadow-lg hover:text-white ${currentPage === "home" && "underline"}`}>
        Home
      </Link>
      <p>|</p>
      <Link
        href={"/projects"}
        className={`hover:drop-shadow-lg hover:text-white ${currentPage === "projects" && "underline"}`}
      >
        Projects
      </Link>
      <p>|</p>
      <Link
        href={"/aboutme"}
        className={`hover:drop-shadow-lg hover:text-white ${currentPage === "aboutme" && "underline"}`}
      >
        About me
      </Link>
      <p>|</p>
      <Link
        href={"/contact"}
        className={`hover:drop-shadow-lg hover:text-white ${currentPage === "contact" && "underline"}`}
      >
        Contact
      </Link>
    </div>
  );
}

export function NavBar(props: NavBarProps) {
  return (
    <nav className="bg-primary-800 drop-shadow-md p-8 flex justify-center items-center">
      <NavLinkContainer {...props} />
    </nav>
  );
}
