<template>
  <div>
    <p>{{name}}</p>
    <el-button size="small" @click="excel">导出</el-button>
    <import-excel :on-success='handleSuccess' :before-upload="beforeUpload"></import-excel>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item'>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
var vm
export default {
    data(){
        return{
          name: 'excel表格',
          exceles: [
                    {name: '张三', age: 18, adds: '广州'},
                    {name: '希望', age: 100, adds: '曙光'},
                    {name: '希望1', age: 100, adds: '曙光'},
                    {name: '希望2', age: 100, adds: '曙光'},
                    {name: '希望3', age: 100, adds: '曙光'},
                    {name: '希望4', age: 100, adds: '曙光'}
          ],
          header: ['姓名', '年龄', '地址'],
          filterval: ['name', 'age', 'adds'],
          tableData: [],
          tableHeader: []
        }
    },
    created(){
      vm = this
    },
    mounted(){

    },
    methods: {
      excel(){
          vm.$exports(vm.exceles, vm.header, vm.filterval, vm.name)
      },
      
      beforeUpload(file) {
      debugger
      const isLt2M = file.size / 1024 / 1024 < 1
      if (isLt2M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 2m in size.',
        type: 'warning'
      })
      return false
     },
     handleSuccess({ results, header }) {
       debugger
       this.tableData = results // 展示数据用
       this.tableHeader = header // 展示数据用
       const newResult = this.get_results_row(results) //数据转换成需要格式
       this.$http.post('http://localhost:8089/user/importExcel', newResult)
                  .then(function (response) {
                    console.log(response);
                    vm.$message.success("Excel导入成功")
                  })
                  .catch(function (error) {
                    console.log(error);
                });
     },
     // 因为表头大多是中文名称，可以改成对应的数据库字段
    get_results_row(outdata) {
      let list = []
　　  var obj = {}
      outdata.forEach((item, index) => {
       obj = {}
       for (var key in item) {
         // 去除所有空格
         let keyString = key.replace(/\s*/g,"")
         if (keyString === '姓名') {
　　　　　　　　obj['userName'] = item[key]
　　　　　　} else if(keyString === '年龄') {
　　　　　　　　obj['age'] = item[key]
　　　　　　} else if(keyString === '地址') {
　　　　　　　　obj['adds'] = item[key]
　　　　　　}
       }
       list.push(obj)
     })
　　  return list
    }

    }
}
</script>
