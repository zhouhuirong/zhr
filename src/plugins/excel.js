// API 组件
var excel = {}

function exports (date, Header, filterval, name) {
  import('@/excel/Export2Excel').then(excel => {
    const tHeader = Header
    const filterVal = filterval
    const list = date
    const filename = name
    const data = formatJson(filterVal, list)
    excel.exportJsonToExcel({
      header: tHeader, data, filename })
  })
}
function formatJson (filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => {
    return v[j]
  }
  ))
}
excel.install = function (Vue, options) {
  Vue.prototype.$exports = exports
}
export default excel