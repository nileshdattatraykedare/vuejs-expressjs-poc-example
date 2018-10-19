//import mongoose from "mongoose";

//import leadsSchema from "../backend/models/leadsModel";


//import {connectToMongoDB} from "../backend/confs/mongodb";

// Tell chai that we'll be using the "should" style assertions.
let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM5ODg0NzUwLCJleHAiOjE1NDI0NzY3NTB9.NKWxVI-SXk2wNEV3S7xl4IP0jpuQsg1FLIfSjuMehrM'


const leadSample = {
    name: "Alok nath",
    email: "alok@gmail.com",
    phone: "9898989899",
    productName: "Samsung TV WD"
}
const loginDetails = {
    username: "admin",
    password: "admin"
}
describe('User Login', () => {
it('it should login and generate token', (done) => {
    chai.request('http://localhost:3000')
        .post('/login')
        .send(loginDetails) // this is like sending $http.post or this.http.post in Angular
        .end((err, res) => { // when we get a response from the endpoint
            //if(err) console.error(err);
            //console.log(res)
            // in other words,
            // the res object should have a status of 201
            res.should.have.status(200);
            res.body.should.have.property('token');
            // the property, res.body.state, we expect it to be true.
            done();
        });
});
});

describe('Add Leads', () => {
    it('it should add lead to database', (done) => {
        chai.request('http://localhost:3000')
            .post('/lead')
            .set('Authorization', token)
            .send(leadSample) // this is like sending $http.post or this.http.post in Angular
            .end((err, res) => { // when we get a response from the endpoint
                //if(err) console.error(err);
                //console.log(res)
                // in other words,
                // the res object should have a status of 201
                res.should.have.status(200);
                // the property, res.body.state, we expect it to be true.
                done();
            });
    });
});
describe('fetch Leads', () => {
    it('it should fetch existing lead', (done) => {
       //lead/:i5bb0bea2d0b6c0286656cc74
        chai.request('http://localhost:3000')
            .get('/lead/:i5bb0bea2d0b6c0286656cc74')
            .set('Authorization', token)
            .send() // this is like sending $http.post or this.http.post in Angular
            .end((err, res) => { // when we get a response from the endpoint
                //if(err) console.error(err);
                //console.log(res)
                // in other words,
                // the res object should have a status of 201
                res.should.have.status(200);
                // the property, res.body.state, we expect it to be true.
                done();
            });
    });
});
describe('iMoney api', () => {
it('it should fetch personal loan feed from iMoney', (done) => {
    //lead/:i5bb0bea2d0b6c0286656cc74
    chai.request('http://localhost:3000')
        .get('/json/personal-loan-desktop.json/')
        .set('Authorization', token)
        .send() // this is like sending $http.post or this.http.post in Angular
        .end((err, res) => { // when we get a response from the endpoint
            if(err) console.error(err);
            //console.log(res)
            // in other words,
            // the res object should have a status of 201
            res.should.have.status(200);
            // the property, res.body.state, we expect it to be true.
            done();
        });
});
});

//const Lead = mongoose.model('Lead', leadsSchema);
/*describe('Leads', () => {
    connectToMongoDB();
    let newLead = new Lead({
        name: "Alok nath",
        email: "alok@gmail.com",
        phone: "9898989899",
        productName: "Samsung TV WD"
    });


    it('Test Lead save', () => {

        newLead.save().then(function (result) {
            //console.log(result)
            expect(result).to.have.own.property('_id');
        })
        // This will fail if "rectangle.width" does
        // not equal 10.

    });
    it('Test Lead get', () => {

        Lead.find({email: 'alok@gmail.com'}).then(function (result) {
           // console.log(result)
            expect(result).to.have.own.property('email');
        })
        // This will fail if "rectangle.width" does
        // not equal 10.

    });

});*/
