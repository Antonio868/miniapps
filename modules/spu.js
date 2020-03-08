import {Http} from "../utils/http";

class Spu {
   static  async getSpuDetail(id){
       const  result=await Http.request({
            url: `/sku/${id}/detail`
        })
       return result.data
    }
}
export {
    Spu
}
