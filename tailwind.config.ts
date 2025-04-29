import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';


export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        "mustard": '#e3c042', // yellow/orange
        "klein": '#0038FF', // blue
        'marquee1': '#EDEDEF',
        'marquee2': '#1795FF',
        'marquee3': '#90D6FC',
        'marquee4': '#45C2A7',
        'marquee5': '#D7D7A0',
        'marquee6': '#4C91D0',
        'marquee7': '#cccccc',
        'marquee8': '#bc8670',
        'marquee9': '#e3c042',
        'marquee10': '#e3c042',
      },
      fontFamily: {
        // serif: ['var(--font-kaisei)'],
        sans: ['var(--font-libre)'],
        // mono: ['var(--font-mono)'],
        
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  plugins: [typography],
} satisfies Config;
