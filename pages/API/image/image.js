// pages/API/image/image.js

var sourceType = [['camera'],['album'],['camera','album']]
var sizeType = [['compressed'],['original'],['compressed','original']]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sourceTypeIndex:2,
    sourceType:['拍照','相册','拍照或相册'],


    sizeTypeIndex:2,
    sizeType:['压缩','原图','压缩或原图'],

    countIndex:8,
    count:[1,2,3,4,5,6,7,8,9]
  },

  sourceTypeChange:function(e){
    this.setData({
      sourceTypeIndex:e.detail.value
    })
  },

  sizeTypeChange:function(e){
    this.setData({
      sizeTypeIndex:e.detail.value
    })
  },

  countChange:function(e){
    this.setData({
      countIndex:e.detail.value
    })
  },

  chooseImage:function(){
    var that = this
    wx.chooseImage({
      sourceType:sourceType[this.data.sourceTypeIndex],
      sizeType:sizeType[this.data.sizeTypeIndex],
      count:this.data.count[this.data.countIndex],
      success: function(res) {
        that.setData({
          imageList:res.tempFilePaths
        })
      },
    })
  },

  previewImage:function(e){
    var current = e.target.dataset.src

    wx.previewImage({
      current:current,
      urls: this.data.imageList
    })
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
  
  }
})