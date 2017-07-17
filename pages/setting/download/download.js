// pages/setting/download/download.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autodown: true,
    autoplay: true,

    toastHidden: true,
    modalHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var autodown = wx.getStorageSync(app.key.isAutoDown),autoplay = wx.getStorageSync(app.key.isAutoPlay);
    if(!autodown){
      this.setData({
        autodown: autodown
      })
    }
    if(!autoplay){
      this.setData({
        autoplay:autoplay
      })
    }
  },

  changeHandler:function(e){
    var key = '',tag=e.currentTarget.dataset.tag;
    if('autoplay' == tag){
      key = app.key.isAutoPlay;
    }else if('autodown' == tag){
      key = app.key.isAutoDown
    }
    wx.setStorageSync(key, e.detail.value)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  toastChange:function(e){

    this.setData({
      toastHidden:true
    })
  },

  modalChange:function(e){
    this.setData({
      modalHidden:true
    })

    if(e.type == "confirm"){
      wx.clearStorage();
      this.setData({
        toastHidden:false
      })
    }
  },

  clearStorageHandle:function(e){
    this.setData({
      modalHidden:false
    })
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
  
  }
})