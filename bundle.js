/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const potentialPrompts = [
    "firewall node breached",
    "port scan successful",
    "encryption key cracked",
    "access granted",
    "data packet intercepted",
    "malware deployed",
    "system override initiated",
    "network intrusion detected",
    "backdoor access established",
    "security protocol bypassed",
    "root access obtained",
    "database compromised",
    "ip address spoofed",
    "password decrypted",
    "server connection established",
    "proxy server engaged",
    "data exfiltration complete",
    "honeypot evaded",
    "botnet command executed",
    "zero-day exploit launched",
    "brute force attack initiated",
    "firewall rules updated",
    "vpn tunnel established",
    "trojan horse activated",
    "ddos attack mitigated",
    "tunnel key generated",
    "rootkit installed",
    "network traffic analyzed",
    "intrusion attempt blocked",
    "security patch removed",
    "data decryption in progress",
    "access token generated",
    "session hijacking successful",
    "malware signature updated",
    "intrusion prevention system triggered",
    "zero-trust policy enforced",
    "digital certificate issued",
    "blockchain transaction verified",
    "two-factor authentication bypassed",
    "packet sniffer deployed",
    "network spoofing detected",
    "keylogger activated",
    "botnet command received",
    "exploit kit executed",
    "security audit forged",
    "digital footprint analyzed",
    "sandbox environment breached",
    "remote access granted",
    "security threat neutralized",
    "data integrity verified",
    "anomaly detection triggered",
    "security breach contained",
    "forensic analysis underway",
    "threat intelligence updated",
    "access logs reviewed",
    "security clearance granted",
    "encryption protocol downgraded",
    "data backup completed",
    "incident response initiated"
];
/**
 * Class representing the 2048 game.
 */
class Game2048 {
    /**
     * Creates an instance of Game2048.
     */
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        const urlParams = new URLSearchParams(window.location.search);
        this.timeLeft = parseInt(urlParams.get('time') || '60', 10);
        this.targetScore = parseInt(urlParams.get('target') || '2048', 10);
        this.active = true;
        this.board = this.createBoard();
        this.newTiles = this.createNewTilesMap();
        this.score = 0;
        this.prompts = [];
        this.updateScore(0);
        this.updateTargetScoreDisplay();
        this.setTimeDisplay();
        this.addRandomTile();
        this.addRandomTile();
        this.render();
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
        this.startTimer();
        this.checkEndGameCondition();
        this.updateDeadlockProgressBar(); // Update deadlock progress
        this.updatePromptDisplay();
    }
    /**
     * Updates the deadlock progress bar based on the current board state.
     */
    updateDeadlockProgressBar() {
        const deadlockProgressBar = document.getElementById('deadlock-progress');
        if (deadlockProgressBar) {
            const deadlockProgress = this.calculateDeadlockProgress();
            deadlockProgressBar.value = deadlockProgress;
        }
    }
    /**
     * Calculates the deadlock progress based on filled squares and potential merges.
     * @returns {number} The deadlock progress as a percentage.
     */
    calculateDeadlockProgress() {
        let filledSquares = 0;
        let potentialMerges = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] !== 0) {
                    filledSquares++;
                }
                if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {
                    potentialMerges++;
                }
                if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {
                    potentialMerges++;
                }
            }
        }
        const totalSquares = 16;
        const deadlockFactor = filledSquares - potentialMerges;
        return (deadlockFactor / totalSquares) * 100;
    }
    /**
     * Updates the timer progress bar based on the remaining time.
     * Updates the timer progress bar based on the remaining time ratio.
     * @param {number} progressRatio - The ratio of remaining time to total time.
     */
    updateTimerProgressBar(progressRatio) {
        const timerProgressBar = document.getElementById('timer-progress');
        if (timerProgressBar) {
            timerProgressBar.value = progressRatio * 100;
            // Calculate the color based on the progress ratio
            const greenValue = Math.floor(255 * progressRatio);
            const redValue = 255 - greenValue;
            const color = `rgb(${redValue}, ${greenValue}, 0)`;
            // Update the progress bar color
            timerProgressBar.style.setProperty('--progress-color', color);
        }
    }
    /**
     * Updates the progress bar based on the current score.
     */
    updateProgressBar() {
        const progressBar = document.getElementById('score-progress');
        if (progressBar) {
            const progress = (this.score / this.targetScore) * 100;
            progressBar.value = progress;
        }
    }
    /**
     * Gets the current score.
     * @returns {number} The current score.
     */
    getScore() {
        return this.score;
    }
    /**
     * Gets the current game board.
     * @returns {number[][]} The current game board.
     */
    getBoard() {
        return this.board;
    }
    /**
     * Updates the target score display on the UI.
     */
    updateTargetScoreDisplay() {
        const targetScoreElement = document.getElementById('target-score');
        if (targetScoreElement) {
            targetScoreElement.textContent = `Target Score: ${this.targetScore}`;
        }
    }
    /**
     * Checks if the game has ended due to win or deadlock.
     */
    checkEndGameCondition() {
        if (this.score >= this.targetScore) {
            this.endGameWithMessage("You Win!");
            return;
        }
        if (this.isDeadlock()) {
            this.endGameWithMessage("Deadlock! You Lose.");
        }
    }
    /**
     * Starts the game timer and updates the UI.
     */
    startTimer() {
        const startTime = performance.now();
        const totalDuration = this.timeLeft * 1000; // Convert seconds to milliseconds
        this.timerInterval = setInterval(() => {
            const elapsedTime = performance.now() - startTime;
            const remainingTime = totalDuration - elapsedTime;
            if (remainingTime > 0) {
                this.timeLeft = Math.ceil(remainingTime / 1000);
                this.setTimeDisplay();
                this.updateTimerProgressBar(remainingTime / totalDuration);
            }
            else {
                this.endGameWithMessage("Timeout! You Lose.");
            }
        }, 1000);
    }
    /**
     * Set the displayed game time
     */
    setTimeDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = `Time Left: ${this.timeLeft}s`;
        }
    }
    /**
     * Determines the move direction based on the key pressed.
     * @param {string} key - The key pressed.
     * @returns {string | null} The move direction ('up', 'down', 'left', 'right') or null if no valid key.
     */
    getMoveDirectionFromKey(key) {
        switch (key) {
            case 'ArrowUp':
            case 'w':
                return 'up';
            case 'ArrowDown':
            case 's':
                return 'down';
            case 'ArrowLeft':
            case 'a':
                return 'left';
            case 'ArrowRight':
            case 'd':
                return 'right';
            default:
                return null;
        }
    }
    /**
     * Handles the move action and updates the game state.
     * @param {string} direction - The direction to move tiles ('up', 'down', 'left', 'right').
     */
    handleMove(direction) {
        if (this.active) {
            this.move(direction);
            this.checkEndGameCondition();
            this.addRandomTile();
            this.render();
            this.updateDeadlockProgressBar(); // Update deadlock progress
        }
    }
    /**
     * Handles key press events to move tiles.
     * @param {KeyboardEvent} event - The keyboard event.
     */
    handleKeyPress(event) {
        const direction = this.getMoveDirectionFromKey(event.key);
        if (direction) {
            this.handleMove(direction);
        }
    }
    /**
     * Handles the touch start event.
     * @param {TouchEvent} event - The touch event.
     */
    handleTouchStart(event) {
        event.preventDefault(); // Prevent default scrolling
        const firstTouch = event.touches[0];
        this.touchStartX = firstTouch.clientX;
        this.touchStartY = firstTouch.clientY;
    }
    /**
     * Handles the touch move event.
     * @param {TouchEvent} event - The touch event.
     */
    handleTouchMove(event) {
        event.preventDefault(); // Prevent default scrolling
        if (!this.active)
            return;
        const touch = event.touches[0];
        this.touchEndX = touch.clientX;
        this.touchEndY = touch.clientY;
    }
    /**
     * Handles the touch end event and determines the swipe direction.
     */
    handleTouchEnd() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        let direction = null;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ? 'right' : 'left';
        }
        else {
            direction = deltaY > 0 ? 'down' : 'up';
        }
        if (direction) {
            this.handleMove(direction);
        }
    }
    /**
     * Moves tiles in the specified direction and merges them if possible.
     * @param {string} direction - The direction to move tiles ('up', 'down', 'left', 'right').
     */
    move(direction) {
        if (this.active) {
            const isVertical = direction === 'up' || direction === 'down';
            const isReverse = direction === 'down' || direction === 'right';
            for (let i = 0; i < 4; i++) {
                let merged = [false, false, false, false];
                for (let j = isReverse ? 2 : 1; isReverse ? j >= 0 : j < 4; isReverse ? j-- : j++) {
                    const row = isVertical ? j : i;
                    const col = isVertical ? i : j;
                    if (this.board[row][col] !== 0) {
                        let newRow = row;
                        let newCol = col;
                        while (true) {
                            const nextRow = newRow + (isVertical ? (isReverse ? 1 : -1) : 0);
                            const nextCol = newCol + (isVertical ? 0 : (isReverse ? 1 : -1));
                            if (nextRow < 0 || nextRow > 3 || nextCol < 0 || nextCol > 3 || this.board[nextRow][nextCol] !== 0) {
                                break;
                            }
                            this.board[nextRow][nextCol] = this.board[newRow][newCol];
                            this.board[newRow][newCol] = 0;
                            newRow = nextRow;
                            newCol = nextCol;
                        }
                        const mergeRow = newRow + (isVertical ? (isReverse ? 1 : -1) : 0);
                        const mergeCol = newCol + (isVertical ? 0 : (isReverse ? 1 : -1));
                        if (mergeRow >= 0 && mergeRow < 4 && mergeCol >= 0 && mergeCol < 4 &&
                            this.board[mergeRow][mergeCol] === this.board[newRow][newCol] && !merged[mergeRow || mergeCol]) {
                            this.board[mergeRow][mergeCol] *= 2;
                            this.newTiles[mergeRow][mergeCol] = true;
                            this.board[newRow][newCol] = 0;
                            merged[mergeRow || mergeCol] = true;
                            this.updateScore(this.board[mergeRow][mergeCol]);
                            this.displayRandomPrompt(); // Display a new prompt on merge
                        }
                        this.checkEndGameCondition();
                    }
                }
            }
        }
    }
    /**
     * Updates the score and the score display.
     * @param {number} points - The points to add to the score.
     */
    updateScore(points) {
        this.score += points;
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.textContent = `Score: ${this.score}`;
        }
        this.updateProgressBar();
    }
    /**
     * Checks if the game is in a deadlock state.
     * @returns {boolean} True if the game is in a deadlock, false otherwise.
     */
    isDeadlock() {
        // Check for empty spaces
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] === 0) {
                    return false; // Found an empty space
                }
            }
        }
        // Check for possible merges
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {
                    return false; // Found a possible vertical merge
                }
                if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {
                    return false; // Found a possible horizontal merge
                }
            }
        }
        return true; // No empty spaces or possible merges
    }
    /**
     * Ends the game and displays a message.
     * @param {string} message - The message to display.
     */
    endGameWithMessage(message) {
        clearInterval(this.timerInterval);
        this.active = false;
        const endGameMessageElement = document.getElementById('end-game-message');
        const gameOverlay = document.getElementById('game-overlay');
        if (endGameMessageElement && gameOverlay) {
            endGameMessageElement.textContent = message;
            gameOverlay.style.display = 'flex';
        }
        document.removeEventListener('keydown', this.handleKeyPress.bind(this));
    }
    /**
     * Creates a new game board.
     * @returns {number[][]} A 2D array representing the game board.
     */
    createBoard() {
        return Array.from({ length: 4 }, () => Array(4).fill(0));
    }
    /**
     * Creates the new tiles map.
     * @returns {boolean[][]} A 2D array of flags indicating whether the tile is new.
     */
    createNewTilesMap() {
        return Array.from({ length: 4 }, () => Array(4).fill(false));
    }
    /**
     * Adds a random tile (2 or 4) to an empty spot on the board.
     */
    addRandomTile() {
        const emptyTiles = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] === 0) {
                    emptyTiles.push({ x: i, y: j });
                }
            }
        }
        if (emptyTiles.length > 0) {
            const { x, y } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            this.board[x][y] = Math.random() < 0.9 ? 2 : 4;
            this.newTiles[x][y] = true;
        }
    }
    /**
     * Renders the game board on the UI.
     */
    render() {
        const gameBoard = document.getElementById('game-board');
        if (gameBoard) {
            gameBoard.innerHTML = '';
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const tile = document.createElement('div');
                    if (this.newTiles[i][j]) {
                        tile.className = 'tile pulse';
                        this.newTiles[i][j] = false;
                    }
                    else {
                        tile.className = 'tile';
                    }
                    tile.textContent = this.board[i][j] === 0 ? '' : `0x${this.board[i][j].toString(16).toUpperCase()}`;
                    tile.style.transform = `translate(${j * 105}px, ${i * 105}px)`; // Position tile
                    gameBoard.appendChild(tile);
                }
            }
        }
    }
    displayRandomPrompt() {
        const maxPrompts = 10;
        const newPrompt = this.getRandomPrompt();
        this.prompts.push(newPrompt);
        while (this.prompts.length > maxPrompts) {
            this.prompts.shift(); // Remove the oldest prompt
        }
        this.updatePromptDisplay();
    }
    updatePromptDisplay() {
        const promptElement = document.getElementById('prompt');
        if (promptElement) {
            promptElement.innerHTML = ''; // Clear existing content
            for (let index = 0; index < this.prompts.length; index++) {
                const prompt = this.prompts[index];
                const promptDiv = document.createElement('div');
                promptDiv.className = 'prompt';
                promptElement.appendChild(promptDiv);
                if (index < this.prompts.length - 1) {
                    promptDiv.textContent = `$:> ${prompt}`;
                }
                else {
                    this.typeText(promptDiv, `$:> ${prompt}`, 0); // Delay each prompt                
                }
            }
        }
    }
    getRandomPrompt() {
        const randomIndex = Math.floor(Math.random() * potentialPrompts.length);
        return potentialPrompts[randomIndex];
    }
    typeText(element, text, delay) {
        let index = 0;
        setTimeout(() => {
            const typeNextCharacter = () => {
                if (index < text.length) {
                    element.textContent += text[index];
                    index++;
                    // Randomize the delay to simulate human typing
                    const randomDelay = 50 + Math.random() * 100; // Between 50ms and 150ms
                    setTimeout(typeNextCharacter, randomDelay);
                }
            };
            typeNextCharacter();
        }, delay);
    }
}
function startGame() {
    const startGameOverlay = document.getElementById('start-game-overlay');
    if (startGameOverlay) {
        startGameOverlay.style.display = 'none';
    }
    new Game2048();
}
window.startGame = startGame;
window.restartGame = restartGame;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game2048);
function restartGame() {
    const gameOverlay = document.getElementById('game-overlay');
    if (gameOverlay) {
        gameOverlay.style.display = 'none';
    }
    new Game2048();
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map