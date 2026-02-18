import { cards } from "./utils/utils.js";
const imgSrc = {
  true: "assets/ribbonFilled.png",
  false: "assets/ribbonWhite.png",
};

export default function BookmarkButton(card) {
  const bookMarkButton = document.createElement("button");
  bookMarkButton.setAttribute("data-js", `bookMarkButton`);
  bookMarkButton.classList.add("bookMark");
  bookMarkButton.style.backgroundColor = "transparent";
  bookMarkButton.style.border = "none";

  const bookMarkImg = document.createElement("img");
  bookMarkImg.src = imgSrc[card.bookmarked];
  bookMarkImg.setAttribute("data-js", "bookMarkImg");
  bookMarkButton.append(bookMarkImg);

  bookMarkButton.addEventListener("click", () => {
    // finds the parent element for the Button so i can change the card Data for it
    const card = bookMarkButton.parentElement;
    const index = card.dataset.index;

    cards[index].bookmarked = !cards[index].bookmarked;

    // Changing the Bookmark button Image
    const img = bookMarkButton.querySelector('[data-js="bookMarkImg"]');
    img.src = imgSrc[cards[index].bookmarked];
  });

  return bookMarkButton;
}
