# iMoney Senior Software Engineer Test
Hello! Thanks so much for your interest in joining iMoney tech team!

Below is the technical test for you! Please do let us know if you have any questions! You can email us at: tech@imoney-group.com!
Best of luck!

Technical description
===========

We expect you to be familiar with the following and show the ability in your coding!
-------------

### Frontend technologies:

* ECMA 6
* Frontend framework e.g. VueJS/AngularJS/ReactJS
* Webpack
* HTML/CSS as needed

### Backend technologies:

* NodeJS/Python/Golang
* Redis or anything of that kind

### Deployment

* Docker
* Kubernetes/Docker-compose
* or Serverless framework if you prefer so!

### Testing

* Functional testing
* Unit testing

Intro and background info
---------

iMoney helps consumers compare and apply for financial products online, easily! We have products like credit cards, personal loans, broadband etc. We expose the product information in JSON format and our micro-services consume those JSON data and output something like this: https://www.imoney.my/personal-loan for example. 

We would like you to see if you can build a similar personal loan web application! Here are the goals:

## Goal 1
Prepare your backend application. The following URL has all the personal loan information in JSON format:
https://www.imoney.my/json/personal-loan-desktop.json

Your app should read the URL (https://www.imoney.my/json/personal-loan-desktop.json) from the configuration, load all data in memory (redis) and be ready for the next goal!

Note: This is your opportunity to show your backend skills. Please try over-engineering and showoff your skills!

## Goal 2
Create listing page like this one: https://www.imoney.my/personal-loan

* You should have an application route called /personal-loan
* On this route, your frontend framework should take over and render a page like https://www.imoney.my/personal-loan
* You should use Webpack to optimize, pack your assets, and serve to browser!
* Bonus points for isomorphic coding and server side rendering!

So, in your app if we go to route /personal-loan, a page like this: https://www.imoney.my/personal-loan should show up. 

Note: This is your opportunity to show your JS skills. Try over-engineering! Use advanced JS features like Async/Await, Generators, Event based operations whenever possible!

## Goal 3

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

## Goal 5
Young hackers are always around and growing. They need a playground to test their toys however iMoney can't be the target!

Lets implement a rate limiter (redis?):

* A single IP should not be able to hit your app more than 100 times per min
* Anything else you would like to do to secure your app?

## Goal 6
Awesome! Good work! Deployment time!

* All your services should be in containers (docker)
* You may use docker-compose or kubernetes to deploy the whole stack
* Write a single deployment file for us which should do everything needed to have your app up and running. Your deployment file should work on Linux/Mac at least!

## Goal 7
Last but not the least, testing! You can follow TDD or FDD!

* There should be a way to test all the functionalities of your app!
* Must have functional tests!
* Bonus points for unit tests!

### Submit your code
- Please don't forget to write your readme file which should contain what/why your have done things in certain way! Documentation is highly appreciated!
- Your solution should be committed back into this repository like you would do in a normal project.
- You can commit and push as many times as you want.

Best of luck!