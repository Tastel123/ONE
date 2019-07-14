// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "title": "一个阅读",
    imgUrls: [
      'https://wx2.sinaimg.cn/large/694c568fly1g3qbtxbuq8j20fk078jvg.jpg',
      'https://wx3.sinaimg.cn/large/694c568fly1g3rnmpezduj20fk078q7h.jpg'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca457f0c4e9a575b66b6265/example/ONE-read',
      success: function (res) {
        console.log(res)
        that.setData({
          item: res.data.read
        })
      }
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