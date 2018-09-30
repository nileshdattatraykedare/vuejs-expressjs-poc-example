import {getAllLeads, addNewLead, updateLead, deleteLead, getLead} from "../controllers/leadsController";

const routes = (app) => {
    app.route('/lead')
        .get(getAllLeads)
        .post(addNewLead)

    app.route('/lead/:id')
        .get(getLead)
        .put(updateLead)
        .delete(deleteLead)
}

export default routes