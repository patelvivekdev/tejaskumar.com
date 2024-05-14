import type { Metadata } from "next";
import React from 'react';
import "@/styles/global.css";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
    title: "Tejas Kumar | Speaker, Engineer, JavaScript, Love",
    description: "GPersonal website of Tejas Kumar, an award-winning web developer and international speaker.",
};


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Nav/>
            {children}
            </body>
      </html>
    );
  }