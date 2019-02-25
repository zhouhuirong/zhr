<template>
	<div id="top-container">
	<div>{{msg}}</div>
    <el-row>
	<el-button type="primary" @click="back">返回</el-button>
    </el-row>
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="block">
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
  <div class="charts">
  <div id="barGraph" style="height: 350px;width:700px"></div>
 </div>
  <span>阿里图库</span>
  <i class="iconfont el-icon-mnc-icon-3"></i>
    </div>
</template>

<script >
import HelloVue from '../js/helloVue.js'
export default HelloVue
</script>
<style scoped lang="scss">
  #top-container {
    height: 10px;
    margin-bottom: 20px;
  }
</style>


