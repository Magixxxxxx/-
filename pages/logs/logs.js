//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    markers: [{
      iconPath: "../resources/find.png",
      id: 0,
      latitude: 28.15009,
      longitude: 112.94349,
      width: 50,
      height: 50
    }],
    logs: []
  },
  marktap: function() {
    //TODO:
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
