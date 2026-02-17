import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	site: "https://hanhtetaung.github.io",
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: {
		enabled: false,
	},
});
