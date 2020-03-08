import {CellStatus} from "../components/core/enum";

class Cell {
    spec
    id
    name
    status=CellStatus.WAITING
    constructor(spec) {
        this.spec=spec
        this.id=spec.value_id
        this.name=spec.value
    }
}
export {
    Cell
}
