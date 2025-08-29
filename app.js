let input = document.getElementById("number");
let btn = document.getElementById("guess-btn");
let message = document.getElementById("message");
let guess = document.getElementById("guesses");
let restart = document.getElementById("restart-btn");

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;
let guesses = [];

btn.addEventListener("click", () => {
  const userguess = Number(input.value);
  console.log(userguess);

  if (!userguess || userguess < 1 || userguess > 100) {
    message.innerText = "Please enter the valid number from  1 to 100";
    return;
  }

  attempts++;
  guesses.push(userguess);
  console.log(attempts);
  console.log(guesses);

  if (userguess === randomNumber) {
    message.innerText = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    console.log(message);

    btn.disabled = true;
    input.disabled = true;
    restart.style.display = "inline-block";
  } else if (userguess < randomNumber) {
    message.innerText = "📉 Too low! Try again.";
  } else {
    message.innerText = "📈 Too high! Try again.";
  }

  guess.innerText = `Previous guesses: ${guesses.join(", ")}`;
  input.value = "";
  input.focus();

  restart.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guesses = [];
    message.innerText = "";
    guess.innerText = "Previous guesses: None";
    btn.disabled = false;
    input.disabled = false;
    input.value = "";
    restart.style.display = "none";
    input.focus();
  });
});
