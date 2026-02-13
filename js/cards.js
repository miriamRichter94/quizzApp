let cards = [
  {
    question: "What are the names of the Winchester brothers?",
    answer: "Sam and Dean",
    bookmarked: true,
    tags: ["Supernatural", "Family", "Winchesters"],
  },
  {
    question: "Who is Jack?",
    answer: "Son of Luzifer and Kelly",
    bookmarked: false,
    tags: ["Nephilim", "Family", "Devil"],
  },
  {
    question: "What creature is Ruby actually?",
    answer: "Deamon",
    bookmarked: false,
    tags: ["Supernatural", "Creature", "Hell"],
  },
  {
    question: "What is the name of the mother of Sam and Dean?",
    answer: "Mary",
    bookmarked: false,
    tags: ["Hunter", "Family", "Winchesters"],
  },
  {
    question: "Whos parent side of Dean and Sam was original a Hunter?",
    answer: "Mother side",
    bookmarked: false,
    tags: ["Hunter", "Family", "Winchesters"],
  },
  {
    question: "What car drives Dean Winchester",
    answer: "black 1967 Chevrolet Impala",
    bookmarked: false,
    tags: ["Car", "Dean", "Winchesters"],
  },
];

const imgSrc = {
  true: "assets/ribbonFilled.png",
  false: "assets/ribbonWhite.png",
};

export function loadCards(route) {
  const mainContainer = document.querySelector('[data-js="card-container"]');

  for (const card of cards) {
    if (route == "home" || (route == "bookmarks" && card.bookmarked)) {
      const section = document.createElement("section");
      section.classList.add("quizzCard", "flexContainer");

      const bookMarkImg = document.createElement("img");
      bookMarkImg.classList.add("bookMark");
      bookMarkImg.src = imgSrc[card.bookmarked];

      const cardQuestion = document.createElement("div");
      cardQuestion.classList.add("cardQuestion");
      cardQuestion.textContent = card.question;

      const cardAnswer = document.createElement("div");
      cardAnswer.classList.add("cardAnswer");
      cardAnswer.textContent = card.answer;

      const answerButton = document.createElement("button");
      answerButton.textContent = "Show answer";

      const tagsBox = document.createElement("div");
      tagsBox.classList.add("tagsBox", "flexContainer");

      mainContainer.append(section);
      section.append(
        bookMarkImg,
        cardQuestion,
        cardAnswer,
        answerButton,
        tagsBox,
      );

      for (const tag of card.tags) {
        const tagElement = document.createElement("p");
        tagElement.textContent = tag;
        tagsBox.append(tagElement);
      }
    }
  }
}
