import "./globals.css";
import Navbar from "@/components/Navbar";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700'], // Specify the font weights you need
  subsets: ['latin'], // Specify the subsets you need
  display: 'swap', // Optional: Improve font loading performance
});

export const metadata = {
  title: "APIS",
  description: "APIS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={manrope.className + `overflow-hidden antialiased relative bg-[#111631] text-white max-w-[100vw]`}
      ><Navbar/>
        {children}
      </body>
    </html>
  );
}
