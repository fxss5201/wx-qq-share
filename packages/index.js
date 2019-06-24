/* eslint-disable no-useless-escape */
let wxapi = '//res.wx.qq.com/open/js/jweixin-1.4.0.js'
let qqapi = '//open.mobile.qq.com/sdk/qqapi.js?_bid=152'
let qzapi = '//qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js?_bid=339'
function _require (url, onload) {
  let doc = document
  let head = doc.head || (doc.getElementsByTagName('head')[0] || doc.documentElement)
  let node = doc.createElement('script')
  node.onload = onload
  node.onerror = function () {}
  node.async = true
  node.src = url[0]
  head.appendChild(node)
}
function _initWX (data) {
  if (!data.WXconfig) return
  _require([wxapi], function (wx) {
    if (!wx.config) wx = window.wx
    let conf = data.WXconfig
    wx.config({
      debug: false,
      appId: conf.appId,
      timestamp: conf.timestamp,
      nonceStr: conf.nonceStr,
      signature: conf.signature,
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone']
    })
    wx.error(function (res) {})
    wx.ready(function () {
      let config = {
        title: data.title,
        desc: data.summary,
        link: data.url,
        imgUrl: data.pic,
        type: data.type || '', // 分享类型,music、video或link，不填默认为link
        dataUrl: data.dataUrl || '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          data.callback && data.callback()
        },
        cancel: function () {}
      }
      wx.updateAppMessageShareData(config)
      wx.updateTimelineShareData(config)
      wx.onMenuShareAppMessage(config)
      wx.onMenuShareQQ(config)
      wx.onMenuShareQZone(config)
      if (conf.swapTitleInWX) {
        wx.onMenuShareTimeline({
          title: data.summary,
          link: data.url,
          imgUrl: data.pic,
          success: function () {
            data.callback && data.callback()
          },
          cancel: function () {}
        })
      } else {
        wx.onMenuShareTimeline(config)
      }
    })
  })
}
function _initQQ (data) {
  let info = {
    title: data.title,
    desc: data.summary,
    share_url: data.url,
    image_url: data.pic
  }
  function doQQShare () {
    try {
      if (data.callback) {
        window.mqq.ui.setOnShareHandler(function (type) {
          if (type === 3 && (data.swapTitle || (data.WXconfig && data.WXconfig.swapTitleInWX))) {
            info.title = data.summary
          } else {
            info.title = data.title
          }
          info.share_type = type
          info.back = true
          window.mqq.ui.shareMessage(info, function (result) {
            if (result.retCode === 0) {
              data.callback && data.callback.call(this, result)
            }
          })
        })
      } else {
        window.mqq.data.setShareInfo(info)
      }
    } catch (e) {}
  }
  if (window.mqq) {
    doQQShare()
  } else {
    _require([qqapi], function () {
      doQQShare()
    })
  }
}
function _initQZ (data) {
  function doQZShare () {
    if (window.QZAppExternal && window.QZAppExternal.setShare) {
      let imageArr = []
      let titleArr = []
      let summaryArr = []
      let shareURLArr = []
      for (let i = 0; i < 5; i++) {
        imageArr.push(data.pic)
        shareURLArr.push(data.url)
        if (i === 4 && (data.swapTitle || (data.WXconfig && data.WXconfig.swapTitleInWX))) {
          titleArr.push(data.summary)
          summaryArr.push(data.title)
        } else {
          titleArr.push(data.title)
          summaryArr.push(data.summary)
        }
      }
      window.QZAppExternal.setShare(function (data) {
      }, { 'type': 'share', 'image': imageArr, 'title': titleArr, 'summary': summaryArr, 'shareURL': shareURLArr })
    }
  }
  if (window.QZAppExternal) {
    doQZShare()
  } else {
    _require([qzapi], function () {
      doQZShare()
    })
  }
}
function init (opts) {
  let ua = navigator.userAgent
  let isWX = ua.match(/MicroMessenger\/([\d\.]+)/)
  let isQQ = ua.match(/QQ\/([\d\.]+)/)
  let isQZ = ua.indexOf('Qzone/') !== -1
  isWX && _initWX(opts)
  isQQ && _initQQ(opts)
  isQZ && _initQZ(opts)
}

window.setShareInfo = init

export const setShareInfo = init
