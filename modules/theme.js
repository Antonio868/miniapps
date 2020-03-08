import {Http} from "../utils/http";

class Theme{
    allTheme
    static  locationA ='t-1';
    static  locationD ='t-2';
    static  locationF ='t-3';
    static  locationH ='t-4';
    async getThemeAll() {
        const result = await Http.request({
            url: '/theme/all'
        });
        this.allTheme = result.data;
        console.info( this.allTheme)
    }
     async hetHomeLocationEWithSpu(){
        const  result= await Http.request({
            url:'/themes/withspu'
        });
         return result.data
     }
    async getHomeLocationA() {
        return this.allTheme.find(t => {
            return t.name === Theme.locationA
        })
    }
    async getHomeLocationD() {
        return this.allTheme.find(t => {
            return t.name === Theme.locationD
        })
    }

    async getHomeLocationF() {
        return this.allTheme.find(t => {
            return t.name === Theme.locationF
        })
    }

    async getHomeLocationH() {
        return this.allTheme.find(t => {
            return t.name === Theme.locationH
        })
    }

}
export {
    Theme
}
