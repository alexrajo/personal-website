import Link from "next/link";
import "../app/globals.css";

export default function Custom404() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-primary-800 to-secondary-400 fixed -z-50"></div>
      <div className="flex justify-center items-center h-screen flex-col space-y-10">
        <p className="text-3xl text-primary-text">404 - Page not found</p>
        <Link href="/" className="text-link underline">
          Go back to home page
        </Link>
      </div>
    </>
  );
}
