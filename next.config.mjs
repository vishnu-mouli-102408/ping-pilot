/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React strict mode for highlighting potential problems in the app
    swcMinify: true, // Uses the Next.js SWC compiler for faster and smaller builds
    productionBrowserSourceMaps: false, // Disables source maps in production for smaller build sizes
    images: {
      domains: ['example.com'], // Replace with your allowed image domains
      formats: ['image/avif', 'image/webp'], // Enables modern image formats for optimized loading
    },
    experimental: {
      scrollRestoration: true, // Enables built-in scroll restoration between page navigations
    },
    webpack: (config, { isServer }) => {
      // Example: Externalize large server-side dependencies to reduce bundle size
      if (!isServer) {
        config.externals.push({
          'some-large-library': 'commonjs some-large-library',
        });
      }
  
      // Analyze bundle size with @next/bundle-analyzer (optional)
      if (process.env.ANALYZE === 'true') {
        return import('@next/bundle-analyzer').then(({ default: withBundleAnalyzer }) => {
          return withBundleAnalyzer({ enabled: true })(config);
        });
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  