const woodButton = document.getElementById('wood-button');
const stoneButton = document.getElementById('stone-button');
const vaultButton = document.getElementById('vault-button');


const woodImg = document.getElementById('wood-img');
const stoneImg = document.getElementById('stone-img');
const vaultImg = document.getElementById('vault-img');
const hidingSpots = [woodImg, stoneImg, vaultImg];
const fateEl = document.getElementById('fate');


let adoptions = 0;
let discards = 0;
let total = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * 3);

    return arr[index];
}

function resetImages() {
    woodImg.src = './assets/wood-door.jpg';
    stoneImg.src = './assets/wood-door.jpg';
    vaultImg.src = './assets/vault-door.jpg';
}

woodButton.addEventListener('click', () => {
    
    const answer = getRandomItem(hidingSpots);

    handleGuess(answer, 'wood-img');
});

stoneButton.addEventListener('click', () => {

    const answer = getRandomItem(hidingSpots);
    
    handleGuess(answer, 'stone-img');
});

vaultButton.addEventListener('click', () => {

    const answer = getRandomItem(hidingSpots);
    
    handleGuess(answer, 'vault-img');
});



function handleGuess(correctSpot, userGuess) {

    resetImages();

    total++;

    correctSpot.src = './assets/baby-dragon.jpg';

    if (correctSpot.id === userGuess) {
        adoptions++;
    } else {
        discards++;
    }
    
    fateEl.textContent = `You've adopted ${adoptions} baby dragon(s), discarded ${discards} baby dragons, and handled the fate of ${total} dragon(s). You monster. Try again?`;
    
}
