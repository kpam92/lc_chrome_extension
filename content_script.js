document.body.style.backgroundColor="aliceblue"

var child = document.getElementById("container");

if (child !== null) {
  var child = document.getElementById("container");
  document.body.removeChild(child);
}

var container = document.createElement("div");
container.id = 'container'
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

front.appendChild(frontText);
back.appendChild(backText);
secondDiv.appendChild(front);
secondDiv.appendChild(back);
firstDiv.appendChild(secondDiv);
container.appendChild(firstDiv);
document.body.appendChild(container);
var node = document.createElement("P");
node.innerText = 'hi';
document.body.appendChild(node);

document.getElementById("flashcard").addEventListener("click", handler);


// The handler also must go in a .js file
function handler() {

  var currFlash = document.getElementById("flashcard")

  if (currFlash.classList.length == 2){
    currFlash.className = 'flashcard'
  } else {
    currFlash.className = 'flashcard flipped'
  }
}
