<template>
  <div>
     <p>{{name}}</P>
     <el-button size="small" @click="getValue">获取store中的值</el-button>{{num}}--{{show}}<p/>
     <el-button size="small" @click="changeValue">改变store中的值</el-button><p/>
     <el-button size="small" @click="setNumSession">设置session中的值</el-button>
     <el-button size="small" @click="getNumSession">获取session中的值</el-button>
     <el-button size="small" @click="removeNumSession">移除session中的值</el-button>{{session}}<p/>
     <div style="width:480px">
     <el-form ref="userForm" :model="userForm"  label-width="80px">
       <el-form-item label="编号" prop="sid">
         <el-input v-model="userForm.sid"></el-input>
       </el-form-item>
       <el-form-item label="名字" prop="userName">
         <el-input v-model="userForm.userName"></el-input>
       </el-form-item>
       <el-form-item label="年龄" prop="age">
         <el-input v-model="userForm.age"></el-input>
       </el-form-item>
       <el-form-item label="地址" prop="adds">
         <el-input v-model="userForm.adds"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="onSubmit('userForm')">提交</el-button>
         <el-button @click="resetForm('userForm')">取消</el-button>
       </el-form-item>
     </el-form>
     </div>
  </div>
</template>
<script>
import StoreTest from '../js/storeTest.js'
export default StoreTest
</script>