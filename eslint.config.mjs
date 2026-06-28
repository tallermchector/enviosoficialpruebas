import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pluginNext from "@next/eslint-plugin-next/dist/index.js";
import pluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    plugins: {
      '@next/next': pluginNext,
      'react': pluginReact,
    },
    rules: {
      // Reglas base del plugin de Next.js
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,

      // Reglas recomendadas de React
      ...pluginReact.configs.recommended.rules,

      // Tus reglas personalizadas añadidas
      "no-restricted-imports": "off",
      "react/react-in-jsx-scope": "error",
      "@next/next/no-html-link-for-pages": "error"
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente tu versión de React
      },
    },
  }
]);
