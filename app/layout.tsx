import { PropsWithChildren } from "react";
import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import { ServerThemeProvider, ThemeProvider } from "@wits/next-themes";
import { Constants } from "./constants";
import Footer from './components/Footer';
// import 'swiper/css'; // this causes a font error in console
// modules styles
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

// const kaisei = localFont({
//   src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
//   weight: "700",
//   variable: "--font-kaisei",
//   display: "swap",
// });
const libre = localFont({
  // src: "../public/fonts/LibreFranklin-Regular.woff",
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
  // weight: "400",
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
    url: "https://darryloctober.co.uk",
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
  },
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
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
            <main className="flex-auto min-w-0 flex flex-col px-0 !pt-[140px]">
              {children}
              {/* <Analytics /> */}
            </main>
            <Footer></Footer>
          </body>
        {/* <ThemeProvider attribute="class" defaultTheme={Constants.defaultTheme}>

        </ThemeProvider> */}
      </html>
    </ServerThemeProvider>
  );
  
  // return (
  //   <MasterLayout>
  //     {children}
  //   </MasterLayout>
  // );
}
