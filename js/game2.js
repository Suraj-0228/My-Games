const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#computer-score");

let userScore = 0;
let compScore = 0;

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const showWinner = (userWins, userChoice, compChoice) => {
    if (userWins) {
        userScore++;
        userScores.innerHTML = userScore;
        msg.innerHTML = `You are Winner. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScores.innerHTML = compScore;
        msg.innerHTML = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Draw Game
const drawGame = () => {
    msg.innerHTML = "Your Game was Draw!!!"
    msg.style.backgroundColor = "#1b263b";
}

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();

    // Draw Game
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWins = true;
        if (userChoice === "rock") {
            // compChoice = "scissors", "paper"
            userWins = compChoice === "paper" ? false : true;
        } else if (userChoice === "Paper") {
            // compChoice = "scissors", "rock"
            userWins = compChoice === "scissors" ? false : true;
        } else {
            // compChoice = "paper", "rock"
            userWins = compChoice === "rock" ? false : true;
        }
        showWinner(userWins, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})