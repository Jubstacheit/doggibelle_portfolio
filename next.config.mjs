import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['img2.finalfantasyxiv.com']
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);