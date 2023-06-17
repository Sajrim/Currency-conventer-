{
    const calculateRate = (currencyChange) => {
        const plnToEur = 0.2153;
        const plnToUsd = 0.2294;
        const plnToRub = 15.7275;
        const usdToEur = 0.9383;
        const eurToRub = 68.6558;
        const usdToRub = 73.0653;

        switch (currencyChange) {
            case "PLN/EUR":
                return plnToEur;
            case "PLN/USD":
                return plnToUsd;
            case "PLN/RUB":
                return plnToRub;
            case "EUR/PLN":
                return 1 / plnToEur;
            case "EUR/USD":
                return 1 / usdToEur;
            case "EUR/RUB":
                return eurToRub;
            case "USD/EUR":
                return usdToEur;
            case "USD/PLN":
                return 1 / plnToUsd;
            case "USD/RUB":
                return usdToRub;
            case "RUB/EUR":
                return 1 / eurToRub;
            case "RUB/PLN":
                return 1 / plnToRub;
            case "RUB/USD":
                return 1 / eurToRub;
            default:
                return 1;
        }
    }

    const upDateResultText = (result, secondCurrency, amountElement, firstCurrency) => {
        const resultElement = document.querySelector(".js-result");
        const indexElement = document.querySelector(".js-index");

        indexElement.innerText = `${parseFloat(amountElement.value)} ${firstCurrency.value} = `;
        resultElement.innerText = `${result.toFixed(2)} ${secondCurrency.value}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const firstCurrency = document.querySelector(".js-firstCurrency");
        const secondCurrency = document.querySelector(".js-secondCurrency");
        const amountElement = document.querySelector(".js-amount");

        const currencyChange = `${firstCurrency.value}/${secondCurrency.value}`;
        const result = parseFloat(amountElement.value) * parseFloat(calculateRate(currencyChange));

        upDateResultText(result, secondCurrency, amountElement, firstCurrency)
    }


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}