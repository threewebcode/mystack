# Code Understanding

### Pages

**app**

It sets up the main configuration and routing logic for the app. It also includes authentication context, session management, and integration with the "wagmi" library for blockchain-related functionality.

The code checks the current route using the `useRouter` hook from Next.js and conditionally renders different components based on the route. If the route is one of the specified paths ("/", "/signup", "/forgot-password", "/login", "/reset-password"), it renders the authentication-related components. Otherwise, it renders a different set of components including a tutorials wrapper.

The code also registers a service worker for Firebase Cloud Messaging, allowing the app to receive push notifications.

**index**

It defines a functional component called `HomePage`. Inside the `HomePage` component, there is a return statement that renders JSX elements. In this case, it renders a `MainLayout` component and nested components like `HomeHerov2`. There are also commented-out components like `StartEarning`, `TopCompanies`, and `CardGiveaway`. These components are not rendered in the current code, but they can be uncommented to include them in the page content.

**giveaways**

It fetches data from Firebase Firestore and displays featured companies and live competitions. It also includes functionality for launching a tutorial for new users.

**redirect**

The component first checks for any errors in the query parameters, and if there are none, it retrieves the Discord access token using the authorization code from the query parameters. It then saves the access token and user data to local storage using the `Storage` helper class, and joins the Discord server using the `joinDiscordServerGuild` function from `discordUtils`.

If joining the server is successful, it redirects the user to a page with a success message and the giveaway ID in the query parameters. If there is an error, it redirects the user to a page with an error message and the giveaway ID in the query parameters.

The component also uses the `toast` library to display success and error messages to the user.

**twitter auth**

The component imports various dependencies such as axios for making HTTP requests, react-router for routing, react-hot-toast for displaying toast notifications, and react-responsive-modal for displaying modals. It also imports types related to Twitter API responses.

The component defines state variables using the useState hook, such as "open" to control the visibility of the modal, and "tweetData" to store data related to a tweet. It also defines functions to open and close the modal.

The component extracts query parameters from the router, such as "code", "state", and "error" which may be used for Twitter authentication. It also retrieves a "giveAwayId" from local storage.

Inside the useEffect hook, it checks for errors or successful authentication, and if successful, it retrieves a Twitter token using the "twitterAuth" utility. Depending on the status of the tweet (tweet, retweet, or followUser), it calls the appropriate function from the "TwitterClientMethods" utility to perform the corresponding action. On success, it redirects to a specific route and opens the modal.

The component also defines helper functions like "returnTweeterFunc" to determine the appropriate Twitter action based on the status, and "redirectOnError" and "redirectOnSuccess" to handle error and success scenarios respectively.

The component renders a loader while waiting for the authentication process to complete. If the modal is open, it renders the "ModalComp" component with the "ReturnTweetLik" component as its child.

The "ModalComp" component is a wrapper for the "Modal" component from react-responsive-modal, providing custom CSS classes and handling the onClose event.

The "ReturnTweetLik" component retrieves the tweet data from local storage and conditionally renders the appropriate action link component (TweetLink, RetweetLink, or FollowLink) based on the status.

**api**

The MoralisNextApi function is being exported as the default export of the module. It takes an object as its argument, which includes the following properties:

- `apiKey`: This property is used to provide the Moralis API key. It is likely retrieved from the environment variable `process.env.MORALIS_API_KEY` or an empty string if the variable is not defined.

- `authentication`: This property is an object that configures the authentication settings for the Moralis backend. It includes the following properties:
  - `domain`: This property is likely used to specify the domain for authentication. It is an empty string in the code you provided, so it may need to be replaced with the appropriate domain.
  - `uri`: This property is used to specify the URI for the NextAuth backend. It is likely retrieved from the environment variable `process.env.NEXTAUTH_URL`.
  - `timeout`: This property sets the timeout duration for authentication requests to 120 seconds (2 minutes).

It uses Telegraf library for creating a Telegram bot. The code handles new chat members and listens for messages sent by the members. It keeps track of users who have sent the correct referral ID and performs various operations based on the referral ID.

1. Imports necessary modules and libraries.
2. Creates a new instance of the Telegraf bot using the Telegram bot token.
3. Initializes a map to keep track of users and their referral ID status.
4. Defines a function to find users based on a referral ID.
5. Defines a function to update the referral ID status for a user.
6. Defines a function to update the entries for a user in a giveaway.
7. Handles the "new_chat_members" event, which is triggered when new members join a chat. It sends a welcome message and asks for the referral ID.
8. Handles any text message sent by users in the chat.
9. Checks if the user has already sent the correct referral ID.
10. If the message matches a specific format ("/join/{referralId}"), it extracts the referral ID and checks if it is valid. If valid, it updates the referral ID status and performs entry updates.
11. If the user has not sent the correct referral ID, it checks if the text matches a valid referral ID. If valid, it updates the referral ID status and performs entry updates.
12. Exports an async function that handles the incoming requests to the API endpoint. It passes the request body to the Telegraf bot for processing.

**users**

The dashboard page displays a dashboard for users who have participated in giveaways. It retrieves data from Firebase and displays it in different sections, such as live events, followed companies, and events history. It also includes some conditional rendering based on the user's type (company or user) and a loader while the data is being fetched.

The user profile displays the user's personal information, security info, linked accounts, and notifications. The user can edit their personal information, security info, and linked accounts. They can also enable/disable notifications and verify their email address.

The component uses various hooks and libraries such as react-hook-form for form validation, react-hot-toast for displaying toast messages, and firebase for authentication and database operations. It also uses custom hooks like useAuth and useUserData to access authentication and user data.

The component includes conditional rendering based on the user's authentication status and email verification status. It also handles image uploading and cropping using Firebase storage.

The user can connect/disconnect their MetaMask wallet and view their wallet addresses. They can also connect/disconnect their social media accounts like Google and Facebook.

**company**

It imports various dependencies such as React, Image, and others. It also imports functions and components from external files and libraries. The component fetches data from a Firestore database and renders a list of giveaways. It also includes some conditional rendering and event handling logic.

### Components

**main layout**

The main layout component is used to create the main layout structure for a web page. It imports various dependencies from Firebase and other components.

The component takes in a "children" prop, which represents the content to be rendered within the layout. It also uses the useUserData and useTour hooks from custom context providers.

Inside the component, there are several state variables defined using the useState hook, including loading, giveaways, and featuredCompanies.

There are also several useEffect hooks that handle fetching data from Firebase and performing actions based on the fetched data. For example, the launchTutorial function is called when userData changes and sets up a tutorial based on the user's data.

The getGiveaways and getCompaniesData functions fetch data from the Firestore database and update the state variables accordingly.

The return statement contains the JSX code that represents the main layout structure. It includes a loader component, a sidebar component, a header component, the main content area (represented by the "children" prop), a footer component, and a mobile navigation component.

**mobile header**

It imports necessary dependencies such as useState from React, Lottie for animation, and various icons from the Heroicons library. It also imports the logo animation from a JSON file and the HeaderBizUtility component.

The component defines a state variable called "navbar" using the useState hook. It is initially set to false.

Inside the return statement, there is a navigation element with a class name for styling. 

There is a button that toggles the value of the "navbar" state when clicked. Depending on the value of "navbar", it renders either the ChevronUpIcon or the ChevronDownIcon.

Inside a div, there is another div that has conditional styling based on the value of "navbar". If "navbar" is true, it has the "block" class, otherwise it has the "hidden" class. Inside this div, the HeaderBizUtility component is rendered.

**home hero**

This component is responsible for rendering the hero section of a website. The hero section includes a headline, description, and a button for registration. It also includes an image of giveaways and a section for step-by-step instructions. The component uses the useAuth hook from the authcontext to handle authentication and display an authentication modal.



