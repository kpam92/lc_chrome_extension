
var child = document.getElementById("flashcard-container");

if (child !== null) {
  document.body.removeChild(child);
}
var cardValues = [["front1","back1"], ["front2","back2"]]


var container = document.createElement("div");
container.id = 'flashcard-container'
container.className = 'no-show'
var firstDiv = document.createElement("div");
firstDiv.className = "stage";

var secondDiv = document.createElement("div");
secondDiv.className = "flashcard";
secondDiv.id = "flashcard";

var front = document.createElement("div");
front.className = "front";
front.id = 0

var back = document.createElement("div");
back.className = "back";

var frontText = document.createElement("p");
frontText.id = 'front-text';
frontText.innerText = cardValues[0][0]

var backText = document.createElement("p");
backText.id = 'back-text';
backText.innerText = cardValues[0][1]

var toggleButton = document.createElement("div");
toggleButton.id = 'toggle-button';
toggleButton.className = 'button-in';

var arrowContainer = document.createElement("div");
arrowContainer.id = 'arrow-container';

var rightButton = document.createElement("div");
rightButton.id = 'right-button';

var leftButton = document.createElement("div");
leftButton.id = 'left-button';


front.appendChild(frontText);
back.appendChild(backText);
arrowContainer.appendChild(leftButton);
arrowContainer.appendChild(rightButton);
secondDiv.appendChild(front);
secondDiv.appendChild(back);
firstDiv.appendChild(secondDiv);
firstDiv.appendChild(toggleButton);
firstDiv.appendChild(arrowContainer);
container.appendChild(firstDiv);
document.body.appendChild(container);




setTimeout(handleToggle, 500);


document.getElementById("flashcard").addEventListener("click", flipOver);
document.getElementById("toggle-button").addEventListener("click", handleToggle);

document.getElementById("right-button").addEventListener("click", changeCard);
document.getElementById("left-button").addEventListener("click", changeCard);



function changeCard() {

  var front = document.getElementById("front-text")
  var back = document.getElementById("back-text")
  var cardIndexElement = document.getElementsByClassName("front")[0]
  var idx = parseInt(cardIndexElement.id)


  if (this.id === 'right-button' && idx < cardValues.length - 1) {
    front.innerText = cardValues[idx+1][0]
    back.innerText = cardValues[idx+1][1]
    cardIndexElement.id = (idx + 1)
  } else if (this.id === 'left-button' && idx > 0) {
    front.innerText = cardValues[idx-1][0]
    back.innerText = cardValues[idx-1][1]
    cardIndexElement.id = (idx - 1)
  }
}


function flipOver() {

  var currFlash = document.getElementById("flashcard")
  if (currFlash.classList.length == 2){
    currFlash.className = 'flashcard'
  } else {
    currFlash.className = 'flashcard flipped'
  }
}
function handleToggle() {

  var container = document.getElementById("flashcard-container");
  var button = document.getElementById("toggle-button");

  if (container.className === "no-show"){
    container.className = "show-card";
    button.className = "button-out";
    // button.classList.remove("button-in");
  } else {
    container.className = "no-show";
    button.className = "button-in";
  }
}
