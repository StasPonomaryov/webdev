import { Fira_Sans, Source_Sans_3 } from 'next/font/google';

export const fira = Fira_Sans({
  weight: ['300', '600'],
  subsets: ['cyrillic'],
  variable: '--font-fira',
  display: 'swap'
});

export const source = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  variable: '--font-source',
  display: 'swap'
});