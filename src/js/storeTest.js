var vm
export default {
    data(){
        return{
            name: '嘻嘻',
            num: '',
            show: false,
            session: '...',
            userForm: {
                sid: '',
                userName: '',
                age: '',
                adds: ''
            }
        }
    },
    created(){
        vm = this
    },
    mountde(){
    
    },
    methods:{
        getValue(){
           this.num = this.$store.state.num
           this.show = this.$store.getters.getShow
        },
        changeValue(){
            this.$store.commit('changeNum', 10)
        },
        setNumSession(){
            this.$store.commit('set_numSession',30)
        },
        getNumSession(){
            this.session = sessionStorage.getItem('num')
        },
        removeNumSession(){
            this.$store.commit('remove_numSession')
        },
        onSubmit(userForm){
            let body = vm.userForm
            this.$http.post('http://localhost:8089/user/inster', body)
                  .then(function (response) {
                      debugger
                    vm.$message.success("新增成功")
                    vm.$refs[userForm].resetFields()
                  })
                  .catch(function (error) {
                    vm.$message.error("异常")
                })
        },
        resetForm(userForm){
            debugger
            vm.$refs[userForm].resetFields()
        }
    }
}