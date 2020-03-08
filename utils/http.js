import {Util} from "./util";
import {COMMON_CONFIG} from "../config/config";

class  Http {
   static async request ({url,data,method='GET'}){
   return  Util.promisic(wx.request)(
          {
              url:`${COMMON_CONFIG.baseUrl}${url}`,
              data,
              method
          }

      )

    }
}
export {
    Http
}
