import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import clsx from 'clsx';
import Navbar from '../Navbar';
import { Analytics } from '@vercel/analytics/react';
// import { ThemeProvider } from 'next-themes'
import { Constants } from 'app/constants';
import { ServerThemeProvider, ThemeProvider } from '@wits/next-themes';
import React from 'react';

const kaisei = localFont({
  src: '../../../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

/** @deprecated */
export default function MasterLayout({
  children,
}: PropsWithChildren) {
  return (
    <ServerThemeProvider attribute='class' defaultTheme={Constants.defaultTheme}>
      <html
        lang="en"
        className={clsx(
          'text-black bg-white dark:text-white dark:bg-[#111010]',
          kaisei.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme={Constants.defaultTheme}>
          <body className="antialiased max-w-7xl mb-40 flex flex-col mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
            <Navbar />
            <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
              <React.Fragment key={'main'}>{children}</React.Fragment>
              {/* <Analytics /> */}
            </main>
          </body>

        </ThemeProvider>
      </html>

    </ServerThemeProvider>
  );
}
