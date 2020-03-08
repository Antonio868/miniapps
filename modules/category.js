import {Http} from "../utils/http";

class Category {
    static async getHomeLocation() {
       const result= await Http.request({
            url: `/category/grid`
        });
      return   result.data
    }
}
export {
    Category
}
