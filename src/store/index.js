import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: true,
        num: 18
    },
    getters: {
        getNum(state){
            return state.num
        },
        getShow(state){
            return state.show
        }
    },
    mutations: {
        changeNum(state, val){
            state.num += val
        },
        set_numSession(state, val){
            sessionStorage.num = val
        },
        remove_numSession(state){
            sessionStorage.removeItem('num')
        }
    }
})