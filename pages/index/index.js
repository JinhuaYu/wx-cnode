// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      { tab: 'all', name: '全部' },
      { tab: 'good', name: '精华' },
      { tab: 'share', name: '分享' },
      { tab: 'ask', name: '问答' },
      { tab: 'job', name: '招聘' },
      { tab: 'test', name: '测试' }
    ],
    topicsList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopicList()
  },

  getTopicList() {
    var _this = this;
    wx.request({
      url:'https://cnodejs.org/api/v1/topics',
      data: {
        page : 1,
        tab: 'all',
        limit: 10,
        mdrender: false 
      },
      success (res) {
        console.log(res.data)
        _this.setData({
          topicsList: res.data.data
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