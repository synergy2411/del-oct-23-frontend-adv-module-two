# CLI based App

- node index.js add --title="..." --body="..."
  // Store note data in JSON file
- node index.js remove --title="..."
  // to remove the note from JSON file based upon the title supplied
- node index.js list
  // to list down all the notes available in JSON file
- node index.js read --title="..."
  // to read individual item from JSON file

# Semantic Versioning (X.Y.Z)

X - Major Version : New fetuares added in the app with code base change
Y - Minor Version : New features added in the app without code base change
Z - Patch Version - bug fixes / performance improvements

semver.orgs

> npx create-react-app awesome-app

# React Bootstrap Process

- npm start > starts the webpack-dev-server
- serves the public/index.html
- webpack loads src/index.js
- index.js imports App.js and load it as a component o nthe browser
