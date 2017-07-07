
var child = document.getElementById("flashcard-container");

if (child !== null) {
  document.body.removeChild(child);
}

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

var back = document.createElement("div");
back.className = "back";

var frontText = document.createElement("p");
frontText.innerText = "front"
var backText = document.createElement("p");
backText.innerText = "back"

var toggleButton = document.createElement("div");
toggleButton.id = 'toggle-button';

front.appendChild(frontText);
back.appendChild(backText);
secondDiv.appendChild(front);
secondDiv.appendChild(back);
firstDiv.appendChild(secondDiv);
firstDiv.appendChild(toggleButton);
container.appendChild(firstDiv);
document.body.appendChild(container);




setTimeout(handleToggle, 500);


document.getElementById("flashcard").addEventListener("click", handler);
document.getElementById("toggle-button").addEventListener("click", handleToggle);


// The handler also must go in a .js file
function handler() {

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
