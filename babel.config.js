const presets = [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]]
const plugins = [
  'babel-plugin-transform-typescript-metadata',
  ['@babel/plugin-proposal-decorators', {legacy: true}],
  [
    '@babel/plugin-transform-react-jsx',
    {
      runtime: 'automatic',
    },
  ],
]

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
  'react-native-reanimated/plugin',
)

module.exports = {
  presets,
  plugins,
}
