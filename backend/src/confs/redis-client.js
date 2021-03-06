/**
 * api rate limiter nodejs redis
 * @author Nilesh Kedare
 */
const redisConfig = {port:{PORT}, host:'{HOST}'};

import Redis from 'redis';

class RedisDatabase {

    constructor() {
        this.redis = Redis;
    }

    connectDB() {
        const client = this.redis.createClient(redisConfig);

        client.on("error", (err) => {
            console.log("Error " + err);
        });

        client.on("ready", (err) => {
            console.log("Ready ");
        });
        return client;
    }
}

module.exports.redisClient = new RedisDatabase().connectDB();