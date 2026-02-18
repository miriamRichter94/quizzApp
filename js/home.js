import { cards } from "./utils/utils.js";
import Card from "./Card.js";

export function loadMainCards() {
  const cardContainerHome = document.querySelector('[data-js="home-section"]');

  cards.forEach((card, index) => {
    const questionCard = Card(card, index);
    cardContainerHome.append(questionCard);
  });
}
