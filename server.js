import express from 'express'
import routes from './src/routes/api'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {loadDataFromiMoney} from "./src/controllers/iMoneyDataController";
require('./src/jobs/jobs-scheduler')
const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
loadDataFromiMoney();
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

