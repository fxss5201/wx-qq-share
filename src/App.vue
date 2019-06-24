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
      pic: 'http://www.fxss5201.cn/project/share-test/img/share.jpg',
      url: 'http://www.fxss5201.cn/project/share-test/'
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
