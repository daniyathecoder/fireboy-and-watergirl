const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


  // watergirl
        let square = {
            x: 175,     // Initial X position (centered)
            y: 175,     // Initial Y position (centered)
            size: 50,   // Width and height of the square
            speed: 5,    // Pixels moved per event
            velocity: 0, // Current vertical velocity
            jumpPower: -12,
            gravity: 0.5, // Gravity acceleration
        };
        // fireboy
         let square2 = {
            x: 300,     // Initial X (centered)
            y: 300,     // Initial Y (centered)
            size: 50,   // Width and height of square
            speed: 5,    // Pixels moved per event
            velocity: 0, // Current vertical velocity
            jumpPower: -12,
            gravity: 0.5, // Gravity acceleration
        };
// platform
let platform = {
    x: 100,
    y: 500,
    width: 500,
    height: 30,
}
        // Function to draw frame
        function draw() {
            // 1. Clear the entire canvas before drawing

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 2. square
            ctx.fillStyle = 'royalblue';
            ctx.fillRect(square.x, square.y, square.size, square.size);

             //draw fireboy
            ctx.fillStyle = 'red';
            ctx.fillRect(square2.x, square2.y, square2.size, square2.size);

            //draw platform
            ctx.fillStyle = 'gray';
            ctx.fillRect(platform.x,
                platform.y,
                platform.width,
                platform.height
            );
        }
        function update() {
            //gravity for both

            // watergirl gravity
            square.velocity += square.gravity;
            square.y += square.velocity;
             // fireboy gravity
             square2.velocity += square2.gravity;
            square2.y += square2.velocity;
                     
            //floor watergirl
            if (square.y + square.size >= canvas.height) {
                square.y = canvas.height - square.size;
                square.velocity = 0;
            }

            //floor fireboy
            if (square2.y + square2.size >= canvas.height) {
                square2.y = canvas.height - square2.size;
                square2.velocity = 0;
            }

            // gravity
            if (
                square.y + square.size >= platform.y  //&&>
             ) square.x + square.size > platform.x
               square.width < platform.x + platform.width
             {
                square2.y = platform.y - square.size;
                square2.velocity = 0;
            }
            draw();
            requestAnimationFrame(update);
        } -
        update();

         // Listen for keyboard input
        window.addEventListener('keydown', function(event) {
            // Check which key was pressed use event.key
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

             // Prevent browser from scrolling when pressing arrow keys
            event.preventDefault();

            // Redraw the square in new position
            draw();
        });

        draw();

        // Listen keyboard input for fireboy
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
        });

        draw();