function ageInDays() {
    let birthyear = prompt("Your Birth Year");
    let ageInDayss = (2020 - birthyear) * 365;
    let h1 = document.createElement('h1'); // created h1 tag
    let textAnswer = document.createTextNode('You Are ' + ageInDayss + ' Days old'); // creating textnode for passing to h1 tag
    h1.setAttribute('id', 'ageInDays'); //setting id as ageInDays to h1 tag
    h1.appendChild(textAnswer); //passing created text node to h1 tag
    document.getElementById('flex-box-result').appendChild(h1); //passing created h1 tag to flex-box-result
}

function reset() {
    document.getElementById('ageInDays').remove(); //remove new created h1 tag
}

function generateCats() {
    let img = document.createElement('img');
    img.setAttribute('src', 'static/images/cat.jpg');
    img.setAttribute('height', '20%');
    img.setAttribute('width', '20%');
    document.getElementById('flex-box-container-2-id').appendChild(img);
}

// Challenge 3

function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randomRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(humanChoice, botChoice) {
    let rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    return rpsDatabase[humanChoice][botChoice];
}

function finalMessage(results) {
    if (results === 0) {
        return { 'message': 'you lost', 'color': 'red' };
    } else if (results === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won', 'color': 'green' };
    }
}

function rpsFrontEnd(humanChoice, botChoice, message) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //lets remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    messageDiv.innerHTML = "<h1 style='color:" + message['color'] + "; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 70, 70, 1)'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4


let all_buttons = document.getElementsByTagName('button');


let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function changeColor(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green') {
        buttonGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonReset();
    } else if (buttonThingy.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    let choices = ['btn-primary', 'btn-success', 'btn-danger'];
    for (let i = 0; i < all_buttons.length; i++) {
        randomNumber = Math.floor(Math.random() * 3);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}