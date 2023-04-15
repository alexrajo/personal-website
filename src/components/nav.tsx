"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export type Page = "home" | "projects" | "aboutme" | "contact";

export type NavLinkContainerProps = {
  currentPage?: Page;
  className?: string;
};

export interface NavBarProps extends NavLinkContainerProps {}

export interface MobileNavLinkListProps extends NavLinkContainerProps {
  isOpen: boolean;
  onCloseClicked?: React.MouseEventHandler;
}

export type MobileHomeNavProps = {
  className?: string;
  buttonClassName?: string;
};

export type MobileNavProps = NavLinkContainerProps;

export const NavLinkContainer: React.FC<NavLinkContainerProps> = (props) => {
  const { currentPage, className } = props;

  return (
    <div className={`flex text-3xl space-x-2 mt-16 ${className}`}>
      <Link
        href={"/"}
        className={`hover:drop-shadow-lg hover:text-white ${
          currentPage === "home" && "underline"
        }`}
      >
        Home
      </Link>
      <p>|</p>
      <Link
        href={"/projects"}
        className={`hover:drop-shadow-lg hover:text-white ${
          currentPage === "projects" && "underline"
        }`}
      >
        Projects
      </Link>
      <p>|</p>
      <Link
        href={"/aboutme"}
        className={`hover:drop-shadow-lg hover:text-white ${
          currentPage === "aboutme" && "underline"
        }`}
      >
        About me
      </Link>
      <p>|</p>
      <Link
        href={"/contact"}
        className={`hover:drop-shadow-lg hover:text-white ${
          currentPage === "contact" && "underline"
        }`}
      >
        Contact
      </Link>
    </div>
  );
};

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { className } = props;

  return (
    <nav
      className={`bg-primary-800 drop-shadow-md p-8 flex justify-center items-center ${className}`}
    >
      <NavLinkContainer {...props} />
    </nav>
  );
};

export const MobileNavLinkList: React.FC<MobileNavLinkListProps> = (props) => {
  const { isOpen, className, onCloseClicked } = props;

  return (
    <div
      className={`fixed bottom-0 left-5 right-5 sm:invisible overflow-hidden z-50 ${className} ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <nav
        className={`${
          isOpen ? "" : "transform translate-y-full"
        } shadow-md transition-transform duration-300`}
      >
        <div className="flex flex-col text-center bg-white text-tertiary-text rounded-t-md space-y-5 p-5 font-bold items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/aboutme"}>About me</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/licenses"}>Licenses</Link>
          <Button
            onClick={onCloseClicked}
            className="text-primary-text max-w-fit"
          >
            Close
          </Button>
        </div>
      </nav>
    </div>
  );
};

export const MobileHomeNav: React.FC<MobileHomeNavProps> = (props) => {
  const { buttonClassName, className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onMenuButtonClicked = () => {
    setIsOpen(true);
  };

  const onCloseButtonClicked = () => {
    setIsOpen(false);
  };

  return (
    <div className={`z-50 sm:invisible ${className}`}>
      <Button className={`${buttonClassName}`} onClick={onMenuButtonClicked}>
        <div className="flex space-x-5">
          <p>Menu</p>
          <Image
            src="/images/HamburgerMenuIcon.svg"
            alt="hamburger-menu"
            width="24"
            height={(28 / 39) * 24}
          />
        </div>
      </Button>
      <MobileNavLinkList
        isOpen={isOpen}
        onCloseClicked={onCloseButtonClicked}
      />
    </div>
  );
};

export const MobileNav: React.FC<MobileNavProps> = (props) => {
  const { className, currentPage } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onMenuButtonClicked = () => {
    setIsOpen(!isOpen);
  };

  const onCloseButtonClicked = () => {
    setIsOpen(false);
  };

  return (
    <div className={`z-50 sm:invisible ${className}`}>
      <div className="flex justify-between items-center px-8 py-5 bg-primary-800 drop-shadow-md">
        <p className="capitalize text-xl">{currentPage}</p>
        <button className="" onClick={onMenuButtonClicked}>
          <div className="flex space-x-5 justify-center items-center aspect-square w-8 relative">
            {isOpen ? (
              <Image
                src="/images/CloseMenuIcon.svg"
                alt="hamburger-menu"
                width={(30.4 * 32) / 39}
                height={(30.4 * 32) / 39}
              />
            ) : (
              <Image
                src="/images/HamburgerMenuIcon.svg"
                alt="hamburger-menu"
                width="32"
                height={(28 / 39) * 32}
              />
            )}
          </div>
        </button>
      </div>
      <MobileNavLinkList
        isOpen={isOpen}
        onCloseClicked={onCloseButtonClicked}
      />
    </div>
  );
};
