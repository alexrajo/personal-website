import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="text-primary-text">
        <div className="w-screen h-screen bg-gradient-to-b from-primary-800 to-secondary-400 fixed -z-50"></div>
        {children}
      </body>
    </html>
  );
}
