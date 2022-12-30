let resultElement = document.querySelector(".js-result");
let indexElement = document.querySelector(".js-index");
let formElement = document.querySelector(".js-form");
let firstCurrency = document.querySelector(".js-firstCurrency");
let secondCurrency = document.querySelector(".js-secondCurrency");
let amountElement = document.querySelector(".js-amount");

const plnToEur = 0.2153;
const plnToUsd = 0.2294;
const plnToRub = 15.7275;
const usdToEur = 0.9383;
const eurToRub = 68.6558;
const usdToRub = 73.0653;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    indexElement.innerText = parseFloat(amountElement.value) + " " + firstCurrency.value + " = ";

    let currencyChange = `${firstCurrency.value}/${secondCurrency.value}`;
    switch (currencyChange) {
        case "PLN/EUR":
            exchangeRate = plnToEur;
            break;
        case "PLN/USD":
            exchangeRate = plnToUsd;
            break;
        case "PLN/RUB":
            exchangeRate = plnToRub;
            break;
        case "EUR/PLN":
            exchangeRate = 1 / plnToEur;
            break;
        case "EUR/USD":
            exchangeRate = 1 / usdToEur;
            break;
        case "EUR/RUB":
            exchangeRate = eurToRub;
            break;
        case "USD/EUR":
            exchangeRate = usdToEur;
            break;
        case "USD/PLN":
            exchangeRate = 1 / plnToUsd;
            break;
        case "USD/RUB":
            exchangeRate = eurToRub;
            break;
        case "RUB/EUR":
            exchangeRate = 1 / eurToRub;
            break;
        case "RUB/PLN":
            exchangeRate = 1 / plnToRub;
            break;
        case "RUB/USD":
            exchangeRate = 1 / eurToRub;
            break;
        default:
            exchangeRate = 1;
    }
    let exchange = parseFloat(exchangeRate);
    let amount = parseFloat(amountElement.value);
    let result = amount * exchange;

    resultElement.innerText = result.toFixed(2) + " " + secondCurrency.value;
});