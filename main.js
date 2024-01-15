function letsCelebrate(){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti();
}

const winner = document.querySelector(".result");
let score = 0;

// score
function updateScore(score){
    const scoreValue = document.querySelector(".score");
    scoreValue.innerText = score;
}

// images for player and computer
const playerOption = document.querySelector(".player-option");
const computerOption = document.querySelector(".computer-option");

// remove img
function removeImg(playerOption, computerOption) {
    if(document.querySelector(".player-option img")){
        const img1 = document.querySelector(".player-option img");
        const img2 = document.querySelector(".computer-option img");
    
        playerOption.removeChild(img1);
        computerOption.removeChild(img2);
    } 
}

function createRockImg(){
    const rockImg = document.createElement("img");
    rockImg.src = "images/rock 32.png";
    rockImg.alt = "player-option-rock";
    return rockImg;
}

function createPaperImg() {
    const paperImg = document.createElement("img");
    paperImg.src = "images/paper 128.png";
    paperImg.alt = "player-option-paper";
    return paperImg;
}

function createScissorImg() {
    const scissorImg = document.createElement("img");
    scissorImg.src = "images/scissors 128.png";
    scissorImg.alt = "player-option-scissors";
    return scissorImg;
}

function createLizardImg(){
    const lizardImg = document.createElement("img");
    lizardImg.src = "images/lizard 128.png";
    lizardImg.alt = "player-option-lizard";
    return lizardImg;
}

function createSpockImg(){
    const spockImg = document.createElement("img");
    spockImg.src = "images/spock 128.png";
    spockImg.alt = "player-option-spock";
    return spockImg;
}

// computer choice
function computerChoice(){
    let comp = Math.floor(Math.random()*5 + 1);

    if(comp === 1){
       return createRockImg();
        
    }else if(comp === 2){
        return createPaperImg();
        
    }else if(comp === 3){
        return createScissorImg();

    }else if(comp === 4){
        return createLizardImg();

    }else{
        return createSpockImg();
    }
}

// check win or lose
function gameResult(){
    const player = document.querySelector(".player-option img");
    const computerPlayer = document.querySelector(".computer-option img");

    // optimized code
    if(player.alt === computerPlayer.alt){
        winner.innerText = "Draw";
    }else if(
        (player.alt === "player-option-rock" && computerPlayer.alt === "player-option-scissors")||
        (player.alt === "player-option-paper" && computerPlayer.alt === "player-option-rock") ||
        (player.alt === "player-option-scissors" && computerPlayer.alt === "player-option-paper")||
        (player.alt === "player-option-rock" && computerPlayer.alt === "player-option-lizard")||
        (player.alt === "player-option-lizard" && computerPlayer.alt === "player-option-spock")||
        (player.alt === "player-option-spock" && computerPlayer.alt === "player-option-scissors")||
        (player.alt === "player-option-scissors" && computerPlayer.alt === "player-option-lizard")||
        (player.alt === "player-option-lizard" && computerPlayer.alt === "player-option-paper")||
        (player.alt === "player-option-paper" && computerPlayer.alt === "player-option-spock")||
        (player.alt === "player-option-spock" && computerPlayer.alt === "player-option-rock") 
    ){
        winner.innerText = "Player Won";
        score++;
        updateScore(score);
        if(score > 1){
            letsCelebrate();
            winner.innerText = "you won aginst computer";
        }
        
    }else{
        winner.innerText = "computer Won";
        score--;
        updateScore(score);
    }

    // unoptimized code
    // if(player.alt === "player-option-rock" && computerPlayer.alt === "player-option-paper"){
    //     winner.innerText = "computer Won";
    // }else if(player.alt === "player-option-rock" && computerPlayer.alt === "player-option-rock"){
    //     winner.innerText = "Draw";
    // }else if(player.alt === "player-option-rock" && computerPlayer.alt === "player-option-scissors"){
    //     winner.innerText = "Player Won";
    //     letsCelebrate();
    // }else if(player.alt === "player-option-paper" && computerPlayer.alt === "player-option-scissors"){
    //     winner.innerText = "computer Won";
    // }else if(player.alt === "player-option-paper" && computerPlayer.alt === "player-option-paper"){
    //     winner.innerText = "Draw";
    // }else if(player.alt === "player-option-paper" && computerPlayer.alt === "player-option-rock"){
    //     winner.innerText = "Player Won";
    //     letsCelebrate();
    // }else if(player.alt === "player-option-scissors" && computerPlayer.alt === "player-option-rock"){
    //     winner.innerText = "computer Won";
    // }else if(player.alt === "player-option-scissors" && computerPlayer.alt === "player-option-scissors"){
    //     winner.innerText = "Draw";
    // }else{
    //     winner.innerText = "Player Won";
    //     letsCelebrate();
    // }

}

// choice visible
const options = document.querySelectorAll(".choice");

options.forEach(element => {
    element.addEventListener("click", ()=>{
        if(element.classList.contains("rock")){
            removeImg(playerOption, computerOption);
            playerOption.appendChild(createRockImg());
            computerOption.appendChild(computerChoice());
            gameResult();

        }else if(element.classList.contains("paper")){
            removeImg(playerOption, computerOption);
            playerOption.appendChild(createPaperImg());
            computerOption.appendChild(computerChoice());
            gameResult();
        }else if(element.classList.contains("scissors")){
            removeImg(playerOption, computerOption);
            playerOption.appendChild(createScissorImg());
            computerOption.appendChild(computerChoice());
            gameResult();
        }else if(element.classList.contains("lizard")){
            removeImg(playerOption, computerOption);
            playerOption.appendChild(createLizardImg());
            computerOption.appendChild(computerChoice());
            gameResult();
        }else{
            removeImg(playerOption, computerOption);
            playerOption.appendChild(createSpockImg());
            computerOption.appendChild(computerChoice());
            gameResult();
        }
    })
});

