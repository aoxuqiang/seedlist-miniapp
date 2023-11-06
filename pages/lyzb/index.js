// pages/lyzb/index.js
import projectList from './data'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 添加轮播图片的属性
    imageProps: {
      // 图片按宽度自适应
      mode: 'widthFix'
    },
    // 轮播从下标为 0 的图片开始
    current: 0,
    // 自动轮播
    autoplay: true,
    //  每张图片的停留时间
    duration: 500,
    // 轮播时间间隔
    interval: 5000,
    // 轮播图的图片列表
    swiperList: [
      'https://img-blog.csdnimg.cn/de253e12408f4133adf8f82982e22ce5.jpeg',
      'https://img-blog.csdnimg.cn/e9fb6f4e461744e593ca305440760e16.jpeg',
      'https://img-blog.csdnimg.cn/63926e3235434cd8bd30285f5612d303.jpeg',
      'https://img-blog.csdnimg.cn/601a29123c17471dac01e358dce8e1fe.jpeg'
    ],
    // 默认 tab 页签的 index
    defaultTab: '1',
    // 分类页签 tab 列表
    tabList: [
      {
        index: '1',
        label: '路演进行中'
      },
      {
        index: '2',
        label: '路演预告'
      },
    ],
    projectList: projectList
  },
  // 切换页签时触发
  tabChange: function (e) {
    let index = e.detail.value
    console.log(index)
    if (index !== '1') {
      this.setData({
       
      })
    } else {
      this.setData({
        
      })
    }
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
    this.getTabBar().init();
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