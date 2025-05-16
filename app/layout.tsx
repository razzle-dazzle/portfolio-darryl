import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";
import Navbar from "./components/Navbar/Navbar";
import { ServerThemeProvider } from "@wits/next-themes";
import { Constants, WEBSITE_URL } from "./constants";
import Footer from './components/Footer/Footer';

const libre = localFont({
  src: [
    {
      path: "../public/fonts/LibreFranklin-Regular.woff",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../public/fonts/LibreFranklin-Italic.woff",
      weight: '400',
      style: 'italic',
    },
    {
      path: "../public/fonts/LibreFranklin-Bold.woff",
      weight: '700',
      style: 'normal',
    },
    {
      path: "../public/fonts/LibreFranklin-Light.woff",
      weight: '300',
      style: 'normal',
    },
    {
      path: "../public/fonts/LibreFranklin-LightItalic.woff",
      weight: '300',
      style: 'italic',
    },
    {
      path: "../public/fonts/LibreFranklin-Thin.woff",
      weight: '200',
      style: 'normal',
    },
    {
      path: "../public/fonts/LibreFranklin-Medium.woff",
      weight: '500',
      style: 'normal',
    },
    {
      path: "../public/fonts/LibreFranklin-MediumItalic.woff",
      weight: '500',
      style: 'italic',
    },
  ],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Darryl October",
    template: "%s | Darryl October - Front End Engineer",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Darryl October",
    description: "Front End Engineer and tech enthusiast.",
    url: WEBSITE_URL,
    siteName: "Darryl October",
    locale: "es-ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL('https://www.darryloctober.co.uk'),
  twitter: {
    title: "Darryl October",
    card: "summary_large_image",
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ServerThemeProvider
      attribute="class"
      defaultTheme={Constants.defaultTheme}
    >
      <html
        lang="en"
        className={clsx(
          "text-black dark:text-white",
          libre.variable
        )}
      >
          <body className="antialiased flex flex-col mx-auto bg-white dark:bg-[#161616] min-h-[100vh]">
            <Navbar />
            <main className="flex-auto min-w-0 flex flex-col px-0 !pt-[72px] md:!pt-[100px]">
              {children}
              {/* <Analytics /> */}
            </main>
            <Footer />
          </body>
      </html>
    </ServerThemeProvider>
  );
}
