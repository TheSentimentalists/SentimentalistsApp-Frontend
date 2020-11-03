### SentimentalistsApp-Frontend
The frontend react app for *The Sentimentalists* article analysis service.

![Screenshot of frontend](https://github.com/TheSentimentalists/SentimentalistsApp-Frontend/blob/master/docs/screenshot.png?raw=true)

## Give us a go!
You can visit the live app at [https://thesentimentalists.github.io/](https://thesentimentalists.github.io)!

## Getting Started Locally:
To get started with a local development copy, simply:
1. Clone the repo
2. Run `npm install` to get all the dependencies installed
3. Run `npm start` to open the development server!

## Deploying:
This repo is automatically built and deployed using Github Actions (see the `.github/workflows/node.js.yaml` file). It is built using the following steps:
1. Clone the repo
2. Run `npm ci` (same `npm install`)
3. Run `npm run build` (creates a production ready version of the app)
4. Upload the contents of the `build/` folder to your chosen hosting location!

The deployment script automatically deploys the built app to [TheSentimentalists.github.io](https://github.com/TheSentimentalists/TheSentimentalists.github.io).

## Folder Structure:

The SENTIMENTALISTSAPP-FRONTEND is divided into the following folders:

### `public/`
Contains public static assets such as index.html and favicons.


### `src/`
Contains the JSX sourcecode for the React application

#### `src/components/`
Contains the various components used by the React app - different pages, gauges and all kinds of fun!
