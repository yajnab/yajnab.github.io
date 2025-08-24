const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/yajnab.github.io/' : '',
  basePath: isProd ? '/yajnab.github.io' : '',
  output: 'export'
};

export default nextConfig;
