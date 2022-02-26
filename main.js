
    // human clicks one of three cards (one click only)
    // computer choice is generated at the same time (right after)
    // switch case statement to evaluate 9 possibilities, determine winner
    // alert winner of match and add score to scoreboard
    // after five plays, game winner is declared (first player to get three points)
    // human can choose to play again after winner is declared


// playRockPaperScissors();

// function playRockPaperScissors() {

let computerScore = 0;
let humanScore = 0;

let alert = document.getElementById('rps-alert');
alert.innerText = `Click rock, paper, or scissors and the computer will respond!`;

const humanCards = document.querySelectorAll('.rps-card');

humanCards.forEach((card) => {
    card.addEventListener('click', (e) => {
        // while loop works, but game plays automatically...
      // while (humanScore < 5) {
        let humanChoice = card.id
        console.log(humanChoice, '<-- this is the human choice')
        // card.animate([{ opacity: 0 }, { opacity: 1 }], {
        //   duration: 300,
        //   fill: "forwards",
        //   iterations: 1,
        //   delay: 0,
        //   easing: "ease-out",
        // });

        const choices = ['rock', 'paper', 'scissors'];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)]
        console.log(computerChoice, '<-- this is the computer choice');
        let computerRock = document.getElementById('computer-rock');
        // console.log(computerRock);
        let computerPaper = document.getElementById('computer-paper');
        // console.log(computerPaper);
        let computerScissors = document.getElementById('computer-scissors');
        // console.log(computerScissors);

      // if (computerChoice = 'rock') {
      //   console.log(computerRock, "ROCK");
      // }
      // else if (computerChoice = 'paper') {
      //   console.log(computerPaper, "PAPER")
      // }
      // else if (computerChoice = 'scissors') {
      //   console.log(computerScissors, "SCISS")
      // }
      // else {
      //   console.log('error')
      // }


        // let computerCardImage = document.getElementById('computer-choice-image');
       // animations here

        // computerCardImage.animate([{ opacity: 0 }, { opacity: 1 }],{
        //   duration: 300,
        //   fill: "forwards",
        //   iterations: 1,
        //   delay: 0,
        //   easing: "ease-out",
        // });

        // setTimeout(() => {
            // computerCardImage.innerHTML = `<image src="images/${computerChoice}.png"></image>`
        // }, 100);

            let result = "";
            // NOTE: I couldn't define the variable in the if/else statement. I got  Uncaught ReferenceError: $ is not defined error, so defined it above and assigned below.
                if (computerChoice === 'rock' && humanChoice === 'rock') {
                    result = 'Tie';
                    // humanScore = humanScore + 0
                    computerScore = computerScore + 1;
                    showRock();
                }

                else if (computerChoice === 'rock' && humanChoice === 'paper') {
                    result = 'Human';
                    humanScore = humanScore + 1;
                  showRock();
                }

                else if (computerChoice === 'rock' && humanChoice === 'scissors') {
                    result = 'Computer';
                    computerScore = computerScore + 1;
                  showRock();
                }

                else if (computerChoice === 'paper' && humanChoice === 'paper') {
                    result = 'Tie';
                    // humanScore = humanScore + 0
                  showPaper();
                }
                else if (computerChoice === 'paper' && humanChoice === 'rock') {
                    result = 'Computer';
                    computerScore = computerScore + 1;
                  showPaper();
                }
                else if (computerChoice === 'paper' && humanChoice === 'scissors') {
                    result = 'Human';
                    humanScore = humanScore + 1;
                  showPaper();
                }
                else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
                    result = 'Tie';
                    // humanScore = humanScore + 0
                  showScissors();
                }
                else if (computerChoice === 'scissors' && humanChoice === 'rock') {
                    result = 'Human';
                    humanScore = humanScore + 1;
                  showScissors();
                }
                else if (computerChoice === 'scissors' && humanChoice === 'paper') {
                    result = 'Computer';
                    computerScore = computerScore + 1;
                  showScissors();
                }
                else {
                    result = 'Unknown winner';
                }


                console.log(result, "<--- result");
                console.log(computerScore, "<--- computer score here");
                console.log(humanScore, "<--- human score here");

                const displayComputerScore = document.getElementById('computer-score');
                // console.log(displayComputerScore);
                displayComputerScore.innerHTML = `<p>${computerScore}</p>`

                const displayHumanScore = document.getElementById('human-score');
                // console.log(displayHumanScore);
                displayHumanScore.innerHTML = `<p>${humanScore}</p>`




        alert.innerText = `Winner: ${result}!`


      alert.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500,
        });

      function showRock() {
        computerRock.classList.add('active');
        computerScissors.classList.remove('active');
        computerPaper.classList.remove('active');
      }


      function showPaper() {
        computerPaper.classList.add('active');
        computerScissors.classList.remove('active');
        computerRock.classList.remove('active');
      };

      function showScissors() {
        computerScissors.classList.add('active');
        computerPaper.classList.remove('active');
        computerRock.classList.remove('active');
      };

        // }  // ends while loop
      // } // ends while loop - but game plays automatically...
    });
});
// }






// pass to HTML
function insertScore(computer, human) {
}


function addScore(computerScore, humanScore) {
    // adds table with scores
}
