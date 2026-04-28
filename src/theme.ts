export function getThemeHref(theme: string) {
	return `/themes/${theme}.css`;
}

export function getActiveTheme(defaultTheme: string) {
	return localStorage.theme || defaultTheme;
}

export function applyTheme(theme: string) {
	localStorage.theme = theme;

	const currentTheme = document.getElementById("theme") as HTMLLinkElement | null;
	if (!currentTheme) {
		return;
	}

	const href = getThemeHref(theme);
	if (currentTheme.getAttribute("href") === href) {
		return;
	}

	const nextTheme = document.createElement("link");
	nextTheme.rel = "stylesheet";
	nextTheme.href = href;
	nextTheme.onload = () => {
		currentTheme.href = href;
		nextTheme.remove();
	};
	nextTheme.onerror = () => nextTheme.remove();

	currentTheme.after(nextTheme);
}
