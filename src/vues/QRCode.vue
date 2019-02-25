<template>
  <div>
      <p>{{name}}</p>
      <div style="width:400px">
      <el-input v-model="text"  placeholder="请输入二维码内容">
        <template slot="prepend">请输入二维码内容</template>
      </el-input>
      </div>
      <el-button size="small" type="success" @click="create">生存二维码</el-button>
      <el-button size="small" type="warning" @click="clean">清除二维码</el-button>
      <div id="qrcode" ref="qrcode"></div>
  </div>
</template>
<script>
import QRCode from "../js/qrCode.js"
export default QRCode
</script>


