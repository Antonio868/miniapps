
import {CellStatus} from "../components/core/enum";
import {SkuCode} from "./sku-code";
import {SkuPending} from "./sku-pending";
import {Joiner} from "../utils/joiner";


class Judger {

    fanceGroup
    pathDith = []
    skuPending

    constructor(fanceGroup) {
        this.fanceGroup=fanceGroup
        this._initPathDict()
        this._initSkuPending()

    }

    juger(cell,x,y){
    //改变当前的按钮的样式
     this._changeCurrentCellStatus(cell,x,y)
     //改变其他样式
     this.fanceGroup.eachCell((cell,x,y) =>{
      const potentialPath = this._findPotentialPath(cell, x)
     if (!potentialPath) {
        return
     }

     const isIn = this._isIn(potentialPath)
     if (!isIn) {
        this.fanceGroup.changeCellStatusByXY(x, y, CellStatus.FORBIDDEN)
     }
    })
    }

    _isIn(potentialPath) {
        return this.pathDith.includes(potentialPath)
    }

    _findPotentialPath(cell, x) {
        const joiner = new Joiner('#')
        for (let i = 0; i < this.fanceGroup.fances.length; i++) {

            if (x === i) {
                // 当前行
                const isSelected = this.skuPending.isSelected(cell, x)
                if (isSelected) {
                    return
                }
                const cellCode = this._getCellCode(cell.spec)
                joiner.join(cellCode)
            } else {
                // 其他行
                const selected = this.skuPending.getSelectedByX(i)
                if (selected) {
                    const cellCode = this._getCellCode(selected.spec)
                    joiner.join(cellCode)
                }
            }
        }

        return joiner.getStr()
    }

    _getCellCode(spec) {
        return `${spec.key_id}-${spec.value_id}`
    }

    _initSkuPending(){
    this.skuPending=new SkuPending()
    }

    _initPathDict(){
    this.fanceGroup.skuList.forEach(s =>{
       const skucode=   new SkuCode(s.code)
      this.pathDith= this.pathDith.concat(skucode.totalSegements )
    })
    }

    _changeCurrentCellStatus(cell,x,y){
     if(cell.status===CellStatus.WAITING){
         this.fanceGroup.changeCellStatusByXY(x, y, CellStatus.SELECTED)
        this.skuPending.insert(cell,x)
     }
     if(cell.status===CellStatus.SELECTED){
         this.fanceGroup.changeCellStatusByXY(x, y, CellStatus.WAITING)
         this.skuPending.remove(x)
     }
    }
}
export {
    Judger
}
