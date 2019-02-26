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
    },
    methods: {
        login(){
            vm.$router.replace({ path: '/home' })
        }
    }
}