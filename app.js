function getComputerChoice(){
    let choice = Math.floor(Math.random()* 3);
    

    switch (choice) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return " Scissors"   
        default:
            return " Your number must bebetween 1 and 4"
    }
}

function playerSelection(){
    let choice = Math.floor(Math.random()* 3);
    choice.toUpperCase();

    switch (choice) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return " Scissors"   
        default:
            return " Your number must bebetween 1 and 4"
    }
}

function playRound(playerSelection, compterSelection){
    

}

console.log(getComputerChoice());