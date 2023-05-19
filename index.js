const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");

const btnEl = document.querySelector(".btn");

const url = "https://api.quotable.io/random";
async function getQuote() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const quoteContent = result.content;
    const authorName = result.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ "+ authorName;

  } catch (err) {
    quoteEl.innerText = "Error occured try again!";
    authorEl.innerText = "";
  }
}

btnEl.addEventListener("click", getQuote);
