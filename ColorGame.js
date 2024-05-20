var numSquare = 6;
var colours = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();
function init() {
  setupModeButtons();
  setUpSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquare = 3) : (numSquare = 6);
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //ADD THE CLICK LISNTERS//
    squares[i].addEventListener("click", function () {
      //GRAB COLOUR OF THE CLICKDE EVENT//
      var clickedColor = this.style.background;
      //COMPARE THE COLOURS//
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!!!";
        changeColor(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play Again??";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!!!";
      }
    });
  }
}

function reset() {
  colours = genrateRandomColors(numSquare);
  //pick a new random color form thw array//
  pickedColor = pickColor();
  //change the display of the colours//
  colorDisplay.textContent = pickedColor;
  //rest the button text//
  resetButton.textContent = "New Colors";
  //to emtyp the messg//
  messageDisplay.textContent = "";
  //chnge colours of the sqaure//
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}
// //for setting the game to the easy mode//
// easybtn.addEventListener("click", function () {
//   hardbtn.classList.remove("selected");
//   easybtn.classList.add("selected");
//   numSquare = 3;
//   colours = genrateRandomColors(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colours[i]) {
//       squares[i].style.background = colours[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
// // dor setting the gama to the hard mode//
// hardbtn.addEventListener("click", function () {
//   hardbtn.classList.add("selected");
//   easybtn.classList.remove("selected");
//   numSquare = 6;
//   colours = genrateRandomColors(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.background = colours[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function () {
  reset();
  //   //generate all new color//
  //   colours = genrateRandomColors(numSquare);
  //   //pick a new random color form thw array//
  //   pickedColor = pickColor();
  //   //change the display of the colours//
  //   colorDisplay.textContent = pickedColor;
  //   //rest the button text//
  //   resetButton.textContent = "New Colors";
  //   //to emtyp the messg//
  //   messageDisplay.textContent = "";
  //   //chnge colours of the sqaure//
  //   for (var i = 0; i < squares.length; i++) {
  //     squares[i].style.background = colours[i];
  //   }
  //   h1.style.background = "steelblue";
  //   hardbtn.classList.add("selected");
  //   easybtn.classList.remove("selected");
});

//FUNTION FOR CHANING COLOR OF ALLL SQAYRE TO SAME //
function changeColor(color) {
  //LOOP THROUHG ALL SQAURE//
  for (var i = 0; i < squares.length; i++) {
    //CHNAGE EACH COLOUR TO MATCH GIVEN COLOUR//
    squares[i].style.background = color;
  }
}
//chooing random color number//
function pickColor() {
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

// geneatre random color//
function genrateRandomColors(num) {
  //make an array//
  var arr = [];
  // get random number and push into them to array//
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  //return the arr//
  return arr;
}

function randomColor() {
  // pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a green from0-255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  // return the  ranodm number//
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
