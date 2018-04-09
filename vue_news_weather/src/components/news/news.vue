<!-- 新闻展示页 -->
<template>
  <div id="news">

      <!-- 新闻所有频道 -->
      <div class="newsChannel">
        <div class="channelBox">
          <template v-for="channel in channels">
            <div class="channel">{{channel}}</div>
          </template>
        </div>
      </div>

      <!-- 新闻频道对应详情 -->
      <div class="newsBox">
      <template v-for="item in newsList">
        <div class="news-item">
          <!-- 左边是显示新闻缩略图片 -->
            <div class="left-content">
                <img class="newsPic" :src="item.picInfo[0].url"/>
            </div>
          <!-- 右边显示新闻部分简介 -->
            <div class="right-content">
                <span class="newsTitle">{{item.title}}</span>
                <span class="newsSource">{{item.source}}</span>
            </div>
        </div>
      </template>
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  data () {
    return {
      newsList : '',   // 新闻列表信息
      channels : '',   // 新闻所有频道
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
     });

     // axios加代理
     axios.get(Api_Proxy + "http://api.jisuapi.com/news/channel?appkey=" + App_key).then(res => {
       this.channels = res.data.result;
       console.log(res.data.result);
     }).catch(err => {
       console.log(err);
     });

  }

}

</script>
<style scoped>
#news{
  font-size: 0.8rem;
  color: rgb(230, 73, 11);
  max-width: 1024px;
  position: fixed;
  top: 55px;
  bottom: 55px;
  width: 100%;
  overflow: hidden;
}

.newsBox{
  position: fixed;
  top: 90px;
  bottom: 55px;
  max-width: 1024px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.news-item{
  width: 95%;
  height: 111px;
  margin: 6px auto;
  padding: 6px 0 10px 0;
  display: flex;
  border-bottom: 1px solid rgb(172, 171, 171);
}

.newsPic{
  width: 100%;
  height: 100%;
  float: left;
}

.newsTitle{
  font-size: 1rem;
  float: left;
  color: black;
}

.newsSource{
  position: absolute;
  bottom: 0;
  left: 0;
  color: black;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

/* 新闻频道样式 */
.newsChannel{
  position: absolute;
  top: 0;
  max-width: 1024px;
  width: 100vw;
  height: 35px;
  background-color: white;
  overflow-x: scroll;
  overflow-y: hidden;
  border-bottom: 1px solid;
}

.channelBox{
  width: 175vw;
  height: 35px;
}

.channel{
  text-align: center;
  color: black;
  font-size: 0.8rem;
  margin: 0 1%;   /* 这里的边距也必须是百分比值 */
  line-height: 35px;
  width: 9vw;
  float: left;
}

.left-content{
  flex: 4;
  margin: 0 20px 0 0;
}

.right-content{
  flex: 6;
  position: relative;
}


</style>
