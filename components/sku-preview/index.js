import date from "../../miniprogram_npm/lin-ui/common/async-validator/validator/date";

Component({
    properties: {
        data:Object
    },
    data: {
        tags:Array
    },
    observers:{
        'data':function (data) {
        if (!data){
            return
        }if(!data.tags){
            return;
            }
        const  tags=  data.tags.split('$')
            this.setData({
                tags
            })
        }
    },
    methods: {
        onItemTap(e){
           const  pid=e.currentTarget.dataset.pid
            wx.navigateTo({
                url:'/pages/detail/detail?pid='+pid
            })
        }
    }
});
