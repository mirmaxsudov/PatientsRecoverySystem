/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Enable ES modules for .proto imports
    config.module.rules.push({
      test: /\.proto$/,
      type: 'asset/source',
    })

    // Add gRPC-web shim
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }

    return config
  },
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
