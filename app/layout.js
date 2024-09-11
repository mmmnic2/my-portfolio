import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navBar/Navbar";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Lan portfolio",
  description: "Hi there, this is Lan portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className="bg-primary-black container mx-auto h-[100vh]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
