let boxes = document.querySelectorAll("#box");
let newGameBtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let currentPlayer = true; // true for X, false for O
let count = 0;

// Winning pattern index for eachbox
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (currentPlayer) {
            box.innerText = "X";
            currentPlayer = false;           
        }
        else {
            box.innerText = "O";
            currentPlayer = true;         
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            msg.innerText = "Your Game was Draw!";
            msg.style.color = "#ff0000";
            disableBoxes();
        }
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;

        if (pattern1 != "" && pattern2 != "" && pattern3 != "") {
            if (pattern1 === pattern2 && pattern2 === pattern3) {
                msg.innerText = `Congratulations, ${pattern1} is the Winner!`;
                msg.style.color = "#00bb00";
                disableBoxes();
            }
        }
    }
}

newGameBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msg.style.color = "#e0e1dd";
});