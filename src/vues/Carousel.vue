<template>
  <div>
    {{name}}
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="250px">
        <el-carousel-item v-for="item in urls" :key="item">
          <!-- <h3>{{ item }}</h3> -->
          <img border="0" :src="item.url" alt="Pulpit rock" width="500" height="250">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-button size="small" @click="cookie">设置cookie</el-button>
    <el-button size="small" @click="getCookie">读取cookie</el-button>
    <el-button size="small" @click="removeCookie">移除cookie</el-button>
    <h3>{{cookieValue}}</h3>
  </div>
</template>
<script>
import Carousel from "../js/carousel.js";
export default Carousel;
</script>
<style scoped lang="scss">
 .block {
   width: 500px;
 }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
