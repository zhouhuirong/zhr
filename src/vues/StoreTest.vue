<template>
  <div>
     <p>{{name}}</P>
     <el-button size="small" @click="getValue">获取store中的值</el-button>{{num}}--{{show}}<p/>
     <el-button size="small" @click="changeValue">改变store中的值</el-button><p/>
     <el-button size="small" @click="setNumSession">设置session中的值</el-button>
     <el-button size="small" @click="getNumSession">获取session中的值</el-button>
     <el-button size="small" @click="removeNumSession">移除session中的值</el-button>{{session}}
  </div>
</template>
<script>
import StoreTest from '../js/storeTest.js'
export default StoreTest
</script>