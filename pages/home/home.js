
import {Theme} from "../../modules/theme";
import {Banner} from "../../modules/banner";
import {Category} from "../../modules/category";
import {Activity} from "../../modules/activity";
import {SkuPaging} from "../../modules/sku-paging";

Page({
    data: {
        themeA: Object,
        bannerB: Object,
        gridC: Array,
        themeD:Object,
        activityD: Object,
        themeE:Object,
        themeF:Object,
        bannerG:Object,
        themeH:Object
    },
    async onReachBottom() {
        const skuPaging = this.data.skuPaging
        const data = await skuPaging.next()
        wx.lin.renderWaterFlow(data.data.items)
    },
    async  onLoad (options) {
    await  this.initAllData()
   await  this.initWaterFlowData()
    },
    async initWaterFlowData(){
    const  skuPaging=  SkuPaging.getSkuPaging();
     const data=  await skuPaging.next()
        this.data.skuPaging=skuPaging
       wx.lin.renderWaterFlow(data.data.items)
    },
    async initAllData(){
      const  theme=  new Theme();
        await  theme.getThemeAll();
        const  themeA=await  theme.getHomeLocationA();
        const themeD= await  theme.getHomeLocationD();
        const activityD=await  Activity.getHomeLocation();
        const themeE =await  theme.hetHomeLocationEWithSpu();
        const themeF= await  theme.getHomeLocationF();
        const themeH= await  theme.getHomeLocationH();
        const bannerB=await  Banner.getHomeLocationB();
        const gridC=await  Category.getHomeLocation();
        const  bannerG=   await  Banner.getHomeLocationG();

        console.info(themeH);
      this.setData({
          themeA,
          bannerB,
          gridC,
          themeD,
          activityD,
          themeE,
          themeF,
          bannerG,
          themeH
      })


    },


});
