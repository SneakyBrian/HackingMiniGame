# Hacking Mini Game

This is a prototype for a hacking mini game, inspired by the classic 2048 game. The objective is to slide numbered tiles on a grid to combine them and achieve a target score, simulating a hacking process.

## Prototype Features

- Engaging tile-sliding gameplay
- Timer and target score
- Responsive design
- Animated tile movements
- Overlay messages for game start and end

## Setting Up the Prototype

These instructions will help you set up and run the game on your local machine.

### Prerequisites

- Node.js and npm should be installed on your system. You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Building the Prototype

To build the game, run the following command:

```bash
npm run build
```

This will compile the TypeScript code and bundle it using Webpack.

### Running the Prototype

To start the development server and play the game, use:

```bash
npm start
```

Open your web browser and navigate to `http://localhost:9000` to test the mini game.

## How to Play the Mini Game

- Use the arrow keys on your keyboard to move the tiles.
- Tiles with the same number merge into one when they touch.
- Reach the target score to simulate a successful hack.
- The mini game ends when there are no possible moves left or the timer runs out.

## Prototype Development

### Testing

To run the tests, use:

```bash
npm test
```

This will execute the test suite using Jest.

### Code Structure

- `src/`: Contains the TypeScript source code for the game.
- `dist/`: Contains the bundled JavaScript output.
- `tests/`: Contains the test files for the game logic.

## Contributing to the Prototype

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the original 2048 game by Gabriele Cirulli, adapted for a hacking mini game context.
