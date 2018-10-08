import {addQueue, sqs} from '../../sqs-service'
import {SQS_LEADS_QUQUE_URL} from "../../constants";
import mongoose from "mongoose";
import leadsSchema from "../models/leadsModel";
const Lead = mongoose.model('Lead', leadsSchema);
var params = {
    AttributeNames: [
        "SentTimestamp"
    ],
    MaxNumberOfMessages: 1,
    MessageAttributeNames: [
        "All"
    ],
    QueueUrl: SQS_LEADS_QUQUE_URL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0
};

function deleteQueuedMessage(message) {
    sqs.deleteMessage({
        QueueUrl: sqsQueueUrl,
        ReceiptHandle: message.ReceiptHandle
    }, function(err, data) {
        // If we errored, tell us that we did
        err && console.log(err);
    });
}


export function processQueuedLeads(){
    sqs.receiveMessage({
        QueueUrl: SQS_LEADS_QUQUE_URL,
        MaxNumberOfMessages: 1, // how many messages do we wanna retrieve?
        VisibilityTimeout: 60, // seconds - how long we want a lock on this job
        WaitTimeSeconds: 3 // seconds - how long should we wait for a message?
    }, function(err, data) {
        // If there are any messages to get
        if (data.Messages) {
            // Get the first message (should be the only one since we said to only get one above)
            var message = data.Messages[0],
                body = JSON.parse(message.Body);
            // Now this is where you'd do something with this message
            addQueue(message.Body);  // whatever you wanna do
            // Clean up after yourself... delete this message from the queue, so it's not executed again
            deleteQueuedMessage(message);  // We'll do this in a second
        }
    });
}
