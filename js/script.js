let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let eur = 4.63;
let usd = 4.05;
let gbp = 5.43;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currencyElement.value) {
        case "EUR":
            result = plnElement.value / eur;
            break;
        case "USD":
            result = plnElement.value / usd;
            break;
        case "GBP":
            result = plnElement.value / gbp;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currencyElement.value}`;
});


