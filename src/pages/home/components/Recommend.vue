<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vs_tts/68a2d941-1044-47d8-bf44-9e2ab2f2902c.jpg_r_480x320x90_9944e4ed.jpg',
          title: '北京-泰国7天跟团游',
          desc: '牵手普吉，享受甜蜜十一🎈普吉7日 大小PP岛快艇出海  畅快浮潜 网红夜市'
        },{
          id: '0002',
          imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vs_tts/68a2d941-1044-47d8-bf44-9e2ab2f2902c.jpg_r_480x320x90_9944e4ed.jpg',
          title: '北京-泰国7天跟团游',
          desc: '牵手普吉，享受甜蜜十一🎈普吉7日 大小PP岛快艇出海  畅快浮潜 网红夜市'
        },{
          id: '0003',
          imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vs_tts/68a2d941-1044-47d8-bf44-9e2ab2f2902c.jpg_r_480x320x90_9944e4ed.jpg',
          title: '北京-泰国7天跟团游',
          desc: '牵手普吉，享受甜蜜十一🎈普吉7日 大小PP岛快艇出海  畅快浮潜 网红夜市'
        },{
          id: '0004',
          imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vs_tts/68a2d941-1044-47d8-bf44-9e2ab2f2902c.jpg_r_480x320x90_9944e4ed.jpg',
          title: '北京-泰国7天跟团游',
          desc: '牵手普吉，享受甜蜜十一🎈普吉7日 大小PP岛快艇出海  畅快浮潜 网红夜市'
        }]
      }
     
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
