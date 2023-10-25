import Navbar from "@/components/layout/Navbar";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen font-sans selection:bg-black selection:text-white antialiased ",
            inter.className
          )}
        >
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
      {/* <Script async src="//code.tidio.co/f4ntqdkrkcmkov2pbgapiuevig4fhtbq.js" /> */}
    </html>
  );
}
