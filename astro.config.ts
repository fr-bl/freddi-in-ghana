import { defineConfig, fontProviders, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import inline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
    site: "https://www.freddi-in-ghana.de",
    integrations: [icon(), mdx(), inline()],
    image: {
        // service: import.meta.env.DEV ? passthroughImageService() : undefined,
        service: passthroughImageService(),
    },
    vite: {
        server: {
            watch: {
                // Disable traversing .direnv
                followSymlinks: false,
            },
        },
    },
    experimental: {
        fonts: [{
            provider: fontProviders.fontsource(),
            name: "Hanken Grotesk",
            cssVariable: "--font-hanken-grotesk",
            styles: ["normal"],
            subsets: ["latin"],
            fallbacks: ["Arial", "sans-serif"]
        }]
    }
});
