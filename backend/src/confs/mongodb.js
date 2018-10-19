import mongoose from "mongoose";

module.exports.connectToMongoDB = function() {
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
