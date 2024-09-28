import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img2.finalfantasyxiv.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);