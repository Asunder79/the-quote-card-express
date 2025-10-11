"use strict"

// const elements={
// quote: documentGetElementById("quote"),
// quote: documentGetElementById("author"),
// };

// same thing as above, both used in different contexts.
// const quoteElement = document.getElementById("quote");
// const authorElement = document.getElementById("author");

// const quotes = [
//     {
//         quote: "All hands! Abandon ship!",
//         author: "Captain Picard",
//     },

//     {
//         quote: "Doh!",
//         author: "Homer Simpson",
//     },

//     {
//         quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
//         author: "Eric Schmidt",
//     }
// ]

// function loopThroughQuotes() {
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length) {
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         } else {
//             quoteIndex = 0;
//         }
//     }, 3000);
// }
// setTimeout(loopThroughQuotes, 3000);


// async function getRandomImage() {
//     const client_id = "3tYpSP9cWrqYVEa0RsVdQFAYAsGT_G1byNvpGgw8Qnw";
//     const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json()
//         console.log(returnedData)
//     } catch (error) {
//         console.error(error)
//     }
// }

async function getRandomImage() {
    const client_id = "YOUR_API_KEY_HERE";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();