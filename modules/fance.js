import {Cell} from "./cell";

class Fance {

   specs
    title
    id
    cells= []

constructor(specs) {
    this.specs=specs
    this.title=specs[0].key
    this.id=specs[0].key_id
}

initCells(){
 this.specs.forEach(s=>{
     const  existed=this.cells.some(c=>{
     return     c.id === s.value_id
     })

     if(existed){
         return
     }

    const cell=  new Cell(s)
     this.cells.push(cell)
 })

}
}
export {
    Fance
}
