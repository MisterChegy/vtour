<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
