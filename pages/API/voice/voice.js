// pages/API/voice/voice.js
var util = require('../../../utils/util.js')
var playTimeInterval
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recording: false,
    playing: false,
    hasRecord: false,
    recordTime: 0,
    playTime: 0,
    formatedRecordTime: '00:00:00',
    formatedPlayTime: '00:00:00'
  },

  startRecord:function(){
    this.setData({
      recording:true
    })

    var that = this
    var interval = setInterval(function(){
      that.data.recordTime += 1
      that.setData({
        formatedRecordTime:util.formatTime(that.data.recordTime)
      })
    },1000)
    wx.startRecord({
      success:function(res){
        that.setData({
          hasRecord:true,
          tempFilePath:res.tempFilePath,
          formatedPlayTime:util.formatTime(that.data.playTime)
        })
      },
      complete:function(){
        that.setData({
          recording:false
        })
        clearInterval(interval)
      }
    })
  },

  stopRecord:function(){
    wx.stopRecord()
  },

  playVoice:function(){
    var that = this
    playTimeInterval = setInterval(function(){
      that.data.playTime +=1
      that.setData({
        play:true,
        formatedPlayTime:util.formatTime(that.data.playTime)
      })
    },1000)

    wx.playVoice({
      filePath: this.data.tempFilePath,
      success:function(){
        clearInterval(playTimeInterval)
        that.data.playTime = 0
        that.setData({
          playing:false,
          formatedPlayTime:util.formatTime(that.data.playTime)
        })
      }
    })
  },

  pauseVoice:function(){
    clearInterval(playTimeInterval)
    wx.pauseVoice()
    this.setData({
      playing:false
    })
  },

  stopVoice: function () {
    clearInterval(playTimeInterval)
    this.data.playTime = 0
    this.setData({
      playing: false,
      formatedPlayTime: util.formatTime(this.data.playTime)
    })
    wx.stopVoice()
  },
  clear: function () {
    this.data.recordTime = 0
    this.data.playTime = 0
    clearInterval(playTimeInterval)
    wx.stopVoice()
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
      formatedRecordTime: util.formatTime(0)
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