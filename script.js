const inputNumber = document.getElementById("input-number");
const buttonNumber = document.getElementById("button");
const resetButton = document.getElementById("reset-button");
const resultParagraph = document.getElementById("result");

let result = Math.floor((Math.random() * 100) + 1);

let attemptsLeft = 5;

buttonNumber.addEventListener("click", function (event) {
    event.preventDefault();

    const guess = parseInt(inputNumber.value);
    inputNumber.value = "";

    attemptsLeft--;

    if (attemptsLeft === 0 && guess !== result) {
        resultParagraph.innerText = `Game Over! The correct number was: ${result}`;
        buttonNumber.disabled = true;
        resetButton.style.display = "block";
        return;
    }


    if (guess === result) {
        resultParagraph.innerText = `Congratulations! You guessed the correct number: ${result}`;
        buttonNumber.disabled = true;
        resetButton.style.display = "block";
    } else if (guess > result) {
        resultParagraph.innerText = `Too high! Try again \nAttempts left: ${attemptsLeft}`;
    } else if (guess < result) {
        resultParagraph.innerText = `Too low! Try again! \nAttempts right: ${attemptsLeft}`;
    }

})
resetButton.addEventListener("click", function () {
    attemptsLeft = 5;
    result = Math.floor((Math.random() * 100) + 1);
    buttonNumber.disabled = false;
    resetButton.style.display = "none";
    resultParagraph.innerText = "Here's the result!";
    inputNumber.value = "";
});


