<template>
 <el-container>
    <el-header class="header">{{name}}
    <el-button size="small" @click="dialog">弹框</el-button>
    </el-header>
    <el-container>
       <el-aside class="sidebar" width="200px">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item index="/HelloWorld">选项1</el-menu-item>
                <el-menu-item index="/day01">图形化</el-menu-item>
                <el-menu-item index="/Upload">文件上传</el-menu-item>
                <el-menu-item index="/QRCode">二维码</el-menu-item>
                <el-menu-item index="/Carousel">走马灯</el-menu-item>
                <el-menu-item index="/StoreTest">store</el-menu-item>
                <el-menu-item index="/Excel">excel表格</el-menu-item>
                <el-menu-item index="/Download">文件下载</el-menu-item>
            </el-submenu>
            </el-menu>
       </el-aside>
       <el-main>
        <el-row id="content">
          <router-view />
        </el-row>
      </el-main>
    </el-container>
</el-container> 
</template>
<script>
var vm
export default {
 data(){
    return{
      name: '头部'
    }
  },
  created(){
    vm = this
  },
  mounted(){
    vm.$eventHub.$on('choseSystem', (systemId)=>{
            vm.name = systemId
            console.log(systemId)
          })
  },
  methods:{
    dialog(){
      debugger
      vm.$eventHub.$emit('showGlobalChoseSystemDialog')
    }
  }
}
</script>

<style lang="scss">
#content {
  overflow: auto;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 200px;
  right: 0;
  padding: 20px;
}
.sidebar {
    position:absolute;
    display: block;
    width:200px;
    top:70px;
    left:0;
    bottom:0;
    background-color: #eef1f6;
  }
  .sidebar > ul {
    height:100%;
  }
  .header{
    position:relative;
    top: 0;
    left: 0;
    width:100%;
    height:60px;
    line-height: 60px;
    color: white;
    background-color: #475669;
  }
</style>