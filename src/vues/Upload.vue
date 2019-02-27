<template>
  <div>
    {{name}}
    <div style="width:400px">
    <el-upload
      class="upload-demo"
      action="http://localhost:8088/user/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success="handleSucces"
      :on-error="handleError"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      ref="upload"
    >
      <el-button size="small" type="primary">选择文件</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </div>
    {{mesg}}
    <el-button size="small" @click="clean">清空</el-button>
    <el-button size="small" @click="emitter">发射(事件广播)</el-button>
  </div>
</template>
<script>
import Upload from "../js/upload.js";
export default Upload;
</script>




