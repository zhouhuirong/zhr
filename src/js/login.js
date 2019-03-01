var vm 
export default {
    data(){
       return{
         name: '登陆',
         show: true
       } 
    },
    mounted(){
        vm = this
        loadUse()
    },
    methods: {
        login(){
            vm.$router.replace({ path: '/home' })
        }
    }
}
function loadUse() {
    // this.$http.get('/zhr//user/login', function(response) {
    //    let list = response.data
    //    vm.name = list[0].userName
    // })
    debugger
    vm.$http.get('http://localhost:8089/user/login')
                  .then(function (response) {
                    console.log(response)
                    let list = response.data
                    vm.name = list[0].userName
                  })
                  .catch(function (error) {
                    console.log(error)
                })
}