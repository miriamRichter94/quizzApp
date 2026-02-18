import { loadMainCards } from "./home.js";
import { routes } from "./utils/utils.js";
import { loadBookmarkedCards } from "./bookmark.js";

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

  if (route === "home") {
    loadMainCards(); // Your function here
  }
  if (route === "bookmarks") {
    loadBookmarkedCards();
  }

  // Call init function if it exists
  if (config.init) {
    config.init(); // ← This runs AFTER HTML is loaded!
  }

  updateLinkImage(route);
}

// Setting the right Icon active
function updateLinkImage(route) {
  // first we set every icon to unchoosen
  document.querySelector('[data-js="home-picture"]').src =
    "assets/menu/home.png";
  document.querySelector('[data-js="bookmarks-picture"]').src =
    "assets/menu/bookmark.png";
  document.querySelector('[data-js="question-picture"]').src =
    "assets/menu/question.png";
  document.querySelector('[data-js="profile-picture"]').src =
    "assets/menu/user.png";

  // based on the route we change the menu icon to a acitve one
  const linkImage = document.querySelector(`[data-js="${route}-picture"]`);
  const routeConfig = routes[route];

  linkImage.src = routeConfig.linkImg;
}
