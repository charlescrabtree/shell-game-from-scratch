const woodButton = document.getElementById('wood-button');
const stoneButton = document.getElementById('stone-button');
const vaultButton = document.getElementById('vault-button');
// const adoptionsEl = document.getElementById('adoptions');
// const discardsEl = document.getElementById('discards');
// const totalEl = document.getElementById('total');
const hidingSpots = ['wood-door', 'stone-door', 'vault-door'];
const woodImg = document.getElementById('wood-img');
const stoneImg = document.getElementById('stone-img');
const vaultImg = document.getElementById('vault-img');
const fateEl = document.getElementById('fate');


let adoptions = 0;
let discards = 0;
let total = 0;

function resetImages() {
    woodImg.src = './assets/wood-door.jpg';
    stoneImg.src = './assets/wood-door.jpg';
    vaultImg.src = './assets/vault-door.jpg';
}

// function displayAdoptsDiscAndTot() {
//     adoptionsEl.textContent = adoptions;
//     discardsEl.textContent = total - adoptions;
//     totalEl.textContent = total;

// }

woodButton.addEventListener('click', () => {
    resetImages();
    total++;
    handleGuess(0);
    // const hidingSpot = Math.floor(Math.random() * 3);
    // const answer = hidingSpots[hidingSpot];
    // handleGuess(answer, 'wood-door');
});

stoneButton.addEventListener('click', () => {
    resetImages();
    total++;
    handleGuess(2);
    // const hidingSpot = Math.floor(Math.random() * 3);
    // const answer = hidingSpots[hidingSpot];
    // handleGuess(answer, 'stone-door');
});

vaultButton.addEventListener('click', () => {
    resetImages();
    total++;
    handleGuess(1);
    // const hidingSpot = Math.floor(Math.random() * 3);
    // const answer = hidingSpots[hidingSpot];
    // handleGuess(answer, 'vault-door');
});



function handleGuess(correctSpot, userGuess) {
    const randomIndex = Math.floor(Math.random() * hidingSpots.length);
    const randomDoorImg = hidingSpots[randomIndex];

    randomDoorImg.src = 'assets/baby-dragon.jpg';

    if (randomIndex === userGuess) {
        adoptions++;
    } else {
        discards++;
    }
    fateEl.textContent = `You've adopted ${adoptions} baby dragon(s), discarded ${discards} baby dragons, and handled the fate of ${total} dragon(s). You monster. Try again?`;
    
}
