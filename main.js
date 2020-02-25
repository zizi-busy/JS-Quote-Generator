const button = document.querySelector('#generate-btn')
const author = document.querySelector ('.quote-author')

button.addEventListener ('click' , generateQuote = () => {

    let random = Math.floor(Math.random() * quotes.length);
    console.log(random)

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
   
})



