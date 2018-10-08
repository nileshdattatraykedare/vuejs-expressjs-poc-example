import schedule from "node-schedule";
import {processQueue} from "./processQueuedLeads";

let j = schedule.scheduleJob('* * * * *', function(){
    console.log('Job will process queued leads through SQS' + new Date())
    processQueue()
});