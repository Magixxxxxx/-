//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    longitude: 28.1478761093,
    latitude:112.9438734055,
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
