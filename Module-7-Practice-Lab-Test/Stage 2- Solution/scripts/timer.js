
// Store DOM elements in variables
const txtStartTime = document.getElementById('txtStartTime');
const txtEndTime = document.getElementById('txtEndTime');
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const timerLog = document.getElementById('timerLog');

// Add event listeners using the .addEventListener() method
window.addEventListener('load', () => {
    console.log('Page loaded');
});

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);
btnReset.addEventListener('click', onResetClick);

// Event handler functions
function onStartClick() {
    console.log('Start button clicked at:', new Date());
    txtStartTime.value = new Date().toLocaleTimeString();
    addTimerLog('Start button clicked at ' + new Date().toLocaleTimeString());
}

function onStopClick() {
    console.log('Stop button clicked at:', new Date());
    txtEndTime.value = new Date().toLocaleTimeString();
    addTimerLog('Stop button clicked at ' + new Date().toLocaleTimeString());
}

function onResetClick() {
    console.log('Reset button clicked');
    txtStartTime.value = '';
    txtEndTime.value = '';
    removeAllTimerLogs();
}

// Helper functions
function addTimerLog(message) {
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    timerLog.appendChild(logEntry);
}

function removeAllTimerLogs() {
    timerLog.innerHTML = '';
}
