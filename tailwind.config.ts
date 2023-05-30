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
