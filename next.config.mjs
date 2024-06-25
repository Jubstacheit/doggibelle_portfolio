import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: 'https://twitter.com',
        permanent: true,
      }
    ]
  },
};
export default MillionLint.next({
  rsc: true
})(nextConfig);