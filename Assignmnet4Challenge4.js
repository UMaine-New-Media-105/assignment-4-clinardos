// Linardos, Caitlin
// Assignment 4, Challenge 3

// This allows for the colors to randomly change each time sketch is played 
let colors = [
  "lightblue",
  "lightskyblue",
  "deepskyblue",
  "skyblue",
  "steelblue",
  "dodgerblue",
  "cornflakeblue",
  "royalblue",
  "blue",
  "mediumblue",
  "darkblue",
  "navy",
  "midnightblue",
  "mediumslateblue",
  "slateblue",
  "darkslateblue",
];
// This sets the sizes the sketch is going to use 
let sizes = [0.3,0.35,0.4,0.5,0.55,0.6,0.65,0.7,0.75]

let randomColors1;
let randomColors2;
let randomColors3;
let randomColors4;

function setup() {
  createCanvas(800, 560);
  // Establishing variables to randomize color
  randomColors1 = random(colors);
  randomColors2 = random(colors);
  randomColors3 = random(colors);
  randomColors4 = random(colors);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("lavender");
  // Nested loops to create grid
  for (let column = 0; column < 5; column++) {
    for (let row = 0; row < 5.5; row++) {
      // This allows the size to change with each column
  let changeSize = sizes[row]

      // Adding sun Flower
      addSunFlower(row * 150 + 35, column * 110 + 45, changeSize);
      // Adding Flower Two
      addFlowerTwo(row * 150 + 70, column * 110 + 100,changeSize);
      // Adding Flower Four
      addFlowerFour(row * 150 + 150, column * 110 + 100, changeSize);
            //Adding Flower Three
      addFlowerThree(row * 150 + 110, column * 115 + 40, changeSize)
    }
  }
}
// This is for the first flower
function addSunFlower(x, y, size, flowerColor) {
  push();
  // allows flower to be moved
  translate(x, y);
  // Controls size of flower
  scale(size);
  fill (randomColors1);

  // This fills the color based on each flower parameters

  //This creates the petals
  for (let petalsAdded = 0; petalsAdded < 106; petalsAdded++) {
    ellipse(0, 41, 7, 45);
    rotate(310);
  }
  push();
  noStroke();

  // Bulb of the flower
  fill(randomColors4);
  ellipse(0, 0, 40);
  pop();
  pop();
}
// This is for the second flower
function addFlowerTwo(x, y, size) {
  push();
  // allows flower to be moved
  translate(x, y);
  // Controls size of flower
  scale(size);

  // This fills the color based on each flower parameters
  fill(randomColors2);

  //This creates the petals
  for (let petalsAdded = 0; petalsAdded < 11; petalsAdded++) {
    ellipse(0, 22, 30, 50);
    rotate(98);
  }
  push();
  noStroke();

  // Bulb of the flower
  fill(randomColors3);
  ellipse(0, 0, 30);
  pop();
  pop();
}
// This is for the third flower
function addFlowerThree(x, y, size) {
  push();
  // allows flower to be moved
  translate(x, y);
  // Controls size of flower
  scale(size);

  // This fills the color based on each flower parameters
  fill(randomColors3);

  //This creates the petals
  for (let petalsAdded = 0; petalsAdded < 140; petalsAdded++) {
    ellipse(0, 52, 7, 55);
    ellipse(0, 42, 7, 45);
    ellipse(0, 32, 7, 35);
    ellipse(0, 22, 7, 25);
    ellipse(0, 12, 7, 15);
    ellipse(0, 2, 7, 5);
    rotate(11);
  }
  push();
  noStroke();

  // Bulb of the flower
  fill(randomColors2);
  ellipse(0, 0, 40);
  pop();
  pop();
}
// This is for the forth flower
function addFlowerFour(x, y, size) {
  push();
  // allows flower to be moved
  translate(x, y);
  // Controls size of flower
  scale(size);

  // This fills the color based on each flower parameters
  fill(randomColors4);

  //This creates the petals
  for (let petalsAdded = 0; petalsAdded < 20; petalsAdded++) {
    arc(0, 30, 25, 26, 0, 160);
    arc(0, 25, 23, 26, 0, 160);
    arc(0, 20, 20, 26, 0, 160);
    arc(0, 15, 18, 26, 0, 110);
    arc(0, 10, 16, 26, 0, 110);
    arc(0, 6.5, 14, 26, 0, 160);
    rotate(205);
  }
  push();
  noStroke();

  // Bulb of the flower
  fill(randomColors1);
  ellipse(0, 0, 18);
  pop();
  pop();
}
