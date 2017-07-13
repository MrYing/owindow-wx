// pages/movie/index.js
// mgtv API 操作
import newData from '../../Datas/mgtv.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
   title:'强档推荐',
   loading:false,
   loadtxt:'正在加载',
   bg:'',
   trumpArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    let _this = this;
    let param = {
      API_URL:'http://mobile.api.hunantv.com/channel/getWPDetail',
      data:{}
    };

    newData.result(param).then(data=>{
      let datas = data.data.data;
      this.setData({
        trumpArr:data.data.data,
        bg:datas[0].picUrl
      })
    }).catch(e=>{
      this.setData({
        loadtxt:'数据加载异常',
        loading:false
      })
    })
  },
  changeSwiper:function(e){
    let _this = this;
    let index = e.detail.current;

    this.setData({
      bg:_this.data.trumpArr[index].picUrl
    })
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