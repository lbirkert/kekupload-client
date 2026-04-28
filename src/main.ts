import App from "./components/App.svelte";
import { mount } from "svelte";

const target = document.getElementById("app");
if (!target) {
	throw new Error("Could not find app root element");
}

const app = mount(App, {
	target
});

export default app;
