import { axios } from "./ini";

export default class HomeStore {

    public static getMarketSummaries() {
        return axios.get('getmarketsummaries')
            .then((response: any) => {
                return response;
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    public static getTicker(marketName: string) {
        let data = { market: marketName }
        return axios.get('getticker', { params: data })
            .then((response: any) => {
                return response;
            })
            .catch((error: any) => {
                console.log(error)
            })
    }
}