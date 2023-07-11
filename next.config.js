/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
require("dotenv").config();
const nextConfig = {};
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: false,
      },
    ];
  },
};
