import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({
      enabled: true,
    })
  : (config) => config;

const nextConfig = {
  // Any user-specific Next.js configuration goes here
};

export default withBundleAnalyzer(nextConfig);
