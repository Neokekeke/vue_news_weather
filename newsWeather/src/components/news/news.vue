<!-- 新闻展示页 -->
<template>
  <div id="news">

      <template v-for="item in newsList">
        <div class="news-item">
          <!-- 左边是显示新闻缩略图片 -->
            <div class="left-content">
                <img class="newsPic" :src="item.picInfo[0].url"/>
            </div>
          <!-- 右边显示新闻部分简介 -->
            <div class="right-content">
                <span class="newsTitle">{{item.title}}</span>
            </div>
        </div>
      </template>

  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  data () {
    return {
      newsList : ''   // 新闻列表信息

    };
  },

  components: {},

  computed: {},

  methods: {

  },

  mounted(){

     // 用到了jquery ajax
     $.ajax({
        url : 'http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',
        type : 'get',
        dataType : "jsonp",
        success : res => {
          this.newsList = res.news;
          console.log(res.news);
        },
        error : err => {
          console.log(err);
        }
     })

  }

}

</script>
<style scoped>
#news{
  font-size: 0.8rem;
  color: rgb(230, 73, 11);
  max-width: 800px;
  width: 100%;
  position: fixed;
  top: 55px;
  bottom: 55px;
  overflow-y: auto;
}

.news-item{
  width: 95%;
  height: 111px;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  display: flex;
  border-bottom: 1px solid rgb(172, 171, 171);
}

.newsPic{
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
}

.newsTitle{
  font-size: 1rem;
  float: left;
  color: black;
  overflow: hidden;
}

.left-content{
  flex: 4;
  margin: 0 20px 0 0;
}

.right-content{
  flex: 6;
}


</style>
