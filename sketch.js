//starting positions of X and Y, rectangle size, X and Y lentgh, isDrawing standard set to "false"
let XPos = 100
let YPos = 75
let size = 10
let arrX = 26;
let arrY = 32;
let isDrawing = false;

function setup() {
  createCanvas(640, 480);

  button = createButton("Toad"); //button for toadArt
  button.position(470, 80);
  button.mousePressed(toadArt);

  button = createButton("Snake"); //button for snakeArt
  button.position(470, 160);
  button.mousePressed(snakeArt);

  button = createButton("Harry Potter"); //button for harryArt
  button.position(470, 240);
  button.mousePressed(harryArt);

  button = createButton("Rainbow"); //button for rainbowArt
  button.position(470, 320);
  button.mousePressed(rainbowArt);

  noLoop(); //makes sure loop won't continue
}

function draw() {
  background(82, 82, 82);

  noStroke();
  fill(224, 224, 224);
  rect(XPos, YPos, 260, 320); //background rectangle to help see how big pixel art will be
}

function toadArt() {
  if (isDrawing === true) { //checking whether the art is still being drawn, or if it's done
    return;
  }
  isDrawing = true;

  let toadColors = [ //2D array to fill in toadArt
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 11, 11, 11, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 11, 11, 11, 1, 1, 0, 0],
    [0, 0, 1, 1, 11, 11, 11, 11, 2, 3, 3, 3, 4, 4, 4, 4, 4, 3, 2, 11, 11, 11, 2, 2, 1, 0],
    [0, 1, 4, 3, 2, 11, 11, 11, 11, 2, 3, 3, 3, 3, 4, 4, 3, 3, 11, 11, 11, 2, 3, 4, 1, 0],
    [0, 1, 4, 4, 3, 11, 11, 11, 11, 11, 2, 3, 3, 3, 3, 3, 3, 2, 11, 11, 11, 2, 3, 4, 4, 1],
    [1, 3, 4, 4, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 2, 3, 3, 4, 1],
    [1, 3, 4, 4, 3, 11, 11, 11, 11, 11, 2, 1, 1, 1, 1, 1, 1, 2, 11, 11, 11, 2, 3, 3, 3, 1],
    [0, 1, 4, 3, 2, 11, 11, 11, 11, 2, 1, 5, 6, 6, 6, 5, 5, 1, 2, 11, 11, 2, 3, 3, 1, 0],
    [0, 1, 3, 2, 11, 11, 11, 11, 2, 1, 5, 6, 6, 6, 6, 6, 6, 5, 1, 2, 11, 2, 2, 3, 1, 0],
    [0, 0, 1, 11, 11, 11, 11, 2, 1, 5, 6, 6, 6, 1, 6, 6, 1, 6, 1, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 1, 6, 6, 6, 6, 1, 6, 6, 1, 6, 5, 1, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 2, 1, 5, 6, 6, 6, 6, 1, 6, 6, 1, 6, 5, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 6, 6, 6, 6, 1, 1, 6, 6, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 6, 6, 6, 6, 6, 6, 5, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 5, 1, 7, 8, 1, 5, 5, 5, 1, 7, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 6, 6, 1, 8, 8, 1, 5, 6, 6, 1, 8, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 6, 6, 6, 5, 1, 8, 7, 1, 5, 5, 5, 1, 8, 1, 5, 6, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 6, 6, 6, 5, 1, 7, 8, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 6, 1, 0, 0, 0],
    [0, 0, 0, 1, 5, 6, 5, 5, 1, 7, 7, 1, 2, 11, 11, 11, 11, 1, 1, 5, 5, 5, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 11, 11, 11, 11, 11, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 11, 11, 11, 11, 11, 11, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 11, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 9, 10, 10, 9, 1, 1, 1, 1, 1, 1, 9, 9, 10, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 9, 9, 9, 1, 9, 9, 9, 9, 9, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 9, 1, 9, 9, 9, 9, 9, 9, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < arrY; i++) { //nested loop to draw all the pixels
    for (let j = 0; j < arrX; j++) {
      setTimeout(function () {
        switch (toadColors[i][j]) { //switch to assign a color to the numbers used in the 2D array
          case 0:
            fill(224, 224, 224); //background fill
            break;
          case 1:
            fill(0, 0, 0); //black
            break;
          case 2:
            fill(204, 204, 204); //light gray
            break;
          case 3:
            fill(192, 1, 6); //dark red
            break;
          case 4:
            fill(237, 29, 17); //lighter red
            break;
          case 5:
            fill(236, 198, 55); //darker skin
            break;
          case 6:
            fill(238, 237, 180); //lighter skin
            break;
          case 7:
            fill(6, 26, 201); //dark blue
            break;
          case 8:
            fill(59, 123, 255); //lighter blue
            break;
          case 9:
            fill(96, 35, 4); //dark brown
            break;
          case 10:
            fill(177, 109, 12); //lighter brown
            break;
          case 11:
            fill(255, 255, 255); //white
            break;
        }

        if ((i + 1) === arrY && (j + 1) === arrX) {
          isDrawing = false; //checking if the art is done being drawn
        }

        noStroke();
        rect(XPos + (j * 10), YPos + (i * 10), size, size); //rectangles that the nested loop will draw
      }, 100 * i);
    }
  }
}

function snakeArt() {
  if (isDrawing === true) { //checking whether the art is still being drawn, or if it's done
    return;
  }
  isDrawing = true;

  let snakeColors = [ //2D array to fill in snakeArt
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 5, 2, 5, 2, 5, 2, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 1, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 4, 1, 1, 3, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 3, 3, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 3, 3, 5, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 1],
    [0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 5, 1],
    [0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 0, 0, 1, 2, 1],
    [0, 0, 0, 1, 3, 3, 5, 5, 2, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 2, 1, 0, 1, 5, 1],
    [0, 0, 1, 1, 3, 3, 5, 5, 5, 2, 1, 3, 3, 3, 3, 3, 1, 5, 5, 5, 5, 1, 1, 2, 5, 1],
    [0, 1, 5, 5, 1, 3, 3, 5, 5, 5, 2, 1, 1, 1, 1, 1, 2, 5, 5, 5, 5, 1, 2, 5, 1, 0],
    [1, 5, 5, 2, 1, 3, 3, 3, 5, 5, 5, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 1, 2, 5, 1, 0],
    [1, 5, 5, 5, 2, 1, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 5, 1, 0],
    [1, 5, 5, 5, 5, 2, 1, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 1, 2, 5, 5, 1, 0],
    [1, 3, 5, 5, 5, 5, 2, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 5, 5, 3, 1, 0],
    [0, 1, 5, 5, 5, 5, 5, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 5, 5, 5, 1, 0, 0],
    [0, 1, 3, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 3, 1, 0, 0],
    [0, 0, 1, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < arrY; i++) { //nested loop to draw all the pixels
    for (let j = 0; j < arrX; j++) {
      setTimeout(function () {
        switch (snakeColors[i][j]) { //switch to assign a color to the numbers used in the 2D array
          case 0:
            fill(224, 224, 224); //background fill
            break;
          case 1:
            fill(0, 0, 0); //black
            break;
          case 2:
            fill(32, 178, 170); //lighter green/blue
            break;
          case 3:
            fill(173, 255, 47); //bright green
            break;
          case 4:
            fill(255, 105, 180); //tounge
            break;
          case 5:
            fill(0, 139, 139); //dark green/blue
            break;
        }

        if ((i + 1) === arrY && (j + 1) === arrX) {
          isDrawing = false; //checking if the art is done being drawn
        }

        noStroke();
        rect(XPos + (j * 10), YPos + (i * 10), size, size); //rectangles that the nested loop will draw
      }, 100 * i);
    }
  }
}

function harryArt() {
  if (isDrawing === true) { //checking whether the art is still being drawn, or if it's done
    return;
  }
  isDrawing = true;

  let harryColors = [ //2D array to fill in harryArt
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 2, 1, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 1, 1],
    [8, 0, 0, 0, 0, 0, 2, 1, 3, 2, 1, 1, 2, 3, 2, 2, 2, 3, 2, 1, 1, 2, 3, 2, 2, 2],
    [9, 8, 9, 0, 0, 0, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2],
    [0, 0, 8, 8, 0, 0, 0, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 0],
    [0, 0, 0, 8, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 9, 8, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 10, 5, 10, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 1, 1, 6, 10, 6, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 1, 6, 6, 6, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 6, 6, 6, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 6, 6, 1, 1, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 7, 1, 1, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 0, 7, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 0, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 0, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < arrY; i++) { //nested loop to draw all the pixels
    for (let j = 0; j < arrX; j++) {
      setTimeout(function () {
        switch (harryColors[i][j]) { //switch to assign a color to the numbers used in the 2D array
          case 0:
            fill(224, 224, 224); //background fill
            break;
          case 1:
            fill(0, 0, 0); //black
            break;
          case 2:
            fill(227, 197, 151); //skin
            break;
          case 3:
            fill(99, 96, 92); //glasses
            break;
          case 4:
            fill(98, 71, 59); //wand
            break;
          case 5:
            fill(190, 46, 54); //red
            break;
          case 6:
            fill(171, 170, 166); //light gray
            break;
          case 7:
            fill(91, 93, 93); //dark gray
            break;
          case 8:
            fill(153, 51, 255); //purple
            break;
          case 9:
            fill(204, 153, 255); //lighter purple
            break;
          case 10:
            fill(255, 255, 255); //white
            break;
        }

        if ((i + 1) === arrY && (j + 1) === arrX) {
          isDrawing = false; //checking if the art is done being drawn
        }

        noStroke();
        rect(XPos + (j * 10), YPos + (i * 10), size, size); //rectangles that the nested loop will draw
      }, 100 * i);
    }
  }
}

function rainbowArt() {
  if (isDrawing === true) { //checking whether the art is still being drawn, or if it's done
    return;
  }
  isDrawing = true;

  let rainbowColors = [ //2D array to fill in rainbowArt
    [4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 0, 0, 0],
    [5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0],
    [6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
    [6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2],
    [0, 0, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2],
    [0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2],
    [0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6],
  ];

  for (let i = 0; i < arrY; i++) { //nested loop to draw all the pixels
    for (let j = 0; j < arrX; j++) {
      setTimeout(function () {
        switch (rainbowColors[i][j]) { //switch to assign a color to the numbers used in the 2D array
          case 0:
            fill(224, 224, 224); //background fill
            break;
          case 1:
            fill(0, 0, 0); //black
            break;
          case 2:
            fill(255, 0, 0); //red
            break;
          case 3:
            fill(255, 128, 0); //orange
            break;
          case 4:
            fill(255, 255, 0); //yellow
            break;
          case 5:
            fill(0, 255, 0); //green
            break;
          case 6:
            fill(0, 128, 255); //blue
            break;
        }

        if ((i + 1) === arrY && (j + 1) === arrX) {
          isDrawing = false; //checking if the art is done being drawn
        }

        noStroke();
        rect(XPos + (j * 10), YPos + (i * 10), size, size); //rectangles that the nested loop will draw
      }, 100 * i);
    }
  }
}