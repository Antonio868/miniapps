/**
 * @Author: Antonio --Yin
 * @Date: 2020/3/6 22:05
 */
import {Util} from "../utils/util";

class SkuCode {
    code
    spu
    totalSegements =[]
    constructor(code) {
        this.code=code
 this._splitCodeToSegments()
    }
    _splitCodeToSegments(){
      const spuAndCode= this.code.split('$')
       this.spu=spuAndCode[0]
        const codeStr=spuAndCode[1]
        const codeArr=codeStr.split('#')
        for(let i=0;i<codeArr.length; i++){
          const  result= Util.combination(codeArr,i+1)
      result.map(i=>{
    this.totalSegements=this.totalSegements.concat(i.join('#'))
      })
       }
  console.info(codeArr)
    }
}

export {
    SkuCode
}
