import {IMONEY_DATA_URL} from "../confs/constants";
import {redisClient} from "../confs/redis-client";

const request = require('request');
export function loadDataFromiMoney() {
    request(IMONEY_DATA_URL, function (error, response, body) {
        if (!error) {
            redisClient.set('IMONEY_DATA', body);
        }else{
            console.error(error);
        }
    });
}

export function getImoneyDataFromRedis(req, res){
    redisClient.get('IMONEY_DATA', function (error, result) {
        if (!error) {
            res.json(JSON.parse(result))
        }else{
            console.log(error);
        }

    });
}