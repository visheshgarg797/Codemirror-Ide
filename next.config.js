/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  env: { NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY },
};

module.exports = nextConfig;
