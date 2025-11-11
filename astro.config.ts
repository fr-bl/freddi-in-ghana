import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://www.freddi-in-ghana.de",
    integrations: [icon(), mdx()],
    image: {
        service: import.meta.env.DEV ? passthroughImageService() : undefined,
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
