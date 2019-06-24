<template>
  <div id="app">
  </div>
</template>

<script>
import { setShareInfo } from './../packages/index'
export default {
  name: 'app',
  mounted () {
    setShareInfo({
      title: 'wx-qq-share定制微信、qq分享',
      summary: '定制微信，手机QQ，QQ空间APP内的分享内容。定制微信，手机QQ，QQ空间APP内的分享内容。',
      pic: 'https://github.com/fxss5201/wx-qq-share/tree/master/docs/img/share.jpg',
      url: 'https://fxss5201.github.io/wx-qq-share/'
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
