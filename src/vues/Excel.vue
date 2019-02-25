<template>
  <div>
    <p>{{name}}</p>
    <el-button size="small" @click="excel">导出</el-button>
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
                    {name: '希望', age: 100, adds: '曙光'}
          ],
          header: ['姓名', '年龄', '地址'],
          filterval: ['name', 'age', 'adds']
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
      }
    }
}
</script>
