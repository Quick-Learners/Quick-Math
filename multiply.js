'use strict';

let score = 0;
let timer;
let timeLeft = 60;

function mathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("math-prob").textContent = `${num2} * ${num2} = ?`;
}

function startTimer() {
  timer = setInterval(function() {
    timeLeft --;
    document.getElementById("time-left").textContent = `Time left: ${timeLeft}s`; 

    if (timeLeft === 0) {
      clearInterval(timer);
      const finalScore = score;
      const scores = JSON.parse(localStorage.getItem("scores")) || [];
      scores.push({score: finalScore});
      localStorage.setItem("scores", JSON.stringify(scores));
      window.location.href=""; // come back
    }
  }, 1000);
}

document.getElementById("submit").addEventListener("click", function() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const problemText = document.getElementById("math-prob").textContent;
  const nums = problemText.split("*").map(num => parseInt(num));

  if (userAnswer === nums[0] + nums[1]) {
      score++;
      document.getElementById("score").textContent = `Score: ${score}`;
  }

  document.getElementById("answer").value = "";
  mathProblem();
});

generateProblem();
startTimer();