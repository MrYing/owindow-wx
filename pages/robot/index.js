Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[],
    inputMsg:"",
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var message = wx.getStorageSync('message');
    var top = message.length * 100;
    this.setData({
      message:message || [],
      scrollTop:top
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.setStorageSync('message',this.data.message);
  },
  inputMsg:function(e){
    this.setData({
      inputMsg:e.detail.value
    })
  },
  sendMessage:function(e){
    this.setData({
      inputMsg:e.detail.value.input
    })
    var that = this
    if(this.data.inputMsg!=""){
      var msg = { type: 0, src: "http://www.tuling123.com/resources/web/v4/img/personalCen/icon40.png", content: this.data.inputMsg };
      this.setMessage(msg);

      wx.request({
        url:"http://www.tuling123.com/openapi/api",
        header:{"Content-type":"application/json"},
        data: { key: "fa7f4d06b0a24b479d29ea0a01672350", info: msg.content},
        success:function(data){
          var reply = { type: 1, src: "http://www.tuling123.com/resources/web/v4/img/personalCen/icon40.png", content: data.data.text };
          that.setMessage(reply);
          that.setData({
            scrollTop:that.data.scrollTop + 300
          })
        }
      })
    }
  },
  setMessage:function(msg){
    var msgList = this.data.message;
    msgList.push(msg);
    this.setData({
      message:msgList,
      inputMsg:"",
    })
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