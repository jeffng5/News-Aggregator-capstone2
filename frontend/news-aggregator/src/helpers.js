import axios from 'axios'


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

export class Helpers {

    static token;

    static async request(endpoint, data ={}, method = 'get') {
        console.debug("API call:", endpoint, data, method);
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${Helpers.token}`};
        const params = (method === 'get')
            ? data
            : {};
        try {
            return (await axios({ url, method, data, params, headers}));
        } catch (err) {
            console.error("API Error:", err.response.data);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];

        }
    
    }

// user login helper function
    static async loginUser(username, password) {
        let res = await this.request(`login`, {username, password}, 'post')
        console.log(res)
        return res;

    }
// user SignUp helper function
    static async signUpUser(username, password) {
        let res = await this.request(`register`, {username, password}, 'post')
        console.log(res)
        return res;

    }
// call to retrieve articles
    static async getArticles() {
        let res = await this.request(`users/preferences`)
        return res
    }

}