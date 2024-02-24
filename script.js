// import the api key from config.js here

import {MY_API_KEY} from './config.js'

// copy this from the apininjas website and make necessary changes

const url = 'https://api.api-ninjas.com/v1/quotes';
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': MY_API_KEY	}    
};

// html elements
const quoteText = document.getElementById('quote-text')
const author = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')

async function fetchRandomQuote(){
    await fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const quoteObj = data[0]
            quoteText.textContent = quoteObj.quote
            author.textContent = quoteObj.author
        })
        .catch(err => console.log(err))
}

// window.onload = () => {
//     fetchRandomQuote()
// }

fetchRandomQuote()

generateBtn.addEventListener('click', fetchRandomQuote)