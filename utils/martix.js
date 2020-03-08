
class Martix {
    m

    constructor(m) {
        this.m = m
    }
   //行数
    get rowsNum() {
        return this.m.length
    }
   //列数
    get colsNum() {
        return this.m[0].length
    }

    transport() {
        const desArr = []
        for (let j = 0; j < this.colsNum; j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }

}

export {
    Martix
}
