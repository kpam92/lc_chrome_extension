# LeetCode Flashcards Chrome Extension

This chrome extension for LeetCode allows users to study flashcards of their LeetCode notes on any page within in the site.

## How it works

1. Users must be logged in to their LeetCode accounts, and their current tab must be on the site.(This extension does not take any private information from you or your account aside from your notes)

2. If user is on the notes page while opening the chrome extension, the app will collect username, and search a connected backend API for this user. If it doesn't exist, it will save the username, as well as the notes on the active tab in the database. If user does exist, their notes are then updated.

3. If user is on any other LeetCode page, the extension will then fetch the user's notes as flashcards that will appear on the right-hand side. (Note: This won't work unless username exists in the database already. User must instantiate flashcards through opening extension on notes page prior to using them anywhere within the site. )

<a href="http://LC_chrome_extension.herokuapp.com">
  <img src="https://raw.githubusercontent.com/kpam92/LC_chrome_extension/master/app/assets/images/screenshot.png"/>
</a>

# Features & Implementation

### Users

  Usernames are parsed from the active tab, then either fetched from the database, or added. An AJAX GET request then fetches the user, along with their flashcards in the database.

  ```javascript
  // Parses username from the current tab, and sends CORS request to database
  currUsername = document.getElementsByClassName("dropdown-menu")[1].firstElementChild.firstElementChild.href.substring(21)

  var xhr = createCORSRequest('GET', "https://lcflashcards.herokuapp.com/api/users/1?username=?" + currUsername);

  ```

  ```ruby
  class Api::UsersController < ApplicationController

  # The controller action for fetching a user and their cards
  # ...

  def show

    @user = User.find_by(:username => params[:username])
    if @user
      render "api/users/show"
    end
  end

  #...
  ```

  ```javascript
  // example of response from CORS request
  const exampleUserResponse =
    {
      id: 1,
      username: "user1",
      cards: [
        {
          id: 1,
          front: '11. Container With Most Water',
          back: 'work on memoization'
        },
        {
          id: 1,
          front: '54. Spiral Matrix',
          back: 'use markers for top, bottom, left, and right'
        }
      ]
    };
  ```
### Cards

When user and cards are fetched, the extension then iterates over array of cards, and displays them in injected HTML on to current tab.

  ```javascript
  // function for toggling between each flashcard

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
  ```

  ### Soon to be up as a live Chrome Extension
