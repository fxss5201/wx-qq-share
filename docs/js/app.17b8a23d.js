(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)s=o[u],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wx-qq-share/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("wx-qq-share")]),e._m(0),e._m(1),n("div",{staticClass:"text-left"},[n("h2",[e._v("用法：")]),n("h3",[e._v("使用模块加载器")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code1,expression:"code1"}]},[n("code",{staticClass:"sh"})]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code2,expression:"code2"}]},[n("code",{staticClass:"js"})]),e._m(2)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-left word-break"},[e._v("定制微信，手机QQ，QQ空间APP内的分享内容。代码参照"),n("a",{attrs:{href:"http://open.mobile.qq.com/api/component/share"}},[e._v("http://open.mobile.qq.com/api/component/share")]),e._v("，修改点如下")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"text-left word-break"},[n("li",[e._v("将微信改为采用最新版1.4.0，并加入"),n("span",{staticClass:"code"},[e._v("updateAppMessageShareData")]),e._v("和"),n("span",{staticClass:"code"},[e._v("updateTimelineShareData")]),e._v("方法；")]),n("li",[e._v("增加"),n("span",{staticClass:"code"},[e._v("wxUrl")]),e._v("参数，微信分享链接时该链接域名或路径必须与当前页面对应的公众号JS安全域名一致即可，但手机QQ限制分享URL必须与页面URL同一域名，否则设置不生效，所以此处增加单独设置微信分享链接，微信分享会优先采用；")]),n("li",[e._v("增加"),n("span",{staticClass:"code"},[e._v("type")]),e._v("和"),n("span",{staticClass:"code"},[e._v("dataUrl")]),e._v("参数，用于设置"),n("span",{staticClass:"code"},[e._v("onMenuShareAppMessage")]),e._v("可使用；")]),n("li",[e._v("支持"),n("span",{staticClass:"code"},[e._v("import")]),e._v("引用。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("更多关于微信设置的请参照"),n("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#10"}},[e._v("微信官方文档")]),e._v("。")])}],s=(n("4917"),"//res.wx.qq.com/open/js/jweixin-1.4.0.js"),o="//open.mobile.qq.com/sdk/qqapi.js?_bid=152",c="//qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js?_bid=339";function l(e,t){var n=document,a=n.head||n.getElementsByTagName("head")[0]||n.documentElement,r=n.createElement("script");r.onload=t,r.onerror=function(){},r.async=!0,r.src=e[0],a.appendChild(r)}function p(e){e.WXconfig&&l([s],function(t){t.config||(t=window.wx);var n=e.WXconfig;t.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"]}),t.error(function(e){}),t.ready(function(){var a={title:e.title,desc:e.summary,link:e.wxUrl||e.url,imgUrl:e.pic,type:e.type||"",dataUrl:e.dataUrl||"",success:function(){e.callback&&e.callback()},cancel:function(){}};t.updateAppMessageShareData(a),t.updateTimelineShareData(a),t.onMenuShareAppMessage(a),t.onMenuShareQQ(a),t.onMenuShareQZone(a),n.swapTitleInWX?t.onMenuShareTimeline({title:e.summary,link:e.wxUrl||e.url,imgUrl:e.pic,success:function(){e.callback&&e.callback()},cancel:function(){}}):t.onMenuShareTimeline(a)})})}function u(e){var t={title:e.title,desc:e.summary,share_url:e.url,image_url:e.pic};function n(){try{e.callback?window.mqq.ui.setOnShareHandler(function(n){3===n&&(e.swapTitle||e.WXconfig&&e.WXconfig.swapTitleInWX)?t.title=e.summary:t.title=e.title,t.share_type=n,t.back=!0,window.mqq.ui.shareMessage(t,function(t){0===t.retCode&&e.callback&&e.callback.call(this,t)})}):window.mqq.data.setShareInfo(t)}catch(n){}}window.mqq?n():l([o],function(){n()})}function d(e){function t(){if(window.QZAppExternal&&window.QZAppExternal.setShare){for(var t=[],n=[],a=[],r=[],i=0;i<5;i++)t.push(e.pic),r.push(e.url),4===i&&(e.swapTitle||e.WXconfig&&e.WXconfig.swapTitleInWX)?(n.push(e.summary),a.push(e.title)):(n.push(e.title),a.push(e.summary));window.QZAppExternal.setShare(function(e){},{type:"share",image:t,title:n,summary:a,shareURL:r})}}window.QZAppExternal?t():l([c],function(){t()})}function f(e){var t=navigator.userAgent,n=t.match(/MicroMessenger\/([\d\.]+)/),a=t.match(/QQ\/([\d\.]+)/),r=-1!==t.indexOf("Qzone/");n&&p(e),a&&u(e),r&&d(e)}window.setShareInfo=f;var h=f,m={name:"app",data:function(){return{code1:"npm install --save-dev @fxss5201/wx-qq-share",code2:"import { setShareInfo } from '@fxss5201/wx-qq-share''\n      \nsetShareInfo({\n  title: 'wx-qq-share定制微信、qq分享', // 分享标题\n  summary: '定制微信，手机QQ，QQ空间APP内的分享内容。定制微信，手机QQ，QQ空间APP内的分享内容。', // 分享内容\n  pic: 'http://www.fxss5201.cn/wx-qq-share/share.jpg', // 分享图片\n  url: 'http://www.fxss5201.cn/wx-qq-share/', // 分享链接\n  // wxUrl: '', // 微信分享链接时该链接域名或路径必须与当前页面对应的公众号JS安全域名一致即可\n  // 但手机QQ限制分享URL必须与页面URL同一域名，否则设置不生效，所以此处增加单独设置微信分享链接，仅在微信APP分享时会优先采用\n  type: '', // 分享类型,music、video或link，不填默认为link\n  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空\n  // 微信权限验证配置信息，若不在微信传播，可忽略\n  WXconfig: {\n    swapTitleInWX: true, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）\n    appId: appId, // 公众号的唯一标识\n    timestamp: timestamp, // 生成签名的时间戳\n    nonceStr: nonceStr, // 生成签名的随机串\n    signature: signature // 签名\n  }\n})"}},mounted:function(){h({title:"wx-qq-share定制微信、qq分享",summary:"定制微信，手机QQ，QQ空间APP内的分享内容。定制微信，手机QQ，QQ空间APP内的分享内容。",pic:"http://www.fxss5201.cn/wx-qq-share/share.jpg",url:"http://www.fxss5201.cn/wx-qq-share/"})}},v=m,w=(n("5c0b"),n("2877")),g=Object(w["a"])(v,r,i,!1,null,null,null),_=g.exports,q=n("998c"),x=n.n(q);a["a"].use(x.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.17b8a23d.js.map