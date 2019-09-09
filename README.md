# React Restaurant Finder

A application which summarises all the restautant in Location near you or the location provided utilizing Yelp Fusion API, Google Map JS API, Places API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


![Desktop Version](https://user-images.githubusercontent.com/13572684/64541229-25ace900-d33f-11e9-89ec-514da77dbfee.png)



![Mobile Version](https://user-images.githubusercontent.com/13572684/64541209-1e85db00-d33f-11e9-8996-b6fa1707e9ab.png)

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
    NODE_ENV=PRODUCTION
    YELP_API_KEY='<YOUR YELP KEY>'

# Setup Prod Codebase
> Go to project directory
> npm install
> npm run build // Production mode
> cd server     // In new terminal
> npm install
> node index.js
> Go to http://localhost:4000

# Setup Dev Codebase (Considering Env config completed)
> Go to project directory
> npm install
> npm start     // Development mode
> cd server     // In new terminal
> npm install
> node index.js // start server for yelp service (to avoid CORS Issue)
> Go to http://localhost:3000

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
- Add Redux