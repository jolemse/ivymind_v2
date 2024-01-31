import { Analytics } from '@vercel/analytics/react';

import '@mantine/core/styles.css';
import React from 'react';
//import Script from 'next/script';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { Footer } from '@/components/Footer/Footer';
import '@mantine/carousel/styles.css';
import { CookiesBanner } from '@/components/CookieConsentBanner/CookieConsentBanner';

export const metadata = {
  title: 'Ivymind - Dein Portal für Achtsamkeit und Selbstliebe',
  description: 'Bei Ivymind findest Du Kurse und Coachings rund um das Thema Achtsamkeit und Selbstliebe.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/*Anny Skripte
        <Script src="https://unpkg.com/vue@3" />
        <Script src="https://cdn.anny.co/widget/annyComponents.umd.latest.min.js" />
        */}
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSimple />
          <CookiesBanner />
          {children}
          <Footer />
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
