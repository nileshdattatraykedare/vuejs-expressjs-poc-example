import express from 'express'
import routes from './src/routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import aws from "aws-sdk";
require('./src/jobs/index')
const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
aws.config.loadFromPath(__dirname + '/aws-config.json');
// Instantiate SQS.
const sqs = new aws.SQS();
global.sqs = sqs;


function appStart() {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());

    routes(app)

    app.listen(PORT, () => {
        console.log(`you are server is running on ${PORT}`);
    })
}

function connectToMongoDB() {
    const mongodb_uri = 'mongodb://leadapp_user:leadapp_password@54.255.150.202:27017/leadapp';
    const configuration = {
        reconnectTries: 30,
        autoReconnect: true,
        useNewUrlParser: true,
    };


    mongoose.connect(mongodb_uri, configuration).then(function () {
        appStart();
    }).catch(function (error) {
        console.error(error);

    });
}

connectToMongoDB();

