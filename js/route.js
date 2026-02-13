import { loadCards } from "./cards.js";

/*
 * Configuration of routes for easy access to change
 * Works as lookup table.
 */
const routes = {
  home: { title: "Home", page: "pages/home.html" },
  bookmarks: { title: "Bookmarks", page: "pages/bookmark.html" },
  profile: { title: "Profile", page: "pages/profile.html" },
};

/*
 * Load Page function
 * async -> makes the function wait for things.
 * route -> the page name i want to go.
 */
export async function loadPage(route) {
  /*
   * Defines where to go in the beginning.
   * First it gets checked if parameter is choosen and found in routes array
   * If not it takes the default which is the home route.
   */
  const config = routes[route] || routes["home"];

  /*
   * Fetching the title Element and changing the Title dynamic,
   * Since the boilerplate is only in one file.
   */
  document.getElementById("page-title").textContent = config.title;

  /*
   * Fetching the page which matches to the route from the server.
   * Await is for waiting until the file arrives before continuing
   */
  const response = await fetch(config.page);

  /*
   * Conver the response into readable text.
   * Await -> Wait till conversion is done before continuing.
   */

  const html = await response.text();
  document.getElementById("content").innerHTML = html;
  // NOW the HTML is in the DOM, so run your function!

  if (route === "home" || route === "bookmarks") {
    loadCards(route); // Your function here
  }
}
