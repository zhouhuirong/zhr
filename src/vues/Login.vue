<template>
  <div>
      <p>{{name}}</p>
      <el-button  size="small" @click="login" v-show="show">登陆</el-button>
      <el-button  size="small" @click="PDF" v-show="show">查看文档</el-button>
  </div>
</template>
<script>
import Login from '../js/login.js'
export default Login
</script>
