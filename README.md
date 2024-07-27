# Cube-Runner

Cube-Runner is a simple 2D platformed game where the player navigates through various platforms and checkpoints. The objective is to reach the final checkpoint while avoiding obstacles and ensuring smooth movement.

## Features

- **Platform Navigation**: Move left and right to navigate through platforms.
- **Checkpoints**: Claim checkpoints to progress through the game.
- **Collision Detection**: Accurate collision detection with platforms and checkpoints.
- **Responsive Controls**: Use arrow keys for movement and jumping.

## Controls

- **Arrow Left**: Move left
- **Arrow Right**: Move right
- **Arrow Up / Spacebar**: Jump


### Prerequisites

- A modern web browser
- Basic knowledge of JavaScript

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cube-runner.git

2. Navigate to the project directory:<pre>cd cube-runner </pre>

### Running the Game

1. Open index.html in your web browser to start the game.
  
2. Click the "Start" button to begin playing.

### Code Overview
   
    Main Files

 *  Index.html: The main HTML file that sets up the game canvas.
 *  style.css: The CSS file for styling the game.
 *  script.js: The main JavaScript file containing game logic.


    Key Functions
 * startGame(): Initializes the game and starts the animation loop.
 * movePlayer(key, xVelocity, isPressed): Handles player movement based on key inputs.
 * showCheckpointScreen(msg): Displays messages when a checkpoint is reached.


    Contributing
 * Contributions are welcome! Please fork the repository and create a pull request with your changes.


    License
* This project is licensed under the MIT License. See the LICENSE file for details.