/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
module.exports = nextConfig;
