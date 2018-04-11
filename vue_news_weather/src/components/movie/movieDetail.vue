<!-- 电影详情页 -->
<template>

   <div class="outter">

    <div class="navBack">
         返回
         <span>{{movieData.title}}</span>
    </div>

    <!-- 电影详情介绍 -->
    <div class="container">
      <div class="box">
        <div class="moviePic">
            <img :src="movieData.images.large"/>
        </div>
        <div class="movieDesc">
            {{movieData.summary}}


        </div>  <p>
              {{movieData.directors[0].name}}
            </p>
      </div>
    </div>

  </div>
</template>

<script>
import ajax from '../common/ajax.js';
import navBack from '../common/navBack.vue';

export default {
  data () {
    return {
      movieData : '',
      detailUrl : "https://api.douban.com//v2/movie/subject/" + this.$route.params.id
    };
  },

  components: {
      navBack
  },

  mounted() {

    ajax.jqGet(this.detailUrl).then(res => {
      this.movieData = res;
      console.log(res);
    })

  },

  methods: {}
}

</script>
<style scoped>
.outter{
  position: relative;
}

.navBack{
  position: fixed;
  top: 0;
  height: 50px;
  max-width: 1024px;
  width: 100%;
  background-color: lightcoral;
  z-index: 100;   /* 这里是关键避免absolute，覆盖fixed */
}

.navBack span{
  text-align: center;
  line-height: 50px;
}

/* 隐藏滚动条的精髓是div高度要定，宽度可以百分比，针对y轴，x轴亦然 */
.container{
  max-width: 1024px;
  width: 100%;
  height: 1000px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  top: 50px;
  z-index: 99;
}

.box{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* 电影海报显示 ，电影描述显示 */
.moviePic, .movieDesc{
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.moviePic img{
  width: 100%;
  height: 100%;
}

 /* for Chrome */
.box::-webkit-scrollbar {
    display: none;
}


</style>
