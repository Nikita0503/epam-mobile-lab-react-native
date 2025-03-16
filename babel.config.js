module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@screens': './src/screens',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@actions': './src/store/actions',
          '@store': './src/store',
          '@selectors': './src/store/selectors',
          '@theme': './src/theme',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@images': './src/assets',
        },
      },
    ],
  ],
};
