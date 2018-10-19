import axios from 'axios';
const API_URL = 'http://localhost:3000';
const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM5ODg0NzUwLCJleHAiOjE1NDI0NzY3NTB9.NKWxVI-SXk2wNEV3S7xl4IP0jpuQsg1FLIfSjuMehrM'
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': tempToken
    }
}
export class APIService{

    constructor(){
    }

    getPersonalLoan() {
        const url = `${API_URL}/json/personal-loan-desktop.json`;
        return axios.get(url,config).then(response => response.data);
    }

    saveLead(postData){
        const lead = {name: postData.customerName, email: postData.customerEmail, phone: postData.phoneNumber, productName: postData.productName}
        const url = `${API_URL}/lead/`;
        return axios.post(url, lead, config).then(response => {
            console.log('post api response: ' + JSON.stringify(response));
        }).catch(function (e) {
            console.error('catched error' + e);
        })
    }

}