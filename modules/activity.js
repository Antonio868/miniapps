import {Http} from "../utils/http";

class Activity {
    static async getHomeLocation() {
       const result= await Http.request({
            url: '/activity/a-2'
        })
        console.info(result)
       return result.data

    }
}

export {
    Activity
}
