import BaseAPI from "./Base";

class AuthAPI extends BaseAPI {

    async login(data) {
        return await this.post(data, "/login");
    }

    async register(data) {
        return await this.post(data, "register");
    }
}

const authAPI = new AuthAPI(import.meta.env.REACT_APP_API_URL + "/public/admin");
export default authAPI;