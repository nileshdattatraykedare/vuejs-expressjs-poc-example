import express from 'express'
import routes from './src/routes/api'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {loadDataFromiMoney} from "./src/controllers/iMoneyDataController";
import cors from 'cors';
import {Limiter} from "./src/confs/rate-limiter";

require('./src/jobs/jobs-scheduler')
mongoose.Promise = global.Promise;
const app = express()
const PORT = 3000
const limiter = new Limiter(app)
app.use(cors());

loadDataFromiMoney();
function appStart() {
    //app.use('/', require('./auth.js'));
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());
    limiter.usingRemoteAddress() //rate limited
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
        console.log('MongoDB connected');
    }).catch(function (error) {
        console.error(error);

    });
}
appStart();
connectToMongoDB();

