/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
require("dotenv").config();
const nextConfig = {};
module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/intro", // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};

module.exports = withBundleAnalyzer({});
