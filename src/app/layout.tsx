import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "./(Homepage)/_components/Navbar";

export const metadata: Metadata = {
  title: "Revival Temple",
  description: "Revival Temple is a beacon of hope in our community. The love and support ",
  icons: [{ rel: "icon", url: "/Temple.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <Navbar />
        {children}
        </body>
    </html>
  );
}
