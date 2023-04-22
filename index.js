let diceNumber = document.getElementById("dice-face")
function roll() {
    let n = Math.floor(Math.random()*6+1)
    diceNumber.innerText=n
}