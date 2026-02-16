// profile.js
export function initQuestion() {
  const questionForm = document.querySelector('[data-js="question-form"]');

  questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
