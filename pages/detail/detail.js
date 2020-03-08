import {Spu} from "../../modules/spu";

Page({
    data: {
        spu:Object
    },
    onLoad: async function (options) {
        const id=  options.pid
        const spu = await Spu.getSpuDetail(id)
        this.setData({
            spu
        })

    }
});
