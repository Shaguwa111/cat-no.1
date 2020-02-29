import axios from 'axios'


 class Api {
     constructor () {
         this.userId = '';
     }
    
get api () {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {'user-id': this.userId}
    });
}

get get () {
    return async (...props) => this.api.get(...props) 
}

get post () {
    return async (...props) => this.api.post(...props) 
}

get put () {
    return async (...props) => this.api.put(...props) 
}

get delete () {
    return async (...props) => this.api.delete(...props) 
}
}


export default new Api(); 