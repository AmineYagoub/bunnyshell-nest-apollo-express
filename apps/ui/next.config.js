//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    svgr: false,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // ability to reuse the same NESTJS models in our frontend application
    config.resolve = {
      ...config.resolve,
      alias: {
        '@nestjs/graphql': path.resolve(
          __dirname,
          '../node_modules/@nestjs/graphql/dist/extra/graphql-model-shim'
        ),
      },
    };
    return config;
  },
  reactStrictMode: true,
  output: 'standalone',
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
