import { sveltekit } from "@sveltejs/kit/vite";
import pluginYaml from "@rollup/plugin-yaml";
import yaml from "js-yaml";
import { dataToEsm } from "@rollup/pluginutils";
import type { UserConfig } from "vite";
import viteCompression from 'vite-plugin-compression';

/** A custom Markdown plugin for Vite, with TOML frontmatter support. */
function markdown() {
  return {
    name: "markdown",

    transform(src: string, id: string) {
      if (/\.md$/.test(id)) {
        let frontmatter = {};
        let content = src;
        if (src.startsWith("---")) {
          const end = src.indexOf("---", 3);
          if (end === -1) {
            throw new Error(`Unclosed TOML frontmatter in ${id}`);
          }
          frontmatter = yaml.load(src.substring(3, end).trim()) as any;
          content = src.substring(end + 3).trim();
        }
        return {
          code: dataToEsm({ ...frontmatter, content }),
          map: null,
        };
      }
    },
  };
}

const config: UserConfig = {
  plugins: [
    sveltekit(),
    pluginYaml() as any,
    markdown(),
    viteCompression()
  ],
  // Add this section to handle glob imports
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'vite-plugin-glob-import',
          transform(code, id) {
            if (code.includes('import.meta.glob')) {
              return code.replace(/as:\s*['"]raw['"]/g, "query: '?raw', import: 'default'");
            }
          }
        }
      ]
    }
  }
};

export default config;