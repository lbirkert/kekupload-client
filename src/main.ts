import App from "./components/App.svelte";
import { default_theme, description, title } from "./config";
import { applyTheme, getActiveTheme } from "./theme";
import { mount } from "svelte";

function setMeta(selector: string, content: string) {
	document.querySelector(selector)?.setAttribute("content", content);
}

const target = document.getElementById("app");
if (!target) {
	throw new Error("Could not find app root element");
}

applyTheme(getActiveTheme(default_theme));
document.title = title;
setMeta('meta[name="title"]', title);
setMeta('meta[property="og:title"]', title);
setMeta('meta[name="description"]', description);
setMeta('meta[property="og:description"]', description);
setMeta('meta[property="twitter:description"]', description);

const app = mount(App, {
	target
});

export default app;
