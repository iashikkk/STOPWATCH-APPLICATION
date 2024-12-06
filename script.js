let timer;
let seconds = 0;
let isRunning = false;

function startStop() {
    if (!isRunning) {
        timer = setInterval(updateDisplay, 1000);
        isRunning = true;
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    updateDisplay();
    document.getElementById("lapList").innerHTML = "";
}

function updateDisplay() {
    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("display").innerText = `${hrs}:${mins}:${secs}`;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").innerText;
        const lapList = document.getElementById("lapList");
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}
