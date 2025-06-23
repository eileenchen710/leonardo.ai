import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import UserGate from "./UserGate";

export const metadata: Metadata = {
  title: "Next.js with ChakraUI",
  description: "Next.js app with ChakraUI and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserGate>{children}</UserGate>
        </Providers>
        <footer style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '2rem', padding: '1rem 0' }}>
          Challenge version: v3.5
        </footer>
      </body>
    </html>
  );
}
