const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


  // Square properties
        let square = {
            x: 175,     // Initial X position (centered)
            y: 175,     // Initial Y position (centered)
            size: 50,   // Width and height of the square
            speed: 5    // Pixels moved per event
        };

        // Function to draw the current frame
        function draw() {
            // 1. Clear the entire canvas before redrawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 2. Set the color and draw the square
            ctx.fillStyle = 'royalblue';
            ctx.fillRect(square.x, square.y, square.size, square.size);
        }

         // Listen for keyboard input
        window.addEventListener('keydown', function(event) {
            // Check which key was pressed using event.key
            switch(event.key) {
                case 'ArrowUp':
                    square.y -= square.speed;
                    break;
                case 'ArrowDown':
                    square.y += square.speed;
                    break;
                case 'ArrowLeft':
                    square.x -= square.speed;
                    break;
                case 'ArrowRight':
                    square.x += square.speed;
                    break;
                default:
                    return; // Quit function if it's not an arrow key
            }

             // Prevent the browser window from scrolling when pressing arrow keys
            event.preventDefault();

            // Redraw the square in its new position
            draw();
        });

        // Initial draw call to show the square when the page loads
        draw();

        let square2 = {
            x: 300,     // Initial X position (centered)
            y: 300,     // Initial Y position (centered)
            size: 50,   // Width and height of the square
            speed: 5    // Pixels moved per event
        };

        // Function to draw the second square
        function drawSquare2() {
            ctx.fillStyle = 'red';
            ctx.fillRect(square2.x, square2.y, square2.size, square2.size);
        }

        // Listen for keyboard input for the second square
        window.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'w':
                    square2.y -= square2.speed;
                    break;
                case 's':
                    square2.y += square2.speed;
                    break;
                case 'a':
                    square2.x -= square2.speed;
                    break;
                case 'd':
                    square2.x += square2.speed;
                    break;
                default:
                    return;
            }
            event.preventDefault();
            draw();
            drawSquare2();
        });

        // Initial draw call to show both squares when the page loads
        draw();
        drawSquare2();
        