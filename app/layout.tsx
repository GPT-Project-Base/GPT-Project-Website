import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "GPT Project",
  description: "GPT Project website for documentation throughout our software development process",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className= "flex-1">{children}</main>
      </body>
    </html>
  );
}
