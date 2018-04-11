<!--  -->
<template>

  <!-- 电影分类显示 -->
    <div class="movie">
      <div class="movie-box">
        <template v-for="movie in movieList">
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

</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import ajax from '../common/ajax.js';

export default {
  data () {
    return {

         movieList : '',
         hotUrl : "https://api.douban.com/v2/movie/in_theaters"

    };
  },
  mounted() {

      ajax.jqGet(this.hotUrl).then(res => {
        this.movieList = res.subjects;
      });

  },

  methods: {}
}

</script>
<style scoped>
ul{
  list-style: none;
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
  margin: 0 5% 0 0;
}

.right-content{
  flex: 9;
}


.right-content p{
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}

.img{
  width: 100px;
  height: 150px;
}

</style>
