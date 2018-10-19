import schedule from "node-schedule";
import {processQueuedLeads} from "./processQueuedLeads";

let j = schedule.scheduleJob('* * * * *', function(){
    console.log('Job will process queued leads through SQS at: ' + new Date())
    processQueuedLeads()
});