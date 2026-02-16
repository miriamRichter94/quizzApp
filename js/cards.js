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

const mainContainer = document.querySelector('[data-js="card-container"]');

export function loadCards(route) {
  let cardIndex = 0;

  for (const card of cards) {
    if (route == "home" || (route == "bookmarks" && card.bookmarked)) {
      const section = document.createElement("section");
      section.classList.add("quizzCard", "flex-container");
      section.dataset.index = cardIndex;

      const bookMarkButton = document.createElement("button");
      bookMarkButton.setAttribute("data-js", `bookMarkButton`);
      bookMarkButton.classList.add("bookMark");
      bookMarkButton.style.backgroundColor = "transparent";
      bookMarkButton.style.border = "none";

      const bookMarkImg = document.createElement("img");
      bookMarkImg.src = imgSrc[card.bookmarked];
      bookMarkImg.setAttribute("data-js", "bookMarkImg");
      bookMarkButton.append(bookMarkImg);

      const cardQuestion = document.createElement("div");
      cardQuestion.classList.add("cardQuestion");
      cardQuestion.textContent = card.question;

      const cardAnswer = document.createElement("div");
      cardAnswer.classList.add("cardAnswer");
      cardAnswer.setAttribute("hidden", "");
      cardAnswer.setAttribute("data-js", "cardAnswer");
      cardAnswer.textContent = card.answer;

      const answerButton = document.createElement("button");
      answerButton.classList.add("answer-button");
      answerButton.setAttribute("data-js", "answerButton");
      answerButton.textContent = "Show answer";

      const tagsBox = document.createElement("div");
      tagsBox.classList.add("tags-container", "flex-container");

      mainContainer.append(section);
      section.append(
        bookMarkButton,
        cardQuestion,
        cardAnswer,
        answerButton,
        tagsBox,
      );

      for (const tag of card.tags) {
        const tagElement = document.createElement("p");
        tagElement.classList.add("tag-box");
        tagElement.textContent = tag;
        tagsBox.append(tagElement);
      }
    }
    cardIndex++;
  }
}

mainContainer.addEventListener("click", (event) => {
  // Bookmark functionallity.
  const bookMarkButton = event.target.closest('[data-js="bookMarkButton"]');

  if (bookMarkButton) {
    // Find THIS button's parent card
    const card = bookMarkButton.closest(".quizzCard"); // ← This finds the specific card!
    const index = card.dataset.index;

    cards[index].bookmarked = !cards[index].bookmarked;

    // Changing the Bookmark button Image
    const img = bookMarkButton.querySelector('[data-js="bookMarkImg"]');
    img.src = imgSrc[cards[index].bookmarked];
  }

  // Toggle answer functionality
  const answerButton = event.target.closest('[data-js="answerButton"]'); // ← One data-js!

  if (answerButton) {
    const card = answerButton.closest(".quizzCard");
    const answer = card.querySelector('[data-js="cardAnswer"]');

    // Check if answer is currently hidden
    if (answer.hasAttribute("hidden")) {
      answer.removeAttribute("hidden");
      answerButton.textContent = "Hide answer";
    } else {
      answer.setAttribute("hidden", "");
      answerButton.textContent = "Show answer";
    }
  }
});
