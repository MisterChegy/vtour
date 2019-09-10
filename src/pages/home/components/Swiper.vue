<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: "https://img1.qunarzz.com/travel/poi/1411/f6/f65143dbc137c487213a9cdb.jpg_r_720x400x95_29f484c0.jpg"
            },{
                id: '0002',
                imgUrl: "https://img1.qunarzz.com/travel/d8/201308/29/5b854846f92f6144ddb12cfb.jpg_r_1024x683x95_4c29a6ec.jpg"
            },{
                id: '0003',
                imgUrl: "https://img1.qunarzz.com/travel/poi/201403/29/1fe9e6e0f9e0b2f8ddb12cfb.jpg_r_720x400x95_c13793ce.jpg"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background: #eee
        .swiper-img
            width: 100%

</style>