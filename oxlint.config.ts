import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    pedantic: "error",
    perf: "error",
    restriction: "error",
    style: "error",
    suspicious: "error",
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      // Shared test file overrides — framework-specific test rules
      // are in separate jest/ and vitest/ configs to avoid conflicts.
      files: [
        "**/*.{test,spec}.{ts,tsx,js,jsx}",
        "**/__tests__/**/*.{ts,tsx,js,jsx}",
      ],
      rules: {
        // Disabled: mock callbacks often need empty functions
        "no-empty-function": "off",
        // Disabled: mock factories use Promise.resolve/reject (conflicts with require-await)
        "promise/prefer-await-to-then": "off",
      },
    },
    {
      files: ["**/next-env.d.ts"],
      rules: {
        "import/no-unassigned-import": "off",
      },
    },
    {
      files: ["oxlint.config.ts"],
      rules: {
        "sort-keys": "off",
      },
    },
  ],
  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "jsdoc",
    "node",
    "promise",
    "react",
    "react-perf",
    "jsx-a11y",
    "nextjs",
  ],
  rules: {
    "no-await-in-loop": "off",
    "max-lines-per-function": "off",
    "no-implicit-coercion": "off",
    "no-magic-numbers": "off",
    "no-console": "off",
    "no-ternary": "off",
    "no-undefined": "off",
    "max-lines": "off",
    "id-length": "off",
    "func-style": [
      "error",
      "expression",
      {
        allowArrowFunctions: true,
      },
    ],
    "jsx-a11y/no-autofocus": "off",
    "react-perf/jsx-no-jsx-as-prop": "off",
    "react-perf/jsx-no-new-array-as-prop": "off",
    "react-perf/jsx-no-new-object-as-prop": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-max-depth": "off",
    "react/jsx-props-no-spreading": "off",

    "react/no-multi-comp": "off",
    "react/no-unknown-property": "off",
    "react/only-export-components": "off",

    "react/react-in-jsx-scope": "off",
    "arrow-body-style": ["error", "as-needed"],
    "max-depth": "off",
    "max-params": "off",
    "max-statements": "off",
    "capitalized-comments": "off",
    "new-cap": "off",
    "no-continue": "off",
    "init-declarations": "off",
    // Rely on oxfmt `experimentalSortImports` instead
    "sort-imports": "off",
    "no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
    // Avoid conflict with typescript/no-floating-promises
    "no-void": ["error", { allowAsStatement: true }],

    "import/no-relative-parent-imports": "off",
    "import/no-default-export": "off",
    "import/exports-last": "off",
    "import/no-named-export": "off",
    "import/max-dependencies": "off",
    "import/extensions": "off",
    "import/no-namespace": "off",
    "import/no-anonymous-default-export": "off",
    "import/prefer-default-export": "off",
    "import/group-exports": "off",
    "import/no-commonjs": "off",
    "import/unambiguous": "off",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/no-dynamic-require": "off",
    "import/no-unassigned-import": "off",
    "import/no-nodejs-modules": "off",

    "jsdoc/require-param": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-type": "off",

    "unicorn/explicit-length-check": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-process-exit": "off",
    "unicorn/prefer-global-this": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-string-raw": "off",
    "unicorn/text-encoding-identifier-case": ["error", { withDash: true }],

    "typescript/explicit-module-boundary-types": "off",
    "typescript/no-require-imports": "off",
    "typescript/explicit-function-return-type": "off",
    "typescript/no-var-requires": "off",
    "typescript/require-await": "off",

    "node/no-process-env": "off",

    "oxc/no-map-spread": "off",
    "oxc/no-async-await": "off",
    "oxc/no-rest-spread-properties": "off",
    "oxc/no-optional-chaining": "off",

    "promise/catch-or-return": "off",
    "promise/always-return": "off",
  },
});
