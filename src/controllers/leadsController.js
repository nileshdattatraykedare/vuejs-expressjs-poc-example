import {SQS_LEADS_QUQUE_URL} from 'constants'
import mongoose from 'mongoose'
import leadsSchema from '../models/leadsModel';
import {addQueue} from "../../sqs-service";

console.log("Mongoose state: " + mongoose.connection.readyState);

const Lead = mongoose.model('Lead', leadsSchema);

// add new lead to the database
export function addNewLead(req, res) {
    let newLead = new Lead(req.body)
    console.log(req.body)
    newLead.save((error, lead) => {
        if (error) {
            console.error(error);
            //in case mongodb fails to save the message, it will be queued to SQS
            let queued = addQueue(req.body);
            console.log("Queued: " + queued);
            res.json(req.body);
        }
        res.json(lead)
    })
}

// get all downloads from the database
export function getAllLeads(req, res) {
    Lead.find({}, (error, leads) => {
        if (error) { res.json(error) }
        res.json(leads)
    })
}

// get single lead based on the id
export function getLead(req, res) {
    Lead.find({_id: req.params.id}, (error, lead) => {
        if (error) { res.json(error) }
        res.json(lead)
    })
}

// update the lead information based on id
export function updateLead(req, res) {
    Lead.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, lead) => {
        if (error) { res.json(error) }
        res.json(lead)
    })
}

// delete the lead from the database.
export function deleteLead(req, res) {
    Lead.remove({ _id: req.params.id }, (error, lead) => {
        if (error) { res.json(error) }
        res.json(lead)
    })
}