let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let newQuote = document.querySelector("#new-quote");

const api_url = ("https://type.fit/api/quotes");

async function getQuote(url){
    try {
        const response = await fetch(url);
        let data = await response.json();
        let randomQuote = data[Math.floor(Math.random() * data.length)];
        quote.innerHTML = `"${randomQuote.text}"`;
        author.innerHTML = `- ${randomQuote.author || "Unknown"}`;
    } catch (error) {
        console.error("Error occurred fetching data: " + error);
    }
}

newQuote.addEventListener("click", () => getQuote(api_url));

getQuote(api_url)