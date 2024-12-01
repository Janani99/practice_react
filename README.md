<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->



# User Story: Sentence Analyzer for Twitter Posts (Loop)

**As a** user,  
**I want** a tool that fetches and analyzes Twitter posts,  
**so that** I can view processed insights like duplicate words removal, the longest word, and counts of articles and prepositions.

---

## Acceptance Criteria

### **Feature 1: Fetch Latest Posts**

1. The user clicks the "Get Latest Posts" button.
2. Posts are fetched from the remote endpoint: `https://api.jsonbin.io/v3/b/67374026ad19ca34f8ca8b6e`.
3. API request includes the required headers:
   - `Content-Type`: `application/json`
   - `X-Master-Key`: `$2a$10$zkh8bWHI.R1l1jqXc.Gl2u4UFOwSHuUTN5d4u4ZSAOu7wEsf9Pj1e`
4. Posts are displayed in the UI after successful retrieval.

---

### **Feature 2: Remove Duplicate Words**

1. Analyze each post to find and remove repeated or duplicated words in the text.

---

### **Feature 3: Find the Longest Word**

1. Identify the longest word in the text of each post.

---

### **Feature 4: Count Articles and Prepositions**

1. Count the number of **articles** (`a`, `an`, `the`) in the text of each post.
2. Count the number of **prepositions** (`in`, `at`, `on`, `of`, `to`, `by`) in the text of each post.

---

### **Feature 5: Display Analyzed Information**

1. The analyzed data (features 2, 3, and 4) for each post is displayed in the UI.
2. The UI should follow the design shown in `ss-loop.jpg`.

---

### **Feature 6: Add New Post**

1. The user can click the "Add Post" button to input a new post.
2. The same analysis (features 2, 3, and 4) is performed on the new post.
3. The analyzed results for the new post are displayed in the UI alongside the fetched posts.

---

## Notes

- **Articles**: `a`, `an`, `the`.
- **Prepositions**: `in`, `at`, `on`, `of`, `to`, `by`.
