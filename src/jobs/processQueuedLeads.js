import {sqs} from '../../sqs-service'
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

function deleteQueuedMessage(data) {
    var deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: data.Messages[0].ReceiptHandle
    };
    sqs.deleteMessage(deleteParams, function (err, data) {
        if (err) {
            console.log("Delete Error", err);
        } else {
            console.log("Message Deleted", data);
        }
    });
}
export function processQueue(){
    sqs.receiveMessage(params, function(err, data) {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages) {
            console.log("Messages: " + data.Messages);
            deleteQueuedMessage(data);
        }
    });
}
