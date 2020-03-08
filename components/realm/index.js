import {FanceGroup} from "../../modules/fance-group";
import {Judger} from "../../modules/judger";

Component({
    properties: {
        spu: Object

    },
    data: {
        fanceGroup:Object,
        fances:Array
    },
    observers: {
        'spu': function (spu) {
            if (!spu) {
                return
            }
            const fanceGroup = new FanceGroup(spu)
            fanceGroup.initFances()
            const judger=new Judger(fanceGroup)
            console.log(judger)
            this.setData({
                judger
            })
            this.bindFancesData(fanceGroup)

        }
    },
    methods: {
        bindFancesData(fanceGroup){
      this.setData({
          fances:    fanceGroup.fances
      })
  },
        onCellTap(e){
       const  cell=e.detail.cell
       const x=  e.detail.x
        const y=e.detail.y
        const judger=   this.data.judger
        judger.juger(cell, x,y)
        this.bindFancesData(judger.fanceGroup)
        }

    }
});
