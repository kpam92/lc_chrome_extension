chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(null, {file: "content_script.js"});
  chrome.tabs.insertCSS(null, {file: "style.css"});
});

// $(document).ready(function() {
//   $('.flashcard').on('click', function() {
//     $('.flashcard').toggleClass('flipped');
//   });
// });
