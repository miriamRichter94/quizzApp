import { cards } from "./utils/utils.js";
import Card from "./Card.js";

export function loadBookmarkedCards() {
  const cardContainerHome = document.querySelector(
    '[data-js="bookmark-section"]',
  );

  cards.forEach((card, index) => {
    if (card.bookmarked) {
      const questionCard = Card(card, index);
      cardContainerHome.append(questionCard);
    }
  });
}
