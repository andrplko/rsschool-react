const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    additionalData: `@import "/src/styles/abstracts/_variables.module.scss";`,
  },
  images: {
    domains: ['i.discogs.com'],
  },
};

module.exports = nextConfig;
