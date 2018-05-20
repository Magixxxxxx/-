//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    markers: [],
    logs: [],
    latitude: 29.15009,
    longitude: 112.94349
  },

  marktap: function() {
    //TODO:
  },

  found: function() {
    wx.navigateTo({
      url: '../findstaff/findstaff'
    })
  },

  lost: function() {
    wx.navigateTo({
      url: '../findstaff/findstaff'
    })
  },

  onLoad: function () {
     wx.request({
      url: 'http://rouzip.com:4000/getAll', //后台地址
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "get",
      success: res => {
        console.log(res.data)
        var markers_new = []
        for(var i=0;i<res.data.length;i++){
          markers_new.push({
            iconPath: "../resources/lost.png",
            id: i,
            latitude: res.data[i].x,
            longitude: res.data[i].y,
            width: 30,
            height: 30,
            callout: {
              content: res.data[i].thing
            }
          })
        }

        this.setData({
          markers: markers_new
        })
      }
    })
    wx.getLocation({
      success: res => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
    })
  }
})
