<!-- 电影 -->
<template>
  <div>

    <!-- 电影top250，正在热映和即将上映 -->
    <div class="tags">
      <div class="common">Top250</div>
      <div class="common">正在热映</div>
      <div class="common">即将上映</div>
    </div>

    <!-- 电影分类显示 -->
    <div class="movie">
      <div class="movie-box">
        <template v-for="movie in top250">
           <div class="movie-item">
            <div class="left-content">
                <img class="img" :src="movie.images.small"/>
            </div>

            <div class="right-content">
                <p>{{movie.title}}</p>
                <ul>
                  <li>{{movie.genres.join(',')}}</li>
                  <li>{{movie.year}}年</li>
                  <li>导演：{{movie.directors[0].name}}</li>
                  <li>评分：{{movie.rating.average}}</li>
                </ul>

            </div>

            </div>
        </template>

      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
       top250 : '' ,
       hotMovie : '',
       comingMovie : ''
    };
  },

  computed: {},

  mounted() {
    axios.get(Api_Proxy + "https://api.douban.com/v2/movie/top250").then(res=>{
      this.top250 = res.data.subjects;
      console.log(res.data.subjects);
    }).catch(err=>{
      console.log(err);
    })
  },

  methods: {

  }

}

</script>
<style scoped>
ul{
  list-style: none;
  margin: 0 auto;
}

p{
  font-weight: 600;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

ul li{
  font-size: 0.9rem;
  margin: 3px 0 3px 0;
}

.tags{
  position: fixed;
  max-width: 1024px;
  width: 100vw;
  height: 35px;
  top: 55px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.common{
  flex: 1;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  line-height: 50px;
}

.movie{
  position: fixed;
  top: 90px;
  bottom: 55px;
  max-width: 1024px;
  width: 100vw;
}

.movie-box{
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1024px;
  width: 100vw;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.movie-item{
  display: flex;
  justify-content: center;
  width: 95vw;
  height: 150px;
  margin: 30px 0 30px 0;
  border-bottom: 1px solid;
  padding: 6px 0 6px 0;
  margin: 3px auto;
}

.left-content{
  flex: 1;
  margin: 0 1% 0 0;
}

.right-content{
  flex: 9;
}

.img{
  width: 100px;
  height: 150px;
}

</style>
