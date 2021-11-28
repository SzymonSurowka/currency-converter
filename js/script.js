{
    const calculateResult = (amount, currency) => {
        const eur = 4.63;
        const usd = 4.05;
        const gbp = 5.43;

        switch (currency) {
            case "EUR":
                return amount / eur;
            case "USD":
                return amount / usd;
            case "GBP":
                return amount / gbp;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +plnElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}