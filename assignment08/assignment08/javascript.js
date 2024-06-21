let images = [];
for (let i = 1; i <= 34; i++) {
    images.push(`product-images/bike-${i}.jpg`);
}

let currentIndex = 0;
let interval;
const productImage = document.getElementById('product-image');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

let popupTimeout;

startButton.addEventListener('click', startRotation);
stopButton.addEventListener('click', stopRotation);
closePopupButton.addEventListener('click', () => {
    popup.classList.remove('show');
    clearTimeout(popupTimeout);
});

function startRotation() {
    if (!interval) {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            productImage.src = images[currentIndex];
        }, 100);
    }
    popup.classList.remove('show');
    clearTimeout(popupTimeout);
}

function stopRotation() {
    clearInterval(interval);
    interval = null;
}

popupTimeout = setTimeout(() => {
    if (!interval) {
        popup.classList.add('show');
    }
}, 3000);
