// profile.js
export function initProfile() {
  const darkMode = document.querySelector('[data-js="darkmode"]');
  
  if (darkMode) {  // Safety check
    darkMode.addEventListener("input", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
}