Component({
    properties: {
        cell:Object,
        x:Number,
        y:Number
    },
    data: {},
    methods: {
        cellTap(){
        this.triggerEvent('cell-tap',{
            cell:this.properties.cell,
            x:this.properties.x,
            y:this.properties.y
        },{
            bubbles:true,
            composed:true
        })
        }
    }
});
