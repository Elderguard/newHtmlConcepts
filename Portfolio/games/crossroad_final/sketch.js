importScripts(p5.play.js)

function setup() {
  createCanvas(500, 400);
  backTrack.loop();
}


function draw() {
  background(roadImage);
  showActor1();
  showCar();
  carMovement();
  actor1Movement();
  carRespawn();
  verifyCollision();
  //circle(xActorPosition+15, yActorPosition+15, 25);
  showScoreBoard();
  Score();
}


