import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/navbar/navbarcom/darkmode/theme-provider";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "KAOSHOP",
  description: "KAOSHOP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased itim-regular">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
