import {Pageing} from "../utils/pageing";

class SkuPaging {
static  getSkuPaging(){
  return   new Pageing({
url: '/sku/ltest'
    },3)

}}
export {
    SkuPaging
}
