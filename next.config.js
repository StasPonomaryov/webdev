/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'uk', 'en'],
    defaultLocale: 'default',
    localeDetection: false
  },
  trailingSlash: true,
};

module.exports = nextConfig;
