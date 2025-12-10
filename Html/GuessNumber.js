
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(Math.random());


    const guessBtn = document.getElementById('guessBtn');
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');

    guessBtn.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);

        if (!userGuess || userGuess > 100) {
            result.textContent = 'Please enter a valid number between 1 and 100'
            return;
        }
        if (userGuess === randomNum) {
            console.log('got it');
    
            result.textContent = ` Congrats! You guessed the number ${randomNum}!`;
            result.textContent = 'do u wanna play again?';
            const playAgainBtn = document.createElement('button');
            playAgainBtn.textContent = 'Play Again';
            result.appendChild(playAgainBtn);

            playAgainBtn.addEventListener('click', () => {
                result.textContent = '';
                guessInput.value = '';
                guessInput.focus();
                randomNum = Math.floor(Math.random() * 100) + 1;
            });

        }
        else if (userGuess > randomNum) {
            result.textContent = 'To High! Try again ';
        }
        else {
            result.textContent = 'Too low! Try again.';
        }
        guessInput.value = '';
        guessInput.focus();
    }); console.log(randomNum);

