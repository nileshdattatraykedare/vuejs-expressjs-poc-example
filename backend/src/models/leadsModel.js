import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LeadsSchema = new Schema({
    name: {
        type: String,
        required: 'Name required'
    },
    email: {
        type: String,
        required: 'Email is required.'
    },
    phone: {
        type: String,
        required: 'Phone is required.'
    },
    productName: {
        type: String,
        required: 'Product Name is required.'
    },
    _created_at: {
        type: Date,
        default: new Date()
    }

},{versionKey: false})

export default LeadsSchema;