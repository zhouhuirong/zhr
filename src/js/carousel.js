var vm
export default {
    data(){
        return{
            name: '轮播',
            urls: [ {url: require('../images/1.jpg')},
                    {url: require('../images/2.jpg')},
                    {url: require('../images/3.jpg')},
                    {url: require('../images/4.jpg')}
                  ],
            cookieValue: '等待...'
        }
    },
    created(){
      vm = this
    },
    mounted(){
        vm.$eventHub.$on('choseSystem', (systemId)=>{
            console.log(systemId)
          })
    },
    methods:{
        choseSystem(){
            vm.$eventHub.$on('choseSystem', (systemId)=>{
                vm.systemId = systemId
              })
        },
        cookie (){
            this.$cookies.set('keyName', '你好啊',1)
        },
        getCookie(){
            vm.cookieValue = this.$cookies.get('keyName')
        },
        removeCookie(){
            vm.$cookies.remove('keyName')
            vm.cookieValue = '等待...'
        }
    }
}