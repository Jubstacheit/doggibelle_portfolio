import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    taint: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img2.finalfantasyxiv.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lastfm.freetls.fastly.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }
    ],
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);