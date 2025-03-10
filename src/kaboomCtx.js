// Use the CDN version for GitHub Pages and keep compatibility with local development
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  // fullscreen: true,
  // scale: 2,
  debug: true,
});

// Base URL variable for assets (not for the import)
export const getAssetUrl = (path) => {
  const BASE_PATH =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "./" // Local development path
      : "/lasiya-portfolio/public/"; // GitHub Pages path for deployment

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${BASE_PATH}${normalizedPath}`;
};

export const isProduction = () => {
  return !(
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  );
};
