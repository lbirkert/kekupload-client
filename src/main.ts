import App from "./components/App.svelte";
import { default_theme } from "./config";
import { applyMetadata } from "./metadata";
import { applyTheme, getActiveTheme } from "./theme";
import { mount } from "svelte";

const target = document.getElementById("app");
if (!target) {
	throw new Error("Could not find app root element");
}

applyTheme(getActiveTheme(default_theme));
applyMetadata();

const app = mount(App, {
	target
});

export default app;
