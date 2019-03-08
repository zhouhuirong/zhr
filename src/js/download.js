var vm
export default {
    data(){
        return{
          name: '文件下载'
        }
    },
    mountde(){
        vm = this
    },
    methods:{
        download(){
            let name = '1加.txt'
            // this.$http.get('http://localhost:8089/download/file' + '?fileName=' + name)
            //       .then(function (response) {
            //         console.log(response)
            //       })
            //       .catch(function (error) {
            //         console.log(error)
            //     })
            window.location.href = 'http://localhost:8089/download/file'+ '?fileName=' + name
        }
    }
}