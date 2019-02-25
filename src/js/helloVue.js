
let echarts = require('echarts/lib/echarts');
// 引入柱状图
// require('echarts/lib/chart/bar');
// 引入柱状图
// require('echarts/lib/chart/pie');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
var now

export default {
	data(){
        return{
          msg:'你好',
          daterange:'',
          value1:'',
          value2:'',
          // now: '',
          pickerOptions1: {
          disabledDate(time) {
            return time > now.d
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
         },
         tx: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
         ty: ['10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],
         t: {
           dnow: [0.8, 0.98, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, .69, 0.25, 0.36, 0.56],
           dlast: [1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65, 0.12]
         }
        }
     },
     mounted () {
      debugger
      let a = this.$route.params.date
      let b = new Date()
      now = {name:"11",d:b}
      this.drawBar()
     },
     
     methods: {
      back(){
        this.$router.go(-1)
      },
      drawBar(){
        // 基于dom，初始化echarts实例
        let barGraph = echarts.init(document.getElementById('barGraph'));
        // 绘制图表
        barGraph.setOption({
        title: {
         text: '全年产量趋势图',
         left: 'center'
        },
        tooltip: {
         trigger: 'item',
         formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
         left: 'center',
         data: ['本年', '上年'],
         bottom:0
        },
        xAxis: {
         type: 'category',
         name: 'x',
         splitLine: {show: false},
         data: this.tx
        },
        grid: {
         left: '1%',
         right: '2%',
         bottom: '8%',
         containLabel: true
        },
        yAxis: {
         type: 'category',
         name: 'y',
         splitLine: {show: true},
         data: this.ty
        },
        series: [
         {
         name: '本年',
         type: 'line',
         data: this.t.dnow
         },
         {
         name: '上年',
         type: 'line',
         data: this.t.dlast
         },
        ]
        })
       }
     }
}