<template>
  <div id="app">
    <h1>wx-qq-share</h1>
    <p class="text-left word-break">定制微信，手机QQ，QQ空间APP内的分享内容。代码参照<a href="http://open.mobile.qq.com/api/component/share">http://open.mobile.qq.com/api/component/share</a>，修改点如下</p>
    <ol class="text-left word-break">
      <li>将微信改为采用最新版1.4.0，并加入<span class="code">updateAppMessageShareData</span>和<span class="code">updateTimelineShareData</span>方法；</li>
      <li>增加<span class="code">wxUrl</span>参数，微信分享链接时该链接域名或路径必须与当前页面对应的公众号JS安全域名一致即可，但手机QQ限制分享URL必须与页面URL同一域名，否则设置不生效，所以此处增加单独设置微信分享链接，微信分享会优先采用；</li>
      <li>增加<span class="code">type</span>和<span class="code">dataUrl</span>参数，用于设置<span class="code">onMenuShareAppMessage</span>可使用；</li>
      <li>支持<span class="code">import</span>引用。</li>
    </ol>
    <div class="text-left">
      <h2>用法：</h2>
      <h3>使用模块加载器</h3>
      <pre v-highlightjs="code1"><code class="sh"></code></pre>
      <pre v-highlightjs="code2"><code class="js"></code></pre>
      <div>更多关于微信设置的请参照<a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#10">微信官方文档</a>。</div>
    </div>
  </div>
</template>

<script>
import { setShareInfo } from './../packages/index'
export default {
  name: 'app',
  data () {
    return {
      code1: `npm install --save-dev @fxss5201/wx-qq-share`,
      code2: `import { setShareInfo } from '@fxss5201/wx-qq-share''
      
setShareInfo({
  title: 'wx-qq-share定制微信、qq分享', // 分享标题
  summary: '定制微信，手机QQ，QQ空间APP内的分享内容。定制微信，手机QQ，QQ空间APP内的分享内容。', // 分享内容
  pic: 'http://www.fxss5201.cn/wx-qq-share/share.jpg', // 分享图片
  url: 'http://www.fxss5201.cn/wx-qq-share/', // 分享链接
  // wxUrl: '', // 微信分享链接时该链接域名或路径必须与当前页面对应的公众号JS安全域名一致即可
  // 但手机QQ限制分享URL必须与页面URL同一域名，否则设置不生效，所以此处增加单独设置微信分享链接，仅在微信APP分享时会优先采用
  type: '', // 分享类型,music、video或link，不填默认为link
  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
  // 微信权限验证配置信息，若不在微信传播，可忽略
  WXconfig: {
    swapTitleInWX: true, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
    appId: appId, // 公众号的唯一标识
    timestamp: timestamp, // 生成签名的时间戳
    nonceStr: nonceStr, // 生成签名的随机串
    signature: signature // 签名
  }
})`
    }
  },
  mounted () {
    setShareInfo({
      title: 'wx-qq-share定制微信、qq分享',
      summary: '定制微信，手机QQ，QQ空间APP内的分享内容。定制微信，手机QQ，QQ空间APP内的分享内容。',
      pic: 'http://www.fxss5201.cn/wx-qq-share/share.jpg',
      url: 'http://www.fxss5201.cn/wx-qq-share/'
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
  color: #333;
  margin: 60px auto;
  font-size: 14px;
  max-width: 888px;
  line-height: 1.5;
}
.text-left {
  text-align: left;
}
.word-break {
  word-break: break-all;
}
.code,
a {
  margin: 0 5px;
  color: #1190fa;
}
@import "./style/highlightjs.css";
</style>
