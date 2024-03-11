const button = document.querySelector("button");
const list = document.querySelector("ul");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const defaultQuote = "When I let go of what I am, I become what I might be.";
const defaultAuthor = "Mama";
let randomQuote;
let randomAuthor;

quote.textContent = defaultQuote;
author.textContent = defaultAuthor;

async function loadQuote() {
  const response = await fetch("https://dummy-apis.netlify.app/api/quote");
  if (response.ok) {
    const data = await response.json();
    randomQuote = data.quote;
    randomAuthor = data.author;
  }
}

function changeQuote() {
  quote.textContent = defaultQuote;
  author.textContent = defaultAuthor;
  loadQuote();

  quote.textContent = randomQuote;
  author.textContent = randomAuthor;
}

button.addEventListener("click", changeQuote);

loadQuote();
