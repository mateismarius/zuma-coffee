// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // Extinde preset-urile Next via compat
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignoră folderele de build
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // (opțional) setări generale pentru TS
  {
    languageOptions: {
      parserOptions: {
        // Autodetectează proiectul TS (bun cu TS 5)
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
];
