import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	vite: {
    server: {
      watch: {
      	// Disable traversing .direnv
      	followSymlinks: false,
      }
    },
  },
});
