module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-shadow': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    // 'no-param-reassign': ['error', {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'state',
    //   ],
    //   'no-nested-ternary': 'off',
    // }],
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-nested-ternary': 'off',
    'max-len': ['off', { code: 120 }],
    'no-plusplus': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [
          ['~', './src'],
        ],
      },
    },
  },
}
