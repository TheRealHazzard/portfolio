import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robin Thomas, Senior Software Engineer",
  description:
    "Senior front-end engineer in Bengaluru. Five years at Tekion making slow, brittle enterprise front-ends fast, with live projects you can use.",
};

export const viewport: Viewport = { themeColor: "#1a2039" };

// Marks the page as script-enabled before first paint, so entrances can start hidden.
// Without script, nothing is ever hidden.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={hanken.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
