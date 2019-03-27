<template>
  <div class="app-container">
   <!-- <p class="warn-content">
            <a href="https://blog.csdn.net/beyond__devil/article/details/78826826" target="_blank">参考PDF https://cdn.qlippie.com/pdf/Egame_Brandbook.pdf#zoom=42.1
            </a>
        </p> -->
        <el-button  size="small" @click="back" @keyup.enter.native="back">返回</el-button>
  <object class="app-container" id="show-resources" type="application/pdf" internalinstanceid="291" data="C:\Users\Administrator\Desktop" title="">
	</object>

  </div>
</template>
<script>
export default {
    data() {
      return{

      }
    },
    mounted() {

    },
    methods:{
      back(){
          this.$router.replace({ path: '/' })
      }
    }
}
</script>
<style type="text/css">
			#show-resources {
				width: 100%;
				height: 90%;
				visibility: visible;
				position: fixed;
				z-index: 10011;
				margin: auto;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				transition: all .8s cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
				animation-fill-mode: forwards;
				animation-direction: alternate;
			}
			
			object,
			embed {
				-webkit-animation-duration: .001s;
				-webkit-animation-name: playerInserted;
				-ms-animation-duration: .001s;
				-ms-animation-name: playerInserted;
				-o-animation-duration: .001s;
				-o-animation-name: playerInserted;
				animation-duration: .001s;
				animation-name: playerInserted;
			}
			
			* {
				margin: 0;
				padding: 0;
				text-decoration: none;
			}
		</style>