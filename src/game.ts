export type Tile = {
    value: number;
    isNew: boolean;
    isMerged: boolean; // Flag to indicate if the tile has merged
    element: HTMLDivElement | null; // Add a reference to the DOM element
};

import './game.css';

const potentialPrompts: string[] = [
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
    private board: Tile[][];
    private score: number;
    private prompts: string[];

    private targetScore: number;
    private timeLeft: number;
    private timerInterval: any;
    private active: boolean;

    /**
     * Creates an instance of Game2048.
     */
    constructor() {
        const urlParams = new URLSearchParams(window.location.search);
        this.timeLeft = parseInt(urlParams.get('time') || '60', 10);
        this.targetScore = parseInt(urlParams.get('target') || '2048', 10);
        this.active = true;
        this.board = this.createBoard();
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
    private updateDeadlockProgressBar(): void {
        const deadlockProgressBar = document.getElementById('deadlock-progress') as HTMLProgressElement;
        if (deadlockProgressBar) {
            const deadlockProgress = this.calculateDeadlockProgress();
            deadlockProgressBar.value = deadlockProgress;
        }
    }

    /**
     * Calculates the deadlock progress based on filled squares and potential merges.
     * @returns {number} The deadlock progress as a percentage.
     */
    private calculateDeadlockProgress(): number {
        let filledSquares = 0;
        let potentialMerges = 0;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j].value !== 0) {
                    filledSquares++;
                }
                if (i < 3 && this.board[i][j].value === this.board[i + 1][j].value) {
                    potentialMerges++;
                }
                if (j < 3 && this.board[i][j].value === this.board[i][j + 1].value) {
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
    private updateTimerProgressBar(progressRatio: number): void {
        const timerProgressBar = document.getElementById('timer-progress') as HTMLProgressElement;
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
    private updateProgressBar(): void {
        const progressBar = document.getElementById('score-progress') as HTMLProgressElement;
        if (progressBar) {
            const progress = (this.score / this.targetScore) * 100;
            progressBar.value = progress;
        }
    }

    /**
     * Gets the current score.
     * @returns {number} The current score.
     */
    public getScore(): number {
        return this.score;
    }

    /**
     * Gets the current game board.
     * @returns {number[][]} The current game board.
     */
    public getBoard(): number[][] {
        return this.board.map(row => row.map(tile => tile.value));
    }

    /**
     * Updates the target score display on the UI.
     */
    private updateTargetScoreDisplay(): void {
        const targetScoreElement = document.getElementById('target-score');
        if (targetScoreElement) {
            targetScoreElement.textContent = `Target Score: ${this.targetScore}`;

        }
    }
    /**
     * Checks if the game has ended due to win or deadlock.
     */
    private checkEndGameCondition(): void {
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
    private startTimer(): void {
        const startTime = performance.now();
        const totalDuration = this.timeLeft * 1000; // Convert seconds to milliseconds

        this.timerInterval = setInterval(() => {
            const elapsedTime = performance.now() - startTime;
            const remainingTime = totalDuration - elapsedTime;

            if (remainingTime > 0) {
                this.timeLeft = Math.ceil(remainingTime / 1000);
                this.setTimeDisplay();
                this.updateTimerProgressBar(remainingTime / totalDuration);
            } else {
                this.endGameWithMessage("Timeout! You Lose.");
            }
        }, 1000);
    }

    /**
     * Set the displayed game time
     */
    private setTimeDisplay(): void {
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
    private getMoveDirectionFromKey(key: string): string | null {
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
    private handleMove(direction: string): void {
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
    private handleKeyPress(event: KeyboardEvent): void {
        const direction = this.getMoveDirectionFromKey(event.key);
        if (direction) {
            this.handleMove(direction);
        }
    }

    private touchStartX: number = 0;
    private touchStartY: number = 0;
    private touchEndX: number = 0;
    private touchEndY: number = 0;

    /**
     * Handles the touch start event.
     * @param {TouchEvent} event - The touch event.
     */
    private handleTouchStart(event: TouchEvent): void {
        event.preventDefault(); // Prevent default scrolling
        const firstTouch = event.touches[0];
        this.touchStartX = firstTouch.clientX;
        this.touchStartY = firstTouch.clientY;
    }

    /**
     * Handles the touch move event.
     * @param {TouchEvent} event - The touch event.
     */
    private handleTouchMove(event: TouchEvent): void {
        event.preventDefault(); // Prevent default scrolling
        if (!this.active) return;
        const touch = event.touches[0];
        this.touchEndX = touch.clientX;
        this.touchEndY = touch.clientY;
    }

    /**
     * Handles the touch end event and determines the swipe direction.
     */
    private handleTouchEnd(): void {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;

        let direction: string | null = null;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ? 'right' : 'left';
        } else {
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
    private move(direction: string): void {
        if (this.active) {
            // Determine if the move is vertical or horizontal
            const isVertical = direction === 'up' || direction === 'down';
            // Determine if the move is in reverse order (down or right)
            const isReverse = direction === 'down' || direction === 'right';
   
            // Iterate over each row or column based on the direction
            for (let i = 0; i < 4; i++) {
                // Track which tiles have been merged to prevent double merging
                let merged = [false, false, false, false];
                // Set the starting point and direction of iteration
                for (let j = isReverse ? 2 : 1; isReverse ? j >= 0 : j < 4; isReverse ? j-- : j++) {
                    // Determine the current row and column based on the direction
                    const row = isVertical ? j : i;
                    const col = isVertical ? i : j;
                    // Check if the current tile is not empty
                    if (this.board[row][col].value !== 0) {
                        let newRow = row;
                        let newCol = col;
                        // Move the tile as far as possible in the specified direction
                        while (true) {
                            const nextRow = newRow + (isVertical ? (isReverse ? 1 : -1) : 0);
                            const nextCol = newCol + (isVertical ? 0 : (isReverse ? 1 : -1));
                            // Stop if the next position is out of bounds or not empty
                            if (nextRow < 0 || nextRow > 3 || nextCol < 0 || nextCol > 3 || this.board[nextRow][nextCol].value !== 0) {
                                break;
                            }
                            // Swap the tiles
                            [this.board[newRow][newCol], this.board[nextRow][nextCol]] = [this.board[nextRow][nextCol], this.board[newRow][newCol]];

                            newRow = nextRow;
                            newCol = nextCol;
                        }
                        // Check if the tile can be merged with the next tile
                        const mergeRow = newRow + (isVertical ? (isReverse ? 1 : -1) : 0);
                        const mergeCol = newCol + (isVertical ? 0 : (isReverse ? 1 : -1));
                        if (mergeRow >= 0 && mergeRow < 4 && mergeCol >= 0 && mergeCol < 4 &&
                            this.board[mergeRow][mergeCol].value === this.board[newRow][newCol].value && !merged[mergeRow || mergeCol]) {
                            // Merge the tiles and update the score
                            this.board[mergeRow][mergeCol].value *= 2;
                            this.board[mergeRow][mergeCol].isNew = false;
                            this.board[mergeRow][mergeCol].isMerged = true; // Set the merged flag
                            this.board[newRow][newCol].value = 0; // Clear the value
                            merged[mergeRow || mergeCol] = true;
                            this.updateScore(this.board[mergeRow][mergeCol].value);
                            this.displayRandomPrompt(); // Display a new prompt on merge
                        }
                        // Check if the game has ended after the move
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
    private updateScore(points: number): void {
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
    private isDeadlock(): boolean {
        // Check for empty spaces
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j].value === 0) {
                    return false; // Found an empty space
                }
            }
        }

        // Check for possible merges
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i < 3 && this.board[i][j].value === this.board[i + 1][j].value) {
                    return false; // Found a possible vertical merge
                }
                if (j < 3 && this.board[i][j].value === this.board[i][j + 1].value) {
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
    private endGameWithMessage(message: string): void {
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
    private createBoard(): Tile[][] {
        const gameBoard = document.getElementById('game-board');
        if (gameBoard) {
            // clear out the gameboard before we start
            gameBoard.innerHTML = '';
        }
        return Array.from({ length: 4 }, (_, rowIndex) =>
            Array.from({ length: 4 }, (_, colIndex) => {
                const tileElement = document.createElement('div');
                tileElement.className = 'tile';
                tileElement.style.transform = `translate(${colIndex * 105}px, ${rowIndex * 105}px)`;
                if (gameBoard) {
                    gameBoard.appendChild(tileElement);
                }
                return { value: 0, isNew: false, isMerged: false, element: tileElement };
            })
        );
    }

    /**
     * Adds a random tile (2 or 4) to an empty spot on the board.
     */
    private addRandomTile(): void {
        const emptyTiles = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j].value === 0) {
                    emptyTiles.push({ x: i, y: j });
                }
            }
        }
        if (emptyTiles.length > 0) {
            const { x, y } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            this.board[x][y].value = Math.random() < 0.9 ? 2 : 4;
            this.board[x][y].isNew = true;
        }
    }

    /**
     * Renders the game board on the UI.
     */
    private render(): void {
        const tileSize = 105; // Size of each tile including gap
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const tile = this.board[i][j];
                if (tile.element) {
                    // Update the tile's text content
                    tile.element.textContent = tile.value === 0 ? '' : `0x${tile.value.toString(16).toUpperCase()}`;

                    // Calculate the correct position for the tile
                    const x = j * tileSize;
                    const y = i * tileSize;

                    // Apply the transformation to position the tile
                    tile.element.style.transform = `translate(${x}px, ${y}px)`;

                    // Update the tile's class for animation
                    tile.element.className = 'tile';
                    if (tile.isNew) {
                        tile.element.classList.add('pulse');
                        tile.isNew = false; // Reset the isNew flag after rendering
                    }
                    if (tile.isMerged) {
                        tile.element.classList.add('merged');
                        tile.isMerged = false; // Reset the flag after rendering
                    }

                    // Listen for animation end to remove the "merged" class
                    tile.element.addEventListener('animationend', () => {
                        if (tile.element) {
                            tile.element.classList.remove('pulse');
                            tile.element.classList.remove('merged');
                        }
                    });
                }
            }
        }
    }

    private displayRandomPrompt(): void {
        const maxPrompts = 10;
        const newPrompt = this.getRandomPrompt();
        this.prompts.push(newPrompt);

        while (this.prompts.length > maxPrompts) {
            this.prompts.shift(); // Remove the oldest prompt
        }

        this.updatePromptDisplay();
    }

    private updatePromptDisplay(): void {
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
                } else {
                    this.typeText(promptDiv, `$:> ${prompt}`, 0); // Delay each prompt                
                }
            }
        }
    }

    private getRandomPrompt(): string {
        const randomIndex = Math.floor(Math.random() * potentialPrompts.length);
        return potentialPrompts[randomIndex];
    }
    
    private typeText(element: HTMLElement, text: string, delay: number): void {
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

(window as any).startGame = startGame;
(window as any).restartGame = restartGame;
export default Game2048;

function restartGame() {
    const gameOverlay = document.getElementById('game-overlay');
    if (gameOverlay) {
        gameOverlay.style.display = 'none';
    }
    new Game2048();
}
