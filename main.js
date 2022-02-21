
// Number clicks: 
function whatNumberYouClicked() {
    // window.addEventListener('load', () => {
        let buttonSet = document.querySelectorAll('.btn');
        // console.log(buttonSet);
        buttonSet.forEach((uniqueButton) => {
            // console.log("Hello button!");
            uniqueButton.addEventListener('click', (e) => {
                // console.log(e, "EVENT");
                buttonNumber = uniqueButton.innerHTML;
                let greeting = `You clicked button ${buttonNumber}!`;
                if (buttonNumber > 1) {
                    alert(greeting);
                }
            });
        });
    // });
}
whatNumberYouClicked();







//Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
// Using if...else but better to use  switch case statement
const giftSelect = document.getElementById('gift-select');
const message = document.getElementById('gift-message');
giftSelect.addEventListener('change', giftMessage)
function giftMessage() {
    const choice = giftSelect.value;

    if (choice === 'socks') {
        message.textContent = 'Great choice for keeping your feet warm.'
    }
    else if (choice === 'mug'){
        message.textContent = 'Wonderful. Put coffee or tea inside it.';
    }
    else if (choice === 'tesla'){
        message.textContent = 'Nice. Somebody loves you.';
    }
    else if (choice === 'candy'){
        message.textContent = 'Better be chocolate.';
    }
    else {
        message.textContent = '';
    }
}

// Using switch statement
function animalReactionAlert() {
    let animalButtonSet = document.querySelectorAll('.btn');
    console.log(animalButtonSet)
    animalButtonSet.forEach((uniqueButton) => {
        uniqueButton.addEventListener('click', (e) => {
            console.log(e)
            // TO DO: Make different alert on different buttons
            const buttonContent = uniqueButton.innerHTML;
            console.log(buttonContent);
            switch (buttonContent) {
                case 'Caterpillar':
                alert(`Too many legs!`);
                break;
                case 'Spider':
                alert(`Aren't they poisonous?`);
                break;
                case 'Grasshopper':
                alert(`Great! Add some salt!`);
                break;                
            }

        });
    });
}
animalReactionAlert();



function displayMessage(e) {
    const form = document.getElementById('fizz-buzz-form');
    // console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageArea = document.getElementById('number-return-area');
        const fizzBuzzArea = document.getElementById('fizz-buzz-area');
        // console.log(messageArea, "MESSAGE HERE");
        // messageArea.textContent = "Howdy"
        const userNumber = document.getElementById('user-number').value;
        // console.log(userNumber);
        messageArea.textContent = `Here is your number: ${userNumber}`;
        // Note: The FIZZBUZZ needs to come before the other conditions. Think like a program. 
        if (userNumber % 3 === 0 && userNumber % 5 === 0) {
            fizzBuzzArea.textContent = "FIZZ BUZZ! Your number is di-VIZZ-able by both 3 and 5!"
        }
        else if (userNumber % 5 === 0) {
            fizzBuzzArea.textContent = "BUZZ! Your number is di-VIZZ-able by 5!"
        }
        else if (userNumber % 3 === 0) {
            fizzBuzzArea.textContent = "FIZZ! Your number is di-VIZZ-able by 3!"
        }
        else {
            fizzBuzzArea.textContent = "No fizzy buzzy. Try again!"
        }
    });
};

displayMessage();











    // human clicks one of three cards (one click only)
    // computer choice is generated at the same time (right after)
    // switch case statement to evaluate 9 possibilities, determine winner
    // alert winner of match and add score to scoreboard
    // after five plays, game winner is declared (first player to get three points)
    // human can choose to play again after winner is declared


playRockPaperScissors();

function playRockPaperScissors() {

let computerScore = 0;
let humanScore = 0;

const humanCards = document.querySelectorAll('.rps-card');
// console.log(humanCards);

humanCards.forEach((card) => {
    // console.log(card)

    card.addEventListener('click', (e) => {
        // console.log(e)
        let humanChoice = card.id
        console.log(humanChoice, '<-- this is the human choice')

        const choices = ['rock', 'paper', 'scissors'];
        // Interesting that I still need to use Math.floor on a string.
        let computerChoice = choices[Math.floor(Math.random() * choices.length)]
        console.log(computerChoice, '<-- this is the computer choice');

        // TO DO: Display correct picture for computer choice. Can create function.
        // let computerCard = document.getElementById('computer-choice-message');
        let computerCardImage = document.getElementById('computer-choice-image');

        // console.log(computerCard, "COMPUTER CARD");
        // console.log(computerCardImage, "COMPUTER CARD IMAGE");

        setTimeout(() => {
            // computerCard.innerText=`The computer chose ${computerChoice}.`
            computerCardImage.innerHTML = `<image src="images/${computerChoice}.png"></image>`
        }, 100);
       


        // TO DO: Need a while loop here? While computer and human score less than five...

            let result = "";
            // NOTE: I couldn't define the variable in the if/else statement. I got  Uncaught ReferenceError: $ is not defined error, so defined it above and assigned below.

                if (computerChoice === 'rock' && humanChoice === 'rock') {
                    result = 'Tie';
                    // humanScore = humanScore + 0
                }
                else if (computerChoice === 'rock' && humanChoice === 'paper') {
                    result = 'Human';
                    humanScore = humanScore + 1
                }
                else if (computerChoice === 'rock' && humanChoice === 'scissors') {
                    result = 'Computer';
                    computerScore = computerScore + 1
                }

                else if (computerChoice === 'paper' && humanChoice === 'paper') {
                    result = 'Tie';
                    // humanScore = humanScore + 0
                }
                else if (computerChoice === 'paper' && humanChoice === 'rock') {
                    result = 'Computer';
                    computerScore = computerScore + 1
                }
                else if (computerChoice === 'paper' && humanChoice === 'scissors') {
                    result = 'Human';
                    humanScore = humanScore + 1
                }

                else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
                    result = 'Tie';
                    // humanScore = humanScore + 0
                }
                else if (computerChoice === 'scissors' && humanChoice === 'rock') {
                    result = 'Human';
                    humanScore = humanScore + 1
                }
                else if (computerChoice === 'scissors' && humanChoice === 'paper') {
                    result = 'Computer';
                    computerScore = computerScore + 1
                }
                else {
                    result = 'Unknown winner';
                }
                



                console.log(result, "<--- result");
                console.log(computerScore, "<--- computer score here");
                console.log(humanScore, "<--- human score here");
                


                const displayComputerScore = document.getElementById('computer-score');
                console.log(displayComputerScore);
                displayComputerScore.innerHTML = `<p>${computerScore}</p>`

                const displayHumanScore = document.getElementById('human-score');
                console.log(displayHumanScore);
                displayHumanScore.innerHTML = `<p>${humanScore}</p>`



        setTimeout(() => {
            let alert = document.getElementById('rps-alert');
            alert.innerText = `You chose ${humanChoice}. The computer chose ${computerChoice}. Winner is: ${result}!`
        }, 500)


    });
});
}







// function addRow(tableID) {
//     let table = document.getElementById(tableID);
//     // Insert new row
//     let newRow = table.insertRow(-1);
//     let newCell = table.insertCell(0);
// }




// pass to HTML
function insertScore(computer, human) {

}













function addScore(computerScore, humanScore) {
    // adds table with scores
}