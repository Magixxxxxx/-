//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    markers: [
      {
        iconPath: "../resources/lost.png",
        id: 1,
        latitude: 28.22778,
        longitude: 112.93886,
        width: 30,
        height: 30,
        callout: {
          content: '雨伞\n放广场保安亭了',
          fontSize: 14,
          color: '#ffffff',
          bgColor: '#87CEFA',
          padding: 8,
          borderRadius: 4,
          boxShadow: '4px 8px 16px 0 rgba(0)'
        }
      },
      {
        iconPath: "../resources/lost.png",
        id: 1,
        latitude: 28.22708,
        longitude: 112.93896,
        width: 30,
        height: 30,
        callout: {
          content: '黑色钱包\n移交至了东边广场保卫处',
          fontSize: 14,
          color: '#ffffff',
          bgColor: '#87CEFA',
          padding: 8,
          borderRadius: 4,
          boxShadow: '4px 8px 16px 0 rgba(0)'
        }
      },
      {
        iconPath: "../resources/find.png",
        id: 1,
        latitude: 28.22778,
        longitude: 112.93996,
        width: 30,
        height: 30,
        callout: {
          content: '张三的校园卡\n联系方式12345',
          fontSize: 14,
          color: '#ffffff',
          bgColor: '#87CEFA',
          padding: 8,
          borderRadius: 4,
          boxShadow: '4px 8px 16px 0 rgba(0)'
        }
      }
    ],
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
  /*   wx.request({
      url: 'http://rouzip.me:4000/getAll', //后台地址
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
              content: res.data[i].thing,
              bgColor: "yellow"
            }
          })
        }

        this.setData({
          markers: markers_new
        })
      }
    })*/
    wx.getLocation({
      success: res => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        console.log(res.latitude),
        console.log(res.longitude)
      }
    })

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
    })
  }
})
