import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				notFound: "404.html"
			}
		}
	},
	plugins: [
		svelte(),
		legacy({
			targets: ["ie >= 11"],
			additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
		})
	]
});
