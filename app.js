function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var task = taskInput.value;
    if (task) {
        var li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask() {
    var taskList = document.getElementById("taskList");
    if (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild);
    }
}   


function increase() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.textContent);
    count++;
    counter.textContent = count;
}

function decrease() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.textContent);
    count--;
    counter.textContent = count;
}

function reset() {
    var counter = document.getElementById("counter");
    counter.textContent = "0";
}


function playRPS() {
    const playerChoice = document
        .getElementById("playerChoice")
        .value
        .toLowerCase();

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const RPSResult = document.getElementById("result");

    RPSResult.textContent = `Computer chose: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        RPSResult.textContent += " - It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        RPSResult.textContent += " - You win!";
    } else {
        RPSResult.textContent += " - You lose!";
    }
}

let expression = "";

function press(value) {
    expression += value;
    document.getElementById("calcres").textContent = expression;
}

function clearCalc() {
    expression = "";
    document.getElementById("calcres").textContent = "0";
}

function calculate() {
    expression = eval(expression).toString();
    document.getElementById("calcres").textContent = expression;
}