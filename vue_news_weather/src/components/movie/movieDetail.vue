<!-- 电影详情页 -->
<template>

   <div class="outter">

    <nav-back :movieDesc="movieData.title"></nav-back>

    <!-- 电影详情介绍 -->
    <div class="container">
      <div class="box">
        <div class="moviePic">
            <img :src="movieData.images.large"/>
        </div>
        <div class="movieDesc">
            {{movieData.summary}}
        </div>
        <p>
            <i>导演：{{movieData.directors[0].name}}</i>
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
    });

  },

  methods: {}
}

</script>
<style scoped>
.outter{
  position: relative;
}

/* 隐藏滚动条的精髓是div高度要定，宽度可以百分比，针对y轴，x轴亦然 */
.container{
  max-width: 1024px;
  width: 100%;
  height: 1000px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  top: 60px;
  z-index: 99;
}

.container p{
  text-align: center;
  margin: 10% 0 5% 0;
  font-weight: 600;
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

.movieDesc{
  margin: 2% auto;
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
