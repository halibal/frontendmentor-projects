// DOM Starts
const rangeSlider = document.getElementById('rangeSlider');
const priceDesktop = document.querySelector('.priceDesktop');
const priceMobile = document.querySelector('.priceMobile');
const pageView = document.querySelector('.pageView');
const toggleSubscription = document.getElementById('toggleSubscription');
// DOM Ends

// price variables start
let ten = 8.00
let fifty = 12.00
let hundred = 16.00
let fhundred = 24.00
let million = 36.00
// price variables end

const priceTags = [priceDesktop, priceMobile] // created for two different versions (desktop and mobile) of price texts

rangeSlider.addEventListener('input', updateValue);

toggleSubscription.addEventListener('click', updateValue);

function updateValue() {

    // if the toggle checked, meaning its 'true' for yearly billing
    if (toggleSubscription.checked) {
        if (rangeSlider.value == 0) {
            pageView.innerHTML = `10K PAGEVIEWS`;
            priceTags.forEach((price) => {
                return price.innerHTML = `$${(ten - (ten / 4)).toFixed(2)} <span>/ month</span>`
            });
            changeColor();
        }
        else if (rangeSlider.value == 1) {
            pageView.innerHTML = `50K PAGEVIEWS`
            priceTags.forEach((price) => {
                return price.innerHTML = `$${(fifty - (fifty / 4)).toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
        else if (rangeSlider.value == 2) {
            pageView.innerHTML = `100K PAGEVIEWS`;
            priceTags.forEach((price) => {
                price.innerHTML = `$${(hundred - (hundred / 4)).toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
        else if (rangeSlider.value == 3) {
            pageView.innerHTML = `500K PAGEVIEWS`;
            priceTags.forEach((price) => {
                return price.innerHTML = `$${(fhundred - (fhundred / 4)).toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
        else {
            pageView.innerHTML = `1M PAGEVIEWS`;
            priceTags.forEach((price) => {
                return price.innerHTML = `$${(million - (million / 4)).toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
    }

    // if the toggle unchecked, meaning its 'false' for yearly billing (in other words, true for monthly billing)
    else {
        if (rangeSlider.value == 0) {
            pageView.innerHTML = `10K PAGEVIEWS`
            priceTags.forEach((price) => {
                return price.innerHTML = `$${ten.toFixed(2)} <span>/ month</span>`
            });
            changeColor();
        }
        else if (rangeSlider.value == 1) {
            pageView.innerHTML = `50K PAGEVIEWS`;
            priceTags.forEach((price) => {
                return price.innerHTML = `$${fifty.toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
        else if (rangeSlider.value == 2) {
            pageView.innerHTML = `100K PAGEVIEWS`
            priceTags.forEach((price) => {
                price.innerHTML = `$${hundred.toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
        else if (rangeSlider.value == 3) {
            pageView.innerHTML = `500K PAGEVIEWS`
            priceTags.forEach((price) => {
                return price.innerHTML = `$${fhundred.toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
        else {
            pageView.innerHTML = `1M PAGEVIEWS`
            priceTags.forEach((price) => {
                return price.innerHTML = `$${million.toFixed(2)} <span>/ month</span>`;
            });
            changeColor();
        }
    }
}


// function for default slider track color before the thumb
function changeColor() {
    var value = (rangeSlider.value - rangeSlider.min) / (rangeSlider.max - rangeSlider.min) * 100
    rangeSlider.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, hsl(224, 65%, 95%) 100%)'
};
changeColor();