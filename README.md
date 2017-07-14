# LeetCode Flashcards Chrome Extension

This chrome extension for LeetCode allows users to study flashcards of their LeetCode notes on any page within in the site.

## How it works

1. Users must be logged in to their LeetCode accounts, and their current tab must be on the site.(This extension does not take any private information from you or your account aside from your notes)

2. If user is on the notes page while opening the chrome extension, the app will collect username, and search a connected backend API for this user. If it doesn't exist, it will save the username, as well as the notes on the active tab in the database. If user does exist, their notes are then updated.

3. If user is on any other LeetCode page, the extension will then fetch the user's notes as flashcards that will appear on the right-hand side. (Note: This won't work unless username exists in the database already. User must instantiate flashcards through opening extension on notes page prior to using them anywhere within the site. )

<a href="http://LC_chrome_extension.herokuapp.com">
  <img src="https://raw.githubusercontent.com/kpam92/LC_chrome_extension/master/app/assets/images/screenshot.png"/>
</a>

<!-- ## Features & Implementation

### Users

  Users have a "username" and "profile_pic" url.

  ```javascript
  const exampleItemState = {
    1: {
      id: 1,
      username: "user1",
      profile_pic: "https://www.example.com/image1"
    },
    2: {
      id: 2,
      username: "Widget",
      profile_pic: "https://www.example.com/image2"
      }
    }
  };
  ```
### Photos

Photos consist of an "image_url", "description", and "author_id". Because every photo displayed on the feed is accompanied by the author's profile_pic and username, the database tables where then denormalized to avoid excessive querying, and each photo contains both "user_pic" and "username".

  ```javascript
  const examplePhotoState = {
  1: {
    image_url: 'https://www.example.com/image3',
    description: 'skydiving',
    user_pic: 'https://www.example.com/image1',
    username: 'user1'
    }
  };
  ```
When a user is fetched from the database and placed in state to show their profile, the jbuilder view also fetches all the user's photos through a partial. This makes it more accessible in the user state to extrapolate all photos to display.

  ```javascript
  json.extract! user, :id, :username, :profile_pic

  json.photos do
    json.partial! 'api/photos/photo', collection: user.photos, as: :photo
  end
  ```

### Likes

  Likes have both an 'photo_id' and 'author_id'.

  When the user clicks on the heart icon, it switches the class through a change in the component's state, then triggers an action to either delete or add the like into the database.

## Future Directions for the Project

I plan to add small adjustments to the project to provide better UX for the user

### Jest Testing

In process of implementing Jest tests on Redux reducers.

### Adding and Commenting on Photos

This next step in this project is to create comment capabilities on photos, as well as allowing the user to upload through the Cloudinary API. -->
