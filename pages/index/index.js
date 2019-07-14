// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "一个",
    coverImg: '../../assets/images/home1.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  // open_list: function (opts) {
  //   this.setData({ text: opts.currentTarget.dataset.title, open: false });
  // },
  // //左侧导航的开关函数
  // off_canvas: function () {
  //   this.data.open ? this.setData({ open: false }) : this.setData({ open: true });
  // },
  onLoad: function (options) {
    let that = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457f0c4e9a575b66b6265/example/ONE-index',
      success:function(res){
        console.log(res)
        that.setData({
          item: res.data.data
        })
      }
    })
  },
  oneStory() {
    wx.navigateTo({
      url: '../oneStory/oneStory'
    })
  },
  toPics(){
    wx.navigateTo({
      url: '../pics/pics'
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