import {Http} from "./http";

class Pageing {
    req;
    url;
    count;
    start;
    locker=false;
    moreData=true;
    accumulator=[];
    constructor(req, count=0,start=0) {
        this.req=req;
        this.url=req.url;
        this.count=count;
        this.start=start
    }


async next() {
     if(!this.moreData){
            return
    }
    if (!this._getLocker()){
        return
    }
    const data = await this._getDate();

    if (!data){
        return
    }
    this._hasMoreDate(data.data.page,data.data.total_page)
    this.start+=this.count
    this._accumulator(data.data.items)
    this._releaseLocker()
    return data
}
    _accumulator(list){
        this.accumulator=this.accumulator.concat(list)
    }
   _hasMoreDate(page,totalPage){
        return page<totalPage-1
   }
   _getLocker(){
        if (this.locker){
            return false
        }
        this.locker=true
    return true
   }
    _releaseLocker(){
        this.locker=false
    }
    async _getDate(){
      const req= this._getCurrentReq();
      const  paging=await Http.request(req)
        console.info(paging)
    if(!paging){
        return null
    }
    if (!paging.data.items.length){
        return  null
    }
      return paging
    }

    _getCurrentReq(){
        let url=this.url;
        let param =`/${this.start}/${this.count}`;
        // if (url.includes('?')){
        //     url+='&'+param
        // }else {
        //     url+='?'+param
        // }
     url+=param;
     const  req=this.req;
     req.url=url;
     return req

    }
}
export {
    Pageing
}
