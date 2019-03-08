<template>
  <div>
    <p>{{name}}</p>
    <el-button size="small" type="primary" @click="download">下载1.txt</el-button>
  </div>
</template>
<script>
import Download from '../js/download.js'
export default Download
</script>