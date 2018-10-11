import axios from 'axios';
const API_URL = 'http://localhost:3000';
export class APIService{

    constructor(){
    }

    getPersonalLoan() {
        const url = `${API_URL}/json/personal-loan-desktop.json`;
        return axios.get(url).then(response => response.data);
    }

}