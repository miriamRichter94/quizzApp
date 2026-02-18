import { initProfile } from "../profile.js";
import { initQuestion } from "../question.js";

/*
 * Configuration of routes for easy access to change the pages
 * Works as lookup table.
 */
export const routes = {
  home: {
    title: "Home",
    page: "pages/home.html",
    linkImg: "assets/menu/home_active.png",
  },
  bookmarks: {
    title: "Bookmarks",
    page: "pages/bookmark.html",
    linkImg: "assets/menu/bookmark_active.png",
  },
  question: {
    title: "Create Question",
    page: "pages/question.html",
    linkImg: "assets/menu/question_active.png",
    init: initQuestion,
  },
  profile: {
    title: "Profile",
    page: "pages/profile.html",
    linkImg: "assets/menu/user_active.png",
    init: initProfile,
  },
};

// All the information for the single question Cards
export let cards = [
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
