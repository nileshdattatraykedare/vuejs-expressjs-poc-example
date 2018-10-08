const redisConfig = {port:6379, host:'54.255.150.202'};
const redis = require("redis");
const redisClient = redis.createClient(redisConfig);

export {redisClient as redisClient}