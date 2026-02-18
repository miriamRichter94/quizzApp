export default function AnswerButton() {
  const answerButton = document.createElement("button");
  answerButton.classList.add("answer-button");
  answerButton.setAttribute("data-js", "answerButton");
  answerButton.textContent = "Show answer";

  answerButton.addEventListener("click", () => {
    const card = answerButton.parentElement;
    const answer = card.querySelector('[data-js="cardAnswer"]');

    answer.toggleAttribute("hidden");
    answerButton.textContent = answer.hasAttribute("hidden")
      ? "Show answer"
      : "Hide answer";
  });

  return answerButton;
}
