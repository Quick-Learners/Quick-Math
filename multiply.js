'use strict';

let score = 0;
let timer;
let timeLeft = 60;

function mathProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const problemText = `${num1} * ${num2} = ?`;
    document.getElementById("problem").textContent = problemText;
   // console.log(`New math problem: ${problemText}`);
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
       // console.log(`Time left: ${timeLeft}s`);

        // When the timer reaches zero
        if (timeLeft === 0) {
            clearInterval(timer);
            const finalScore = score;
            const scores = JSON.parse(localStorage.getItem("scores")) || [];
            scores.push({ score: finalScore });
            localStorage.setItem("scores", JSON.stringify(scores)); // Store the score
           // console.log(`Final score: ${finalScore}`);
            window.location.href = "mscore.html"; // Redirect to the score page
        }
    }, 1000);
}

document.getElementById("submit").addEventListener("click", function() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const problemText = document.getElementById("problem").textContent;
    const nums = problemText.split("*").map(num => parseInt(num));

    if (userAnswer === nums[0] * nums[1]) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
        //console.log(`Correct answer! New score: ${score}`);
    } else {
        //console.log(`Incorrect answer. Score: ${score}`);
    }

    document.getElementById("answer").value = "";
    mathProblem();
});

mathProblem();
startTimer();
