
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
        // while loop works, but game plays automatically
      // while (humanScore < 5) {

        let humanChoice = card.id
        console.log(humanChoice, '<-- this is the human choice')

        card.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: 0,
        });


        const choices = ['rock', 'paper', 'scissors'];
        // Interesting that I still need to use Math.floor on a string.
        let computerChoice = choices[Math.floor(Math.random() * choices.length)]
        console.log(computerChoice, '<-- this is the computer choice');

        // TO DO: Display correct picture for computer choice. Can create function.
        // let computerCard = document.getElementById('computer-choice-message');
        let computerCardImage = document.getElementById('computer-choice-image');
       // animations here

        computerCardImage.animate([{ opacity: 0 }, { opacity: 1 }],{
          duration: 300,
          fill: "forwards",
          iterations: 1,
          delay: 0,
          easing: "ease-out",
        });


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


            let alert = document.getElementById('rps-alert');
            if (computerScore = 0) {
              alert.innerText = `Ready to play?`;
            }
            else {
              alert.innerText = `You chose ${humanChoice}. The computer chose ${computerChoice}. Winner is: ${result}!`
            }



        // }  // ends while loop

      // } // ends while loop - but game plays automatically...

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
