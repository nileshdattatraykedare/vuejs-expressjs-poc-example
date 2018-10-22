import {getAllLeads, addNewLead, updateLead, deleteLead, getLead} from "../controllers/leadsController";
import {getImoneyDataFromRedis} from "../controllers/iMoneyDataController";
import {verifyLogin} from "../controllers/authController";

const routes = (app) => {
    app.route('/')
        .get((req, res) => {res.send('it is working')})
    app.route('/login')
        .post(verifyLogin)
    app.route('/lead')
        .all(require('../confs/auth'))
        .get(getAllLeads)
        .post(addNewLead)

    app.route('/lead/:id')
        .all(require('../confs/auth'))
        .get(getLead)
        .put(updateLead)
        .delete(deleteLead)
    app.route('/json/personal-loan-desktop.json')
        .all(require('../confs/auth'))
        .get(getImoneyDataFromRedis)
}

export default routes