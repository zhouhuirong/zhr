//import QRCode from 'qrcodejs2'  // 引入qrcode
var vm
export default {
    data(){
        return{
            name: '二三十',
            text: 'https://www.baidu.com'
        }
    },
    created(){
       vm = this
    },
    mounted(){
    },
    methods:{
        createqQR () {
            //new this.$QRCode("qrcode", "http://www.baidu.com")
            document.getElementById("qrcode").innerHTML = "";
            let qrcode = new this.$QRCode('qrcode', {
                width: 132,  
                height: 132,
                text: vm.text, // 二维码内容https://www.baidu.com
                colorDark : "#000",
                colorLight : "#fff",
              })
        },
        create(){
            this.createqQR()
        },
        clean(){
            document.getElementById("qrcode").innerHTML = "";
        }
    }
}