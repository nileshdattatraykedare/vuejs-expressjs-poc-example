import {redisClient} from "./redis-client";

export class Limiter{

    constructor(app){
        this.limiter = require('express-limiter')(app, redisClient);
    }

    /**
     * For IP only
     */
    usingRemoteAddress() {
        return this.limiter({
            lookup: ['connection.remoteAddress'],
            total: 100,
            expire: 1000 * 60 * 1,
            onRateLimited: function (request, response, next) {
                response.status(429).json('You are not welcome here, Rate limit exceeded');
            }
        });
    }
}