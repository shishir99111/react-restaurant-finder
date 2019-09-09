# React Restaurant Finder

A application which summarises all the restautant in Location near you or the location provided utilizing Yelp Fusion API, Google Map JS API, Places API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Requirement

- Nodejs ^v8.x.x

### Setup Env config
> cd <PWD>/src/Config
> nano index.js
    module.exports = {
        SEARCH_API_ENABLED: false,
        GOOGLE_API_KEY: '<YOU GOOGLE MAP API KEY HERE>',
        YELP_SERVER: 'http://localhost:4000',
    }
> cd <PWD>/server
> nano .env
    PORT=4000
    NODE_ENV=dev
    YELP_API_KEY='<YOUR YELP KEY>'

# Setup Codebase (Considering Env config completed)
> Go to project directory
> npm install
> npm start     // Development mode
> cd server     // In new terminal
> node index.js // start server for yelp service

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### ToDO
- Mobile Header Functions
- Instruction to generate Production build
- Add Redux