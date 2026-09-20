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
            onPlatform2: false,
            onPlatform3: false,
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
            onPlatform2: false,
            onPlatform3:false,
        };
// platform
let platform = {
    x: 10,
    y: 600,
    width: 1300,
    height: 20,
}
let platform2 = {
    x: 0,
    y: 500,
    width: canvas.width,
    height: 20,
}
let door = {
    x: 1200,
    y: 520,
    width: 40,
    height: 80
}
let lava = {
    x: 650,
    y: 460,
    width: 120,
    height: 40,
}
let button = {
 x: 840,
 y: 490,
 width: 19,
 height: 8,
}
let platform3 = {
    x: 0,
    y: 380,
    width: canvas.width,
    height: 25,
}
let lavaOff = false;

let ladder = {
    x: canvas.width - 90,
    y: 360,
    width: 40,
    height: 120,
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
// button on platform2
 ctx.fillStyle = 'yellow';
ctx.fillRect(button.x,
    button.y,
    button.width,
    button.height,
);
//platform3
ctx.fillStyle = 'gray';
ctx.fillRect(
    platform3.x,
    platform3.y,
    platform3.width,
    platform3.height,
)
//lava
if  (lavaOff) {
    ctx.fillStyle = 'blue';
} else {
    ctx.fillStyle = 'red';
}
ctx.fillRect(
    lava.x,
    lava.y,
    lava.width,
    lava.height
);
//ladder
ctx.fillStyle = 'brown';
ctx.fillRect(
    ladder.x,
    ladder.y,
    ladder.width,
    ladder.height,
)
        }
        function restartLevel() {
    // Reset Watergirl
    square.x = 175;
    square.y = 175;
    square.velocityY = 0;
    square.onGround = false;
    square.onPlatform2 = false;

    // Reset Fireboy
    square2.x = 300;
    square2.y = 300;
    square2.velocityY = 0;
    square2.onGround = false;
    square2.onPlatform2 = false;

    lavaOff = false;
}
       function update() {
        console.log('Updating frame');

        
            
             //gravity
             if (!isOnLadder(square)) {
                square.velocityY += square.gravity;
                square.y += square.velocityY;
             }
             else {
                square.velocityY = 0;
             }
             if (!isOnLadder(square2)) {
                square2.velocityY += square2.gravity;
                square2.y += square2.velocityY;
             } else {
                square2.velocityY = 0;
             }
             //bottom platform collision - watergirl
             if (
                square.y + square.size >= platform.y &&
                square.x + square.size > platform.x &&
                square.x < platform.x + platform.width &&
                square.velocityY >= 0
             ) {
                 square.y = platform.y - square.size;
                 square.velocityY = 0;
                 square.onGround = true;
             }

             // bottomplatform colision - fireboy
             if (
                square2.y + square2.size >= platform.y &&
                square2.x + square2.size > platform.x &&
                square2.x < platform.x + platform.width &&
                square2.velocityY >= 0
             ) {
                square2.y = platform.y - square.size;
                square2.velocityY = 0;
                square2.onGround = true;
             }
//DOOR TELEPORT
 function checkDoor() {
  if (
        square.x + square.size > door.x &&
         square.x < door.x + door.width &&
        square.y + square.size > door.y &&
         square.y < door.y + door.height &&


        square2.x + square2.size > door.x &&
         square2.x < door.x + door.width &&
        square2.y + square2.size > door.y &&
         square2.y < door.y + door.height 
  )
                                                                                               
 {
        //move players
        square.x = 400;
        square.y = platform2.y - square.size ;

        square2.x = 500;
        square2.y = platform2.y - square2.size;

        square.velocityY = 0;
     square2.velocityY = 0;

     square.onPlatform2 = true;
     square2.onPlatform2 = true;
 }

}
// platform 2 landing watergirl
if (
    square.onPlatform2 &&
    square.y + square.size >= platform2.y &&
    square.y < platform2.y + platform2.height &&
    square.x + square.size > platform2.x &&
    square.x < platform2.x + platform2.width &&
    square.velocityY >= 0
)       {
    square.y = platform2.y - square.size;
    square.velocityY = 0;
    square.onGround = true;
}
//platform2 landing fireboy 
if (
    square2.onPlatform2 &&
    square2.y + square2.size >= platform2.y &&
    square2.y < platform2.y  + platform2.height &&
    square2.x + square2.size > platform2.x &&
    square2.x < platform2.x + platform2.width &&
    square2.velocityY >= 0
) {
    square2.y = platform2.y - square2.size;
    square2.velocityY =0;
    square2.onGround = true;
}
//platform 3 
if ( 
    square.onPlatform3 &&
    square.y + square.size >= platform3.y &&
    square.y + square.size  - square.velocityY <= platform3.y &&
    square.x + square.size > platform3.x &&
    square.x < platform3.x + platform3.width &&
    square.velocityY >= 0)
    {
    square.y = platform3.y - square.size;
    square.velocityY = 0;
    square.onGround = true;
}

if (
    square2.onPlatform3 &&
    square2.y + square2.size >= platform3.y &&
    square2.y + square2.size - square2.velocityY  <=  platform3.y &&
    square2.x + square2.size > platform3.x &&
    square2.x < platform3.x + platform3.width &&
    square2.velocityY >= 0
) {
    square2.y = platform3.y - square2.size;
    square2.velocityY = 0;
    square2.onGround = true;
}
//lava
      if (
        !lavaOff &&
    square.x + square.size > lava.x &&
    square.x < lava.x + lava.width &&
    square.y + square.size > lava.y &&
    square.y < lava.y + lava.height
) {
    restartLevel();
}
//fireboy touching button 
if (
    square2.onPlatform2 &&
    square2.x + square2.size > button.x &&
    square2.x < button.x + button.width &&
    square2.y + square2.size > button.y &&
    square2.y < button.y + button.height
) {
    lavaOff = true;
}
//fireboy touches water
if (
    lavaOff &&
    square2.x + square2.size > lava.x &&
    square2.x < lava.x + lava.width &&
    square2.y + square2.size > lava.y &&
    square2.y < lava.y + lava.height
) {
    restartLevel();
}

 checkDoor();

            draw();
            requestAnimationFrame(update);
       }
function isOnLadder(player) {
    return (
        player.x + player.size > ladder.x &&
        player.x < ladder.x + ladder.width &&
        player.y + player.size > ladder.y &&
        player.y < ladder.y + ladder.height
    );
}
         // Listen for keyboard input
        window.addEventListener( 'keydown', function(event) {
            // Check which key was pressed use event.key
            switch(event.key) {
                case 'ArrowUp':
            
                    if (isOnLadder(square)) {
                        square.y -= square.speed;
                        if ( square.y <= platform3.y - square.size) {
                            square.y = platform3.y - square.size;
                            square.onPlatform3 = true;
                            square.onGround = true;
                   }
                        }
                        else if (square.onGround) {
                        square.velocityY = square.jumpPower;
                        square.onGround = false;   
                    }
                    break;
            
                case 'ArrowDown' :
                    if (isOnLadder(square)) {
                        square.y += square.speed;
                    }
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
                    if (isOnLadder(square2)) {
                        square2.y -= square2.speed;

                        if (square2.y <= platform3.y - square2.size) {
                            square2.y = platform3.y - square2.size;
                            square2.onPlatform3 = true;
                            square2.onGround = true;
                        }
                    }
                  else if (square2.onGround)  {
    square2.velocityY = square2.jumpPower;
square2.onGround = false;  
 }
                    break;

                case 's':
                    if (isOnLadder(square2)) {
                    square2.y += square2.speed;
                    }
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