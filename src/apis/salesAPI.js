import BaseAPI from "./Base";


const URL = import.meta.env.REACT_APP_API_URL + "/admin/sales";

class SalesAPI extends BaseAPI {

    async getSales(query = {}) {
        return await this.get(query);
    }

    async getSale(_id) {
        return await this.get({ _id });
    }

    async createSale(data) {
        return await this.post(data);
    }
}

const salesAPI = new SalesAPI(URL);

export default salesAPI;