import mongoose from "mongoose";

module.exports.connectToMongoDB = function() {
    const mongodb_uri = 'mongodb://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}';
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
