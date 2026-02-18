import { cards } from "./utils/utils.js";
import BookmarkButton from "./BookmarkButton.js";
import AnswerButton from "./AnswerButton.js";

export default function Card(card, cardIndex) {
  const article = document.createElement("article");
  article.classList.add("quizzCard", "flex-container");
  article.dataset.index = cardIndex;

  const bookMarkButton = BookmarkButton(card);

  const cardQuestion = document.createElement("div");
  cardQuestion.classList.add("cardQuestion");
  cardQuestion.textContent = card.question;

  const cardAnswer = document.createElement("div");
  cardAnswer.classList.add("cardAnswer");
  cardAnswer.setAttribute("hidden", "");
  cardAnswer.setAttribute("data-js", "cardAnswer");
  cardAnswer.textContent = card.answer;

  const answerButton = AnswerButton();

  const tagsBox = document.createElement("div");
  tagsBox.classList.add("tags-container", "flex-container");
  for (const tag of card.tags) {
    const tagElement = document.createElement("p");
    tagElement.classList.add("tag-box");
    tagElement.textContent = tag;
    tagsBox.append(tagElement);
  }

  article.append(
    bookMarkButton,
    cardQuestion,
    cardAnswer,
    answerButton,
    tagsBox,
  );

  return article;
}
