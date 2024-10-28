let targetNumber;
let attempts;

function initGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('userGuess').value = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const messageDiv = document.getElementById('message');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = 'Please enter a valid number between 1 and 100';
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess === targetNumber) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = `Congratulations! You got it in ${attempts} attempts!`;
    } else if (userGuess < targetNumber) {
        messageDiv.style.color = 'blue';
        messageDiv.textContent = 'Higher!';
    } else {
        messageDiv.style.color = 'blue';
        messageDiv.textContent = 'Lower!';
    }
}

function newGame() {
    initGame();
}

// Initialize the game when the page loads
window.onload = initGame;
