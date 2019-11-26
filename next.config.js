const withGraphql = require('next-plugin-graphql');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = withGraphql({
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.node = { // eslint-disable-line no-param-reassign
        fs: 'empty',
      };
    }

    // eslint-disable-next-line no-param-reassign
    config.plugins = [
      ...(config.plugins || []),
      // To load env variables on local environment
      new webpack.EnvironmentPlugin(localEnv),

    ];

    return config;
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
});
