import { loadPage } from "./route.js";

/*
 * Waites for change in URL.
 * Specifically the part after the link which is e.g #home
 * if that has changed then the page for the dedicated route gets loaded.
 */
window.addEventListener("hashchange", () => {
  /*
   * window.location.hash.slice(1) -> Takes the hash from the url
   * And removes the hash (#) from the name.
   * If it is empty, "home" gets used as route.
   */
  const route = window.location.hash.slice(1) || "home";
  loadPage(route);
});

/*
 * Initial Loading of the Page.
 * Necessary cause on first load the event hasnt fired hence why we need
 * this initialising.
 */
loadPage(window.location.hash.slice(1) || "home");
