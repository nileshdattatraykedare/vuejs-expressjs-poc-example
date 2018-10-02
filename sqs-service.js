import aws from 'aws-sdk';
import {SQS_LEADS_QUQUE_URL} from 'constants'

aws.config.loadFromPath(__dirname + '/aws-config.json');
// Instantiate SQS.
const sqs = new aws.SQS();

export async function addQueue(obj){
    var params = {
        MessageBody: obj,
        QueueUrl: SQS_LEADS_QUQUE_URL,
        DelaySeconds: 0
    };

    return await sqs.sendMessage(params);
}