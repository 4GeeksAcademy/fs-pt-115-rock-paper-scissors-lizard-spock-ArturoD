
const options = [`rock`, `paper`, `scissors`, `lizard`, `spock`]
let userChoice = prompt("ELIGUE TU OPCION: , rock, paper, scissors, lizard, spock").toLowerCase();

const getRandomOption = () => {
    const index = Math.floor(Math.random() * options.length)
    return options[index]
}

const resultUserChoice = (userChoice) => {
    const computerChoice = getRandomOption();
    console.log(`el usuario elige ${userChoice}`);
    console.log(`el sistema elige ${computerChoice}`);

}

const playGame = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return console.log("Es un empate");
    }
    if ((userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard"))) {
        return console.log("you win");
    }
    if ((userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock"))) {
        return console.log("you win");
    }
    if ((userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard"))) {
        return console.log("you win");
    }
    if ((userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock"))) {
        return console.log("you win");
    }
    if ((userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))) {
        return console.log("you win");
    }
    console.log("has perdido intentalo de nuevo");
}
playGame(userChoice, getRandomOption());