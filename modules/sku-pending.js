/**
 * @Author: Antonio --Yin
 * @Date: 2020/3/7 23:05
 */
class SkuPending {
 pending = []

 insert(cell, x) {
  this.pending[x] = cell
 }

 remove(x) {
  this.pending[x] = null
 }

 isSelected(cell, x) {
  const pendingCell = this.pending[x]
  if (!pendingCell) {
   return
  }
  return cell.id === pendingCell.id
 }

 getSelectedByX(x) {
  return this.pending[x]
 }

}

export {
 SkuPending
}
