export default (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    exclude: ['node_modules'],
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  };
};
