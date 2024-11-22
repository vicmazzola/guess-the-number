const inputNumber = document.getElementById("input-number");
const buttonNumber = document.getElementById("button");
const resultParagraph = document.getElementById("result");

const result = Math.floor((Math.random() * 100) + 1);
console.log("Number to guess: ", result);

let attemptsLeft = 5;

buttonNumber.addEventListener("click", function (event) {
    event.preventDefault();

    const guess = parseInt(inputNumber.value);

    attemptsLeft --;

    if (attemptsLeft === 0 && guess !== result) {
        resultParagraph.innerText = `Game Over! The correct number was: ${result}`;
        buttonNumber.disabled = true;
        return;
    }


    if (guess === result) {
        resultParagraph.innerText = `Congratulations! You guessed the correct number: ${result}`;
    } else if (guess > result) {
        resultParagraph.innerText = `Too high! Try again \nAttempts left: ${attemptsLeft}`;
    } else if (guess < result) {
        resultParagraph.innerText = `Too low! Try again! \nAttempts right: ${attemptsLeft}`;
    }

})



