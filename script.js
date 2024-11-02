let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    // for generate random nums between 0 to 3 we can simply use math.random() & use floor for int value
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Win.");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You Lose.");
        compScore++;                          
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //generate comp choice -> modular
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if (userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // stone, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { 
            // stone, paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});