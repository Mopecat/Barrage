module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    // 关闭console校验
    'no-console': 0,
    // 根据环境判断debugger校验
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 去掉分号
    // semi: 2,
    // 分号后面加空格
    'semi-spacing': [2, { before: false, after: true }],
    // 去掉function和()之前的空格
    'space-before-function-paren': ['error', 'never'],
    // 校验{}之前的空格
    'space-before-blocks': ['error', 'always'],
    // 关键字间距
    'keyword-spacing': ['error', { before: true }],
    // 对象字面量属性间距
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    // 两个空格缩进
    indent: ['error', 2],
    // 字符串允许使用单引号
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // 换行长度、忽略注释、忽略url、忽略字符串、忽略正则
    'max-len': [
      'error',
      {
        code: 300,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // 箭头函数用强制括号
    'arrow-parens': ['error', 'always'],
    // 箭头函数前后空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 箭头函数中禁止书写表达式
    'no-confusing-arrow': ['error', { allowParens: false }],
    // if后必须包含{}
    curly: ['error', 'all'],
    // 逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],

    // 设置typescript-eslint规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none', // 'none' or 'semi' or 'comma'
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi', // 'semi' or 'comma'
          requireLast: false,
        },
      },
    ],
    // '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'], // 先忽略，但是尽量少用 any
  },
}
