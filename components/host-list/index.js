Component({
    properties: {
        banner:Object
    },
    data: {
        left:Object,
        rightTop:Object,
        rightBottom:Object
    },
    observers:{
        'banner':function (banner) {

        if (!banner){
            return
        }
         this.bindInitData(banner.items)
        }
    },
    methods: {
        bindInitData(list){
            const left=list.find(b=>{
                return b.name ==='left'
            });
            const rightTop=list.find(b=>{
                return b.name ==='right-top'
            });
            const rightBottom=list.find(b=>{
                return b.name === 'right-bottom'
            });
            this.setData({
                left,
                rightTop,
                rightBottom

            })
        }
    }
});
