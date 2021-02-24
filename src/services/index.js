import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/'
});

export default Api;
