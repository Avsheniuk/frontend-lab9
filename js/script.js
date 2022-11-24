let imageFolder = 'images/';
let cards = ['2.png', '3.png', '4.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png'];

let username = prompt('Username: ');

let computer = document.getElementById('computer');
let human = document.getElementById('human');
let computerPoints = 0;
let humanPoints = 0;

let button = document.getElementById('generate');
button.addEventListener('click', fight);

human.querySelector('.name').textContent = username;

function getRandomCard() {
    // Порертає випадковий елемент масиву cards
    return cards[Math.floor(Math.random() * cards.length)]; 
}

function fight() {
    let computerCard = getRandomCard();
    let humanCard = getRandomCard();
    let computerNum = parseInt(computerCard.split('.')[0]);//parseInt перетворює у рядок
    let humanNum = parseInt(humanCard.split('.')[0]);

    human.querySelector('.card').src = imageFolder + humanCard;
    computer.querySelector('.card').src = imageFolder + computerCard;

    if (computerNum > humanNum) {
        computerPoints++;
        computer.querySelector('.points').textContent = computerPoints.toString();
    }
    if (computerNum < humanNum) {
        humanPoints++;
        human.querySelector('.points').textContent = humanPoints.toString();
    }

    if (computerPoints === 3 || humanPoints === 3) {
        if (computerPoints === 3) alert('Computer won!');
        if (humanPoints === 3) alert(username + ' won!');
        button.removeEventListener('click', fight);
    }
}
