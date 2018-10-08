import {getAllLeads, addNewLead, updateLead, deleteLead, getLead} from "../controllers/leadsController";
import {getImoneyDataFromRedis} from "../controllers/iMoneyDataController";

const routes = (app) => {
    app.route('/lead')
        .get(getAllLeads)
        .post(addNewLead)

    app.route('/lead/:id')
        .get(getLead)
        .put(updateLead)
        .delete(deleteLead)
    app.route('/json/personal-loan-desktop.json')
        .get(getImoneyDataFromRedis)
}

export default routes