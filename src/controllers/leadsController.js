import mongoose from 'mongoose'
import leadsSchema from '../models/leadsModel'

const Lead = mongoose.model('Lead', leadsSchema)

// add new lead to the database
export function addNewLead(req, res) {
    let newLead = new Lead(req.body)
    newLead.save((error, lead) => {
        if (error) { res.json(error) }
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
    Lead.findById(req.params.id, (error, lead) => {
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