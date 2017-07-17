// pages/setting/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this.map = { 'calm': '平静', 'happy': '愉快', 'puzzled': '困惑', 'surprised': '惊讶', 'angry': '愤怒', 'scared': '恐惧', 'sad': '悲伤', 'smiling': '爱心'};

    getApp().getPlayInfos(function(data){
      var records = [],hashs;

      for(var _type in data){
        hashs = data[_type];
        for(var h in hashs){
          records.push(hashs[h])
        }
      }
        records.map(function(record){
          record.typeName = map[record.type]
        })

        records.sort(function(record1,record2){
          if(record1.num == record2.num){
            return record2.lasttime - record1.lasttime
          }
          return record2.num - record1.num
        })

        that.setData({
          records:records
        })
    })
  },

  clickItemHandle:function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    var music = this.data.records[index]
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