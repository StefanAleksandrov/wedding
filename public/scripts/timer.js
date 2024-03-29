const WEDDING_DAY = '08 Jul 2023, 16:00:00';

const weddingDate = new Date(WEDDING_DAY).getTime();
const containerElement = document.querySelector('#program .timer');
const today = new Date().getTime();
let distance = today - weddingDate;

const interval = setInterval(() => {
    const days = Math.floor(distance / (1_000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((distance % (1_000 * 60 * 60 * 24)) / (1_000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1_000 * 60 * 60)) / (1_000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1_000 * 60)) / 1_000).toString().padStart(2, '0');
    distance += 1_000;

    containerElement.innerHTML = `
        <span class="days">${days}</span>
        :
        <span class="hours">${hours}</span>
        :
        <span class="minutes">${minutes}</span>
        :
        <span class="seconds">${seconds}</span>
    `;
}, 1000);
