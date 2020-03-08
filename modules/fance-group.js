
import {Martix} from "../utils/martix";
import {Fance} from "./fance";


class FanceGroup {
    spu
    skuList
    fances = []

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    initFances() {
        const martix = this._createMartix()
        const arr = martix.transport()
        arr.forEach(s=>{
          const fance= new Fance(s)
            fance.initCells()
            this.fances.push(fance)
        })

    }

    changeCellStatusByXY(x, y, status) {
        this.fances[x].cells[y].status = status
    }


    _createMartix() {
        const m = []
        this.skuList.forEach(s => {
            m.push(s.specs)
        })
        return new Martix(m)
    }

    eachCell(cb) {
        for (let i = 0; i < this.fances.length; i++) {
            for (let j = 0; j < this.fances[i].cells.length; j++) {
                const cell = this.fances[i].cells[j]
                cb(cell, i, j)
            }
        }
    }

}

export {
    FanceGroup
}
