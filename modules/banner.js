import {Http} from "../utils/http";


class Banner {
    static async getHomeLocationB(){

       const result=await Http.request({
            url:`/banners/names/b-1`,
            data: {
                name:'b-1'}
        })

        return result.data

    }
    static  async getHomeLocationG(){
        const  result= await  Http.request({
            url:'/banners/names/b-2'
        });
       return  result.data
    }
}
export {
    Banner
}
