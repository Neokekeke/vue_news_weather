<!-- 电影 -->
<template>
  <div>

    <!-- 电影top250，正在热映和即将上映 -->
    <div class="tags">
      <div class="common" v-for="(data , index) in navData">
        <!-- 这里动态绑定router-link to属性 -->
        <router-link :to="data.path" class="nav" exact>{{data.title}}</router-link>
      </div>
    </div>

    <keep-alive>
       <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  data () {
    return {
      navData : [
        {
          path : '/home/movie/top250',
          title : 'Top250'

        },
        {
          path : '/home/movie/movieHot',
          title : '正在热映'
        },
        {
          path : '/home/movie/movieComing',
          title : '即将上映'
        }
      ],
      currentIndex : 0
    };
  },
  methods: {
    warp(index){
      this.currentIndex = index;
      console.log(index);
    }
  }
}

</script>
<style scoped>
button{
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

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

.nav{
  color: white;
  font-size: 0.9rem;
  text-decoration: none;
}

.router-link-active{
  border-bottom: 1.5px solid white;
}

</style>
