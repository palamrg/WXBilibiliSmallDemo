//导入静态数据
const tempVideoInfo01 = require("../../tempDB/tempVideoInfo01.js");
const tempOthersList = require("../../tempDB/tempOthersList.js");
const tempCommentsList = require("../../tempDB/tempCommentsList.js");

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频详情
    videoInfo: null,
    othersList:[],
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentsList();
  },

  /**
   * 根据视频的id获取视频详情
   */
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoId,
      url: "#",
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          });
        } else {
          that.setData({
            videoInfo: tempVideoInfo01.tempVideoInfo01
          });
        }
      },
      fail: function () {
        that.setData({
          videoInfo: tempVideoInfo01.tempVideoInfo01
        });
      }
    })
  },
  /**
   * 获取推荐视频
   */
  getOthersList(videoId) {
    let that = this;
    wx.request({
      // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
      url: "#",
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            othersList: res.data.data.othersList
          });
        } else {
          that.setData({
            othersList: tempOthersList.tempOthersList
          });
        }
      },
      fail: function () {
        that.setData({
          othersList: tempOthersList.tempOthersList
        });
      }
    })
  },
  /**
   * 获取视频评论
   */
  getCommentsList(videoId) {
    let that = this;
    wx.request({
      // url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoId,
      url: "#",
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            commentData: res.data.data.commentData
          });
        } else {
          that.setData({
            commentData: tempCommentsList.tempCommentsList
          });
        }
      },
      fail: function () {
        that.setData({
          commentData: tempCommentsList.tempCommentsList
        });
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