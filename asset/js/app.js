//Example of a simple fetching
// function calculate() {
//     fetch('item.json')
//         .then(output => output.json())
//         .then(data => {
//             document.body.innerHTML = data[0].text;
//         }).catch(err => console.error(err))
// }
// console.log(calculate())


const currencyElement_One = document.getElementById('currency-one')
const currencyElement_Two = document.getElementById('currency-two')

const amountElement_One = document.getElementById('amount-one')
const amountElement_Two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

////! FETCH EXCHANGE RATE AND UPDATE THE DOM
function calculate() {
    const currency_one = currencyElement_One.value
    const currency_two = currencyElement_Two.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(response => response.json())
        .then(data => {

            const rate = data.rates[currency_two];

            rateEl.innerHTML = `${amountElement_One.value} ${currency_one} = ${rate} ${currency_two}`;
            amountElement_Two.value = (amountElement_One.value * rate).toFixed(2);
        })
}

////! Event Listeners
currencyElement_One.addEventListener('change', calculate)
amountElement_One.addEventListener('input', calculate)
currencyElement_Two.addEventListener('change', calculate)
amountElement_Two.addEventListener('input', calculate)


////! Swapping Elements 
swap.addEventListener('click', () => {
    const temp = currencyElement_One.value;

    currencyElement_One.value = currencyElement_Two.value;
    currencyElement_Two.value = temp;

    calculate()
})
calculate()
