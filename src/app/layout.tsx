import "./globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "clearPath",
  description: "Stop Paying Top Dollar For Poor Leads",
  metadataBase: new URL("https://yoomi-05.vercel.app/"),
  openGraph: {
    images: "/meta-img.webp",
  },
};
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}