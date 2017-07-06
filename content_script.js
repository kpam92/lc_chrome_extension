document.body.style.backgroundColor="aliceblue"
var firstDiv = document.createElement("div");
firstDiv.className = "stage";

var secondDiv = document.createElement("div");
secondDiv.className = "flashcard";

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
document.body.appendChild(firstDiv);
var node = document.createElement("P");
node.innerText = 'hi';
document.body.appendChild(node);
