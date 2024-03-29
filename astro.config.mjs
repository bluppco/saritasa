import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		tailwind(),
		react()],
	output: "server",
	adapter: cloudflare({
		routes: {
			exclude: ["/icons/*", "/fonts/*", "/images/*","/_astro/*","/logo/*" ]
		},
		runtime: {
			mode: 'local',
			type: 'pages'
		}
	}),
	image: {

		service: {
			entrypoint: "astro/assets/services/noop"
		}

	},
});
