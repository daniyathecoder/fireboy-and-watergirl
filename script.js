alert("enjoy")
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
            velocityY: 0, // Current vertical velocity
            jumpPower: -12,
            gravity: 0.5, // Gravity acceleration
            onGround: false,
        };
        // fireboy
         let square2 = {
            x: 300,     // Initial X (centered)
            y: 300,     // Initial Y (centered)
            size: 50,   // Width and height of square
            speed: 5,    // Pixels moved per event
            velocityY: 0, // Current vertical velocity
            jumpPower: -12,
            gravity: 0.5, // Gravity acceleration
            onGround: false,
        };
// platform
let platform = {
    x: 10,
    y: 600,
    width: 1300,
    height: 20,
}
let platform2 = {
    x: 10,
    y: 400,
    width: 1300,
    height: 20,
}
let door = {
    x: 1200,
    y: 480,
    width: 40,
    height: 140
}
        // Function to draw frame
        function draw() {
            console.log('Drawing frame');
            // 1. Clear the entire canvas before drawing

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 2. watergirl
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
            //draw platform2
            ctx.fillStyle = 'pastelpink';
            ctx.fillRect(platform2.x,
                platform2.y,
                platform2.width,
                platform2.height
            );
            //draw door
            ctx.fillStyle = 'green';
            ctx.fillRect(door.x,
                door.y,
                door.width,
                door.height,
            )
        }
       function update() {
        console.log('Updating frame');

            // watergirl gravity
                square.velocityY += square.gravity;
             square.y += square.velocityY;
          //   fireboy gravity
                  square2.velocityY += square2.gravity;
               square2.y += square2.velocityY;
                     

            
             //  gravity
           if (
              square.y + square.size >= platform.y  &&
           square.x + square.size > platform.x &&
          square.x < platform.x + platform.width &&
            square.velocityY >=0 ) {
                square.y = platform.y - square.size;
               square.velocityY = 0;
               square.onGround = true;
    }
         if ( 
                square2.y + square2.size >= platform.y &&
                square2.x + square2.size > platform.x &&
              square2.x < platform.x + platform.width &&
               square2.velocityY >= 0 
           ) {
                square2.y = platform.y - square2.size;
               square2.velocityY = 0;
            square2.onGround = true;
    }

            draw();
            requestAnimationFrame(update);
}

         // Listen for keyboard input
        window.addEventListener('keydown', function(event) {
            // Check which key was pressed use event.key
            switch(event.key) {
                case 'ArrowUp':
                    if (square.onGround) {
                        square.velocityY = square.jumpPower;
                        square.onGround = false;
                    }
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


        // Listen keyboard input for fireboy
        window.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'w':
                    if (square2.onGround) 
                    {
    square2.velocityY = square2.jumpPower;
square2.onGround = false;  
 }
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
        update();