import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three']
};
export default MillionLint.next({
  rsc: true
})(nextConfig);