let myPosX = 250;
let myPosY = 450;
let enemyPosX = 250;
let enemyPosY = -25;

let state = 1;
let message = "GAME OVER!";

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function setup() {
    createCanvas(500,500);
}

function draw() {
    if (state == 1) {
        background(0);
    }else if (state = 2) {
        background(255);
    }
    
    
    fill(255);
    rect(myPosX, myPosY, 50,50);
    fill(255,0,0);
    rect(enemyPosX,enemyPosY,50,50);

    enemyPosY +=5;

    if (enemyPosY > 525) {
        enemyPosX =  enemyPosY = Math.floor(Math.random() * (canvas.width - 25))
    }

    if(keyIsDown(LEFT_ARROW)) {
        myPosX -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
     myPosX += 3;
    }

    if (keyIsDown(UP_ARROW)) {
    myPosY -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
    myPosY += 3;
    }

    
    

    myLeft = myPosX - 25;
    myRight = myPosX + 25;
    myTop = myPosY - 25;
    myBottom = myPosY + 25;

    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25;

    // if (enemyTop >= 525) {
        // enemyPosX = Math.floor(Math.random() * (canvas.width - 25))
    // }

    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        // no collision
        // enemyPosX = Math.floor(Math.random() * (canvas.width - 25))
       

    }

    else {

        
        state = 2;
        fill(255,0,0);
        textSize(25);
        text(message, 200,250)
        endgame();
        
        
        

        //collision
        // fill(random(255), random(255, random(255)));
        // textSize(15);
        // text("I'm colliding with my enemy. Ouch!", 255, 480);
        // enemyPosX = random(100,400);
        // enemyPosY = random(100, 400);
    }
    
}