module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^react',
    '^react-native',
    '@reduxjs/toolkit',
    '^[a-zA-Z]',
    '^@?\\w',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
