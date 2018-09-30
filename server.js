import express from 'express'
import routes from './src/routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;

function appStart() {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());

    routes(app)

    app.listen(PORT, () => {
        console.log(`you are server is running on ${PORT}`);
    })
}
let attempts=1;
let retryTime = 1;
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
    attempts++;
    retryTime = retryTime * attempts * 100; //ms
    console.log("retrying to connect db with attempt " + attempts);
    setTimeout(function () {

    }, retryTime)

})

