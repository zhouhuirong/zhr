var vm
export default {
    data(){
        return{
            name: '嘻嘻',
            num: '',
            show: false,
            session: '...'
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
        }
    }
}