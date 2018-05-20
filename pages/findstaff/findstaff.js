// pages/findstaff.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定位信息 
    latitude: '',
    longitude: '',
    //物品信息
    staffName: '',
    staffIntr: '',
    //TODO 数据库负责插入时间
    eventType: 'LOST'  //失物 拾物
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  locate: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        }),
        wx.showModal({
          title: '定位成功',
          showCancel: false
        })  
      },
      fail: function(){
        wx.showModal({
          title: '定位失败，请再次尝试',
          showCancel: false
        })  
      }
    })
  },
  staffNameInput: function(e){
    this.setData({
      staffName: e.detail.value
    })
  },
  staffIntrInput: function(e){
    this.setData({
      staffIntr: e.detail.value
    });
    // console.log(this.data.staffName);
    // console.log(this.data.staffIntr);
    // console.log(this.data.latitude);
    // console.log(this.data.longitude);
  },
  uploadInfo: function(){
    console.log(this.data.staffName);
    console.log(this.data.staffIntr);
    console.log(this.data.latitude);
    console.log(this.data.longitude);
    console.log(this.data.eventType);
    console.log(app.globalData.userInfo.nickName);
    wx.request({
      url: 'http://rouzip.com:4000/uploadInfo', //你的后台地址
      //url: 'http://www.baidu.com',
      data: JSON.stringify({
        staffName: this.data.staffName,     //物品名
        staffIntr: this.data.staffIntr,     //物品描述
        latitude: this.data.latitude,       //地点
        longitude: this.data.longitude,     //地点
        nickName: app.globalData.userInfo.nickName,   //申请者的昵称
        eventType: this.data.eventType  //捡到了东西||丢了东西 标志位
      }),
      method: "POST",  
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      },
      complete: function (res) {
        wx.showModal({
          title: '添加失物信息成功',
          content: '点击确定返回首页',
          showCancel: false
        })
        wx.redirectTo({
          url: '../logs/logs' //TODO
        })
        console.log(res.data)
      }
    })
  },
  radioChange: function(e){
    this.setData({ eventType: e.detail.value})
    console.log(e.detail.value)
  }
})