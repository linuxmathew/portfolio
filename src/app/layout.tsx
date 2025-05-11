import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google"; // Import the font
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import LetsWork from "./components/workTogether/letsWork";
import ContactMeFooter from "./components/contactMe/ContactMe";
import SectionDivider from "./components/SectionDivider";
import NProgressWrapper from "./components/progressbar/progressWrapper";

// Configure Schibsted Grotesk
const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"], // Match your design’s weights
  variable: "--font-schibsted-grotesk",
});

export const metadata: Metadata = {
  title: "Temitayo",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>
        <NProgressWrapper />
        <Navbar />
        <main>{children}</main>
        <LetsWork />
        <div style={{ marginTop: "4.25rem" }}></div>
        <SectionDivider
          isDefault={false}
          style={{
            marginBottom: "0px",
            borderBottom: "1px solid #aaaadd",
            marginTop: "4.25rem",
          }}
        />
        <ContactMeFooter />
      </body>
    </html>
  );
}
