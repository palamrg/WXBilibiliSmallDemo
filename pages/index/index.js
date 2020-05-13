//导入静态数据
const tempNavList = require("../../tempDB/tempNavList.js");
const tempSwiperList = require("../../tempDB/tempSwiperList.js");
const tempVideoList = require("../../tempDB/tempVideoList.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList: [],
    //被点击的首页导航的索引
    currentIndexNav: 0,
    //轮播图数据
    swiperList: [],
    //视频列表数据
    videoList: []
  },

  /**
   * 点击首页导航栏
   */
  activeNav(e) {
    console.log(e.currentTarget.dataset.index);
    this.setData({
      // currentIndexNav: e.currentTarget.dataset.index
      currentIndexNav: e.target.dataset.index
    });
  },
  /**
   * 请求获取首页导航数据
   */
  getNavList() {
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      url: "#",
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList
          });
        } else {
          that.setData({
            navList: tempNavList.tempNavList().tempNavList
          })
        }
      },
      fail: function () {
        that.setData({
          navList: tempNavList.tempNavList().tempNavList
        })
      }
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      url: "#",
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          });
        } else {
          that.setData({
            swiperList: tempSwiperList.tempSwiperList
          })
        }
      },
      fail: function () {
        that.setData({
          swiperList: tempSwiperList.tempSwiperList
        })
      }
    })
  },
  /**
   * 获取视频列表数据
   */
  getVideoList() {
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      url: "#",
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videoList: res.data.data.videosList
          });
        } else {
          that.setData({
            videoList: tempVideoList.tempVideoList
          })
        }
      },
      fail: function () {
        that.setData({
          videoList: tempVideoList.tempVideoList
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取首页导航数据
    this.getNavList();
    //2 获取轮播图数据
    this.getSwiperList();
    //3 获取视频列表数据
    this.getVideoList();
    console.log(tempNavList.tempNavList().tempNavList);
    console.log(tempSwiperList.tempSwiperList);
    console.log(tempVideoList.tempVideoList);
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
    console.log('onPullDownRefresh')
    // 3秒模拟数据加载
    setTimeout(function () {
      // 不加这个方法真机下拉会一直处于刷新状态，无法复位
      wx.stopPullDownRefresh()
    }, 3000)
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