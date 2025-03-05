/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      console.log("🔍 Webpack Aliases:", config.resolve.alias);
      return config;
    },
  };
  
  export default nextConfig;
  