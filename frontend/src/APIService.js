import axios from 'axios';
const API_URL = 'http://localhost:3000';
export class APIService{

    constructor(){
    }

    getPersonalLoan() {
        const url = `${API_URL}/json/personal-loan-desktop.json`;
        return axios.get(url).then(response => response.data);
    }

    saveLead(postData){
        const lead = {name: postData.customerName, email: postData.customerEmail, phone: postData.phoneNumber, productName: postData.productName}
        const url = `${API_URL}/lead/`;
        return axios.post(url, lead).then(response => {
            console.log('post api response: ' + JSON.stringify(response));
        }).catch(e => {
                console.error('Catched Exception:'  + e);
        });
    }

}