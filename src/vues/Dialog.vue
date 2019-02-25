<template>
  <el-dialog title="请选择系统" :visible.sync="dialogTableVisible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" :center="true">
    <div class="content">
        {{systems}}<p/>
        <el-button size="small" @click="select">点击选中</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
    data(){
        return{
            dialogTableVisible: false,
            // 全局
            // isGlobal: true,
            systems: '出来了'
        }
    },
    created(){
        debugger
        var self = this
        self.$eventHub.$on('showGlobalChoseSystemDialog', function () {
          console.log("sxxxxxs")
          self.dialogTableVisible = true
          self.isGlobal = true
        })
    },
    methods:{
      select(){
        this.dialogTableVisible = false
      }
    }
}
</script>
<style lang="scss" scoped>
  .content {
    text-align: center;
  }
</style>