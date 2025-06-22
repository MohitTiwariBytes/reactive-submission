import {
  defaultClientMainFields,
  defineConfig,
  searchForWorkspaceRoot,
} from "vite";
import react from "@vitejs/plugin-react";
import { shouldUseFlatConfig } from "eslint/use-at-your-own-risk";
import { ssrDynamicImportKey } from "vite/module-runner";

export default defineConfig({
  base: "/",
  plugins: [react()],
});
