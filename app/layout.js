import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
