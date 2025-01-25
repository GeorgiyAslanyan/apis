import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "APIS",
  description: "APIS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative bg-black text-white max-w-[100vw]`}
      ><Navbar/>
        {children}
      </body>
    </html>
  );
}
