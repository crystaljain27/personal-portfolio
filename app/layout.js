import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/components/navbar"; // Using absolute path
import "@/app/globals.css"; // Using absolute path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crystal Jain - Developer Portfolio",
  description: "Personal portfolio of Crystal Jain, a professional software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
