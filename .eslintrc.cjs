module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "vue/html-indent": [
      "warn",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    "vue/singleline-html-element-content-newline": [
      "warn",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
      },
    ],
    camelcase: "off",
    indent: ["error", 2],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "quote-props": ["warn", "as-needed"],
    "arrow-parens": ["warn", "as-needed"],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "prefer-regex-literals": "off",
    "no-use-before-define": "off",
    "no-useless-return": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "array-callback-return": "off",
  },
};
