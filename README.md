Car Data Pool
In order to make a car insurance, the customer has to choose his/her car from a list. We first start with the make of the car (e.g. VW).
We have a list of all makes that are available in the German market. The customer can either scroll through this list or search letter by letter.

1. Implement a component that makes it easy for the customer to get to the make he has fast.
a. If he enters a letter (e.g.“V”), the list reduces to all makes
starting with this letter (e.g., “VW”, “Volvo”).

2. The original list does not include synonyms like (“VW” = “VOLKSWAGEN”). How would you include this?


For Development environment:
1. Install NPM. (https://docs.npmjs.com/cli/install)
2. Go to directory and run: sudo npm install (this may take some time).
3. run: sudo npm start (this will start a local webpack server).
4. Open http://localhost:3016/ in browser.

For Production environment:
1. Go to directory and run: sudo npm install.
2. sudo npm run prod
3. install any local web server like harp(https://harpjs.com/).
4. run "harp server" (this will run a local server on some port, in my case it's 9000).
5. Open "http://localhost:9000/" in browser.

For Test environment:
1. sudo npm install
2. sudo npm test


Tech Used:

ReactJS + Flux
ECMAScript 6
Webpack, Webpack-dev-server
LESS
React-Router
Jest

