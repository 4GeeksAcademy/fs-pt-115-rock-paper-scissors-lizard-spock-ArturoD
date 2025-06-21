
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
        console.log("Es un empate");
        
    }else if ((userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard"))) {
    console.log("you win");
    }else if ((userChoice === "paper" && (computerChoice ==="rock" || computerChoice === "spock"))) {
        console.log("you win");
        
    }else if ((userChoice === "scissors" && (computerChoice ==="paper" || computerChoice === "lizard"))) {
        console.log("you win");
        
    }else if ((userChoice === "lizard" && (computerChoice ==="paper" || computerChoice === "spock"))) {
        console.log("you win");
        
    }else if ((userChoice === "spock" && (computerChoice ==="scissors" || computerChoice === "rock"))) {
        console.log("you win");
        
    }
else {
    console.log("has perdido intentalo de nuevo");
    
}



}
playGame(userChoice, getRandomOption());