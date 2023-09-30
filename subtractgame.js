'use strict';

let score = 0;
let timer;
let timeLeft = 60;

function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("problem").textContent = `${num1} - ${num2} = ?`;
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;

        // When the timer reaches zero
        if (timeLeft === 0) {
            clearInterval(timer);
            const finalScore = score;
            const scores = JSON.parse(localStorage.getItem("scores")) || [];
            scores.push({ score: finalScore });
            localStorage.setItem("scores", JSON.stringify(scores)); // Store the score
            window.location.href = "trackscores.html"; // Redirect to the score page
        }

    }, 1000);
}

document.getElementById("submit").addEventListener("click", function() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const problemText = document.getElementById("problem").textContent;
    const nums = problemText.split("-").map(num => parseInt(num));

    if (userAnswer === nums[0] - nums[1]) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
    }

    document.getElementById("answer").value = "";
    generateProblem();
    
    // Log user's answer and current score
    //console.log(`User Answer: ${userAnswer}`);
    //console.log(`Current Score: ${score}`);
});

generateProblem();
startTimer();
