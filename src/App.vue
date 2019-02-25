<template>
  <div id="app">
    <navigation>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    </navigation>
    <!-- 使用全局组件 -->
    <Dialog ref="Dialog"></Dialog>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!--
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->