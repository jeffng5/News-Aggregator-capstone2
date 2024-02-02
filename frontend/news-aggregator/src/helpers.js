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
        let res = await this.request(`login`, {username, password})
        console.log(res)
        if (res) {
            localStorage.setItem('username', username)
        }
        return res;

    }
// user SignUp helper function
    static async signUpUser(username, password, email) {
        let res = await this.request(`register`, {username, password, email}, 'post')
        console.log(res)
        if (res) {
            localStorage.setItem('username',username)
        }
            
        return res;

    }
// call to retrieve articles
    // static async getArticles() {
    //     // console.log('printout')
    //     let res = await this.request(`users/preferences`)
    //     console.log('test1')

    //     return res
    // }

}