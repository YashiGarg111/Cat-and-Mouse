var background, backgroundImg;
var cat, catRunning, catStanding, catStill;
var mouse, mouseTeasing, mouseStill, mouseWalking;

function preload() {
catStill=loadAnimation("images/cat1.png");
catRunning=loadAnimation("images/cat2.png", "images/cat3.png")
catStanding=loadAnimation("images/cat4.png");
mouseWalking=loadAnimation("images/mouse1.png");
mouseTeasing=loadAnimation("images/mouse2.png", "images/mouse3.png");
mouseStill=loadAnimation("images/mouse4.png")
backgroundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(800,600);
    cat.addAnimation("catImg", catStill);
    cat.scale=0.2;

    mouse=createSprite(70,600);
    mouse.addAnimation("mouseImg", mouseWalking);
    mouse.scale=0.15;
}

function draw() {
    background(backgroundImg);

    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catImg3", catStanding);
        cat.changeAnimation("catImg3");

        mouse.addAnimation("mouseImg3", mouseStill);
        mouse.changeAnimation("mouseImg3");
}
    drawSprites();
}
function keyPressed(){
 if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning", catRunning);
     cat.changeAnimation("catRunning");

     mouse.addAnimation("mouseTeasing", mouseTeasing);
     mouse.changeAnimation("mouseTeasing");
 }
}
