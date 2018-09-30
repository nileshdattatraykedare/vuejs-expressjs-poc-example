import express from 'express'
import routes from './src/routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://leadapp_user:leadapp_password@54.255.150.202:27017/leadapp')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app)

app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})