import { defineConfig, passthroughImageService } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	image: {
		service: import.meta.env.DEV
			? passthroughImageService()
			: undefined,
	},
	vite: {
		server: {
			watch: {
				// Disable traversing .direnv
				followSymlinks: false,
			},
		},
	},
});
