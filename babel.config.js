const presets = ['module:metro-react-native-babel-preset']
const plugins = [
  'babel-plugin-transform-typescript-metadata',
  ['@babel/plugin-proposal-decorators', {legacy: true}],
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
