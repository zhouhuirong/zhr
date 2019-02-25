var vm
export default {
    data(){
        return {
            name: '赵钱孙',
            mesg:'',
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
    mounted(){
        vm = this
    },
    methods: {
        handleRemove(file, fileList) {
            debugger
            if (file.status === 'success') {
                this.$http.get('http://localhost:9090/mqlog/remove'+'?name='+file.name+'&uid='+file.uid,)
                  .then(function (response) {
                    console.log(response);
                    debugger
                    vm.$message.success("文件"+response.data+"已删除");
                  })
                  .catch(function (error) {
                    console.log(error);
                });
              }
     
        },
        handlePreview(file) {
            if (file.status === 'success') {
                this.imageVisiable = true
                this.$nextTick(() => {
                  this.$refs.showImage.init(file.url)
                })
              }
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleSucces(response, file, fileList){
          debugger
          this.mesg = response
        },
        handleError(err, file, fileList){
            debugger
        let body = JSON.parse(err.message)
          this.$message.error(body.message);
        },
        clean(){
            this.$refs.upload.clearFiles()
        },
        emitter(){
          this.$eventHub.$emit('choseSystem', '发射子弹')
          // this.$emit('choseSystem', '发射子弹')
          this.$eventHub.$emit('showGlobalChoseSystemDialog')
        }
      }
}