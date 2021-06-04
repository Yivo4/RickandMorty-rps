let rickScore = document.getElementById("score-rick");
let mortyScore = document.getElementById("score-morty");
let rockButton = document.getElementById("btn-rock");
let paperButton = document.getElementById("btn-paper");
let scissorButton = document.getElementById("btn-scissor");
let rick = document.getElementById("rick");
let morty = document.getElementById("morty");
let start = document.getElementById("start");
let rickPoint = 0;
let mortyPoint = 0;

let punch = new Audio ("./sound/punch.mp3");
let jab = new Audio ("./sound/jab.mp3");
let sharp = new Audio ("./sound/sharp.mp3");

function chooseR(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

rockButton.addEventListener ("click", (e) => {
    e.preventDefault();
    punch.play();
    rick.style.backgroundImage = "none";
    rick.classList.remove("rock");
    rick.classList.remove("paper");
    rick.classList.remove("scissor");
    rick.classList.add("rock");
    rick.style.backgroundImage = "url(./img/Rock.png)";
    chooseR(3)
    if (chooseR(3) == 0) {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("rock");
        morty.style.backgroundImage = "url(./img/Rock.png)";
    } else if (chooseR(3) == 1) {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("paper");
        morty.style.backgroundImage = "url(./img/Paper.png)";
    } else {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("scissor");
        morty.style.backgroundImage = "url(./img/Scissors.png)";
    }

    if (rick.classList.contains("rock") && morty.classList.contains("rock")) {
        console.log("Empate");
    } else if (rick.classList.contains("rock") && morty.classList.contains("paper")) {
        console.log("Pierdes");
        mortyPoint++;
        mortyScore.innerText = mortyPoint;
    } else if (rick.classList.contains("rock") && morty.classList.contains("scissor")) {
        console.log("Ganas");
        rickPoint++;
        rickScore.innerText = rickPoint;
    }else {
        console.log("Nada");
    }
})
paperButton.addEventListener ("click", (e) => {
    e.preventDefault();
    sharp.play();
    rick.style.backgroundImage = "none";
    rick.classList.remove("rock");
    rick.classList.remove("paper");
    rick.classList.remove("scissor");
    rick.classList.add("paper");
    rick.style.backgroundImage = "url(./img/Paper.png)";
    chooseR(3)
    if (chooseR(3) == 0) {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("rock");
        morty.style.backgroundImage = "url(./img/Rock.png)";
    } else if (chooseR(3) == 1) {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("paper");
        morty.style.backgroundImage = "url(./img/Paper.png)";
    } else {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("scissor");
        morty.style.backgroundImage = "url(./img/Scissors.png)";
    }

    if (rick.classList.contains("paper") && morty.classList.contains("paper")) {
        console.log("Empate");
    } else if (rick.classList.contains("paper") && morty.classList.contains("scissor")) {
        console.log("Pierdes");
        mortyPoint++;
        mortyScore.innerText = mortyPoint;
    } else if (rick.classList.contains("paper") && morty.classList.contains("rock")) {
        console.log("Ganas");
        rickPoint++;
        rickScore.innerText = rickPoint;
    }else {
        console.log("Nada");
    }
})
scissorButton.addEventListener ("click", (e) => {
    e.preventDefault();
    jab.play();
    rick.style.backgroundImage = "none";
    rick.classList.remove("rock");
    rick.classList.remove("paper");
    rick.classList.remove("scissor");
    rick.classList.add("scissor");
    rick.style.backgroundImage = "url(./img/Scissors.png)";
    chooseR(3)
    if (chooseR(3) == 0) {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("rock");
        morty.style.backgroundImage = "url(./img/Rock.png)";
    } else if (chooseR(3) == 1) {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("paper");
        morty.style.backgroundImage = "url(./img/Paper.png)";
    } else {
        morty.style.backgroundImage = "none";
        morty.classList.remove("rock");
        morty.classList.remove("paper");
        morty.classList.remove("scissor");
        morty.classList.add("scissor");
        morty.style.backgroundImage = "url(./img/Scissors.png)";
    }

    if (rick.classList.contains("scissor") && morty.classList.contains("scissor")) {
        console.log("Empate");
    } else if (rick.classList.contains("scissor") && morty.classList.contains("rock")) {
        console.log("Pierdes");
        mortyPoint++;
        mortyScore.innerText = mortyPoint;
    } else if (rick.classList.contains("scissor") && morty.classList.contains("paper")) {
        console.log("Ganas");
        rickPoint++;
        rickScore.innerText = rickPoint;
    }else {
        console.log("Nada");
    }
})

start.addEventListener ("click", (e) =>{
    document.getElementById("score-rick").innerText = "0";
    document.getElementById("score-morty").innerText = "0";
    morty.style.backgroundImage = "none";
    rick.style.backgroundImage = "none";
    rickPoint = 0;
    mortyPoint = 0;
})
