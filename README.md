# Software Architect @ iMoney
Hello! Thanks so much for your interest in joining iMoney tech team!

Below is the technical test for you! Please do let us know if you have any questions! You can email us at: tech@imoney-group.com!
Best of luck!

Technical description
===========

We expect you to be familiar with at least the following technologies and show the ability in your coding and architecture!

### Frontend technologies:

* ECMA 6
* Frontend framework e.g. VueJS/AngularJS/ReactJS
* Webpack
* HTML/CSS as needed

### Backend technologies:

* NodeJS 8+ with ECMA 6
* Golang 1+
* Python 3+
* Redis or anything else of that kind

### Deployment

* Docker & Kubernetes
* or Serverless framework with AWS lambda or Cloud functions if you prefer so!

### Testing

* Integration testing
* Unit testing

Intro and background info
---------

iMoney helps consumers compare and apply for financial products online, easily! We have products like credit cards, personal loans, broadband etc. We expose the product information in JSON format and our micro-services consume those JSON data and output something like this: https://www.imoney.my/personal-loan for example.

We would like you to see if you can build a similar personal loan web application! Here are the goals:

## Goal 1
**Lead collector**

lets create a micro-service for storing the leads. The lead collector application should have the following features:

* Service for storing the following fields only: 1) name (text), 2) email (text), 3) phone (text).
* This service must be highly available and fault tolerant.
* System should take the leads and store in a data storage.
* If the data storage is unavailable for some reasons, system should automatically retry every 1 minute until the data storage is up.
* Since we receive high volume of leads, the cost of network communication with the frontend app (Goal 2) needs to be minimised. We need something better, more optimized, more efficient than JSON!

Note: You can use Golang/NodeJS/Python for this goal.

## Goal 2
**Frotnend app**

Prepare your backend application. The following URL has all the personal loan information in JSON format:
https://www.imoney.my/json/personal-loan-desktop.json

* Your app should read the URL (https://www.imoney.my/json/personal-loan-desktop.json) from the configuration
* Load all data in memory (redis) 
* You should serve the same data as json from your app's route e.g. http://localhost:3000/json/personal-loan-desktop.json
* and be ready for the next goal!

Note: This is your opportunity to show your backend skills. Please try over-engineering and showoff your skills!

## Goal 3
**Frontend app UI**

Create listing page like this one: https://www.imoney.my/personal-loan

* You should have an application route called /personal-loan
* On this route, your frontend framework should take over and render a page like https://www.imoney.my/personal-loan
* Data for this page should be served from from your app's route e.g. http://localhost:3000/json/personal-loan-desktop.json.
* You should use Webpack to optimize, pack your assets, and serve to browser!
* At iMoney we prefer isomorphic coding and server side rendering.

Note: This is your opportunity to show your JS skills. Try over-engineering! Use advanced JS features like Async/Await, Generators, Event based operations whenever possible! Isomorphic javascript with server-side rendering (for SEO) is common at iMoney.

## Goal 4
**Frontend app calculator component**

Create sidebar which contains :
```
Loan Amount (input box) .
Tenures (drop down list from 1 to 5).
```
Assueme the Interest rate is = 5.99%

Calculate Monthly repayment for each product :
```
  Monthly Repayment = Monthly Interest + Principal Installment;
  Monthly Interest = Yearly Interest / 12;
  Yearly Interest = (Loan Amount * interest Rate) / 100;
  Principal Installment = Loan Amount / (Selected Tenure * 12);
```

Be aware that if you change any input it should change the calculated value accordingly

Note: This is your opportunity to show your skills as a JS Architect. You may want to think about how data flows in your JS app (Vuex/Redux)!

## Goal 5
**Frontend app Form component**

When user clicks on apply, a form should show up. The form should have the following fields:
* Name
* Email
* Phone

When a user clicks on submit button, it should submit the data to the fronend app.

Note: The frontend app should also asynchronously send the lead to the Lead collector (Goal 1).

## Goal 6
**Security**

Young hackers are always around and growing. They need a playground to test their toys however iMoney can't be the target!

Lets implement a rate limiter (redis?):

* A single IP should not be able to hit your app more than 100 times per min
* Integration of oAuth (oauth.io), JWT
* Anything else you would like to do to secure your app?

## Goal 7
**Deployment**

Awesome! Good work! Deployment time!

* All your services should be in containers (docker).
* Use Kubernetes to deploy the whole stack.
* Write a single deployment file for us which should do everything needed to have your app up and running. Your deployment file should work on Linux/Mac at least!

## Goal 8
**Happy testing!**

Last but not the least, testing! You can follow TDD or FDD!

* There should be a way to test the application features and functions.
* Must have integration tests!
* Must have unit tests!

### Submit your code
- Please don't forget to write your readme file which should contain what/why your have done things in certain way! Documentation is highly appreciated!
- Your solution should be committed back into this repository like you would do in a normal project.
- You can commit and push as many times as you want.
- We prefer https://12factor.net/.
- We value a clean coding style. It would be nice if you follow something like Airbnb's JavaScript Style Guide!

Best of luck!