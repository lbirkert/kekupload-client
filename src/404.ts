import { base_download, default_theme } from "./config";
import { applyMetadata } from "./metadata";
import { applyTheme, getActiveTheme } from "./theme";

applyTheme(getActiveTheme(default_theme));
applyMetadata();

const homeLink = document.getElementById("home-link") as HTMLAnchorElement | null;
if (homeLink) homeLink.href = base_download;
