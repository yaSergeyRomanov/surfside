import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\u0000"],
            ["^@?\\w.*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$"],
            ["^@?\\w", "^\\u0000"],
            ["^"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.less$", "^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "no-duplicate-imports": "error",
      "react-hooks/set-state-in-effect": "warn",
      "@next/next/no-html-link-for-pages": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
