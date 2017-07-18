// pages/API/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hasLogin:app.globalData.hasLogin
    })
  },

  login:function(){
    var that = this
    wx.login({
      success:function(res){
        app.globalData.hasLogin = true
        that.setData({
          hasLogin:true
        })
        that.update()
      }
    })
  }
})