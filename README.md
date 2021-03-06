# Lead App
Frontend is powered by VueJS

Api / Microservice by ExpressJS, Moongose

Database: MongoDB

In-Memory/Cacheing : Redis

Queuing / Message broker: SQS


## Goal 1

Status: completed

Description:
Use of moogoose models/schemas,
Amazon SQS for adding to queue in case db not avaialble
job to process queued leads that runs every 1 minute

# Goal 2

Status: completed

Description:
fetching and updating data from imoney feed to my hosted and installed redis server on ec2 instance
creating route for http://localhost:3000/json/personal-loan-desktop.json


## Goal 3

status: completed

Description: added VueJs Cli to create frontend, added vue-router for the required 
uri: http://localhost:8080/personal-loan
and loading data from api http://localhost:3000/json/personal-loan-desktop.json using axios and vue component

screens:

![picture](backend/src/resources/personal-loan-screenshot.png)



## Goal 4
Status: completed

http://localhost:8080/loan-calculator

Description using v-model directive of VueJs, I completed the loan calculator.

![picture](backend/src/resources/loan-calculator.png)



## Goal 5
status: completed

Made ApplyNow button on Personal Loan page function with supportive form that saves leads to database.

![picture](backend/src/resources/apply-now-screenshot.png)

## Goal 6
status: completed
added JWT and Auth login

curl -X POST \
  http://localhost:3000/login/ \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 22292dad-5b74-40d4-82d6-c05e86641d15' \
  -H 'cache-control: no-cache' \
  -d '{
"username":"admin",
"password": "admin"
}'


Example posting lead:


curl -X POST \
  http://localhost:3000/lead/ \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM5ODg0NzUwLCJleHAiOjE1NDI0NzY3NTB9.NKWxVI-SXk2wNEV3S7xl4IP0jpuQsg1FLIfSjuMehrM' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 2e3a33e4-82bc-495c-b697-2971e92a37af' \
  -H 'cache-control: no-cache' \
  -d '{
"name":"Alok nath",
"email":"alok@gmail.com",
"phone":"9898989899",
"productName":"Samsung TV WD"
}'

Added api rate limiter
100 / 1 minute

## Goal 7 
status: done
Added docket setup/conf files and scripts


## Goal 8
status: added

installed Added Mocha/ Chai / nyc for tests and code coverage

   npm test
   
![picture](backend/src/resources/tests-and-code-coverage.png) 


# MANUAL INSTALLATION

Backend:

  cd backend
  
  npm install
  
  npm run start (dev)
  
  npm run build (production build)
  
  cd dist
  
  node server.js 

# setup frontend
 cd frontend

 npm install

# Frontend Start
  npm run serve
  
# Docket Installation
Run dockerTask.sh to build a Docker image and run your app / backend api in a container.

sh ./dockerTask.sh