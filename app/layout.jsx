import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hack4Health",
  description: "TAKE CARE OF YOUR HEALTH NOW",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {" "}
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
