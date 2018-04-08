<!-- 新闻展示页 -->
<template>
  <div id="news">

      这里是新闻显示页面

      <template v-for="item in newsList">
        <div class="news-item">
            省份：{{item.shidu}}
            省份：{{item.shidu}}
        </div>
      </template>

  </div>
</template>

<script>
import axios from 'axios';

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

      axios.get(Api_Proxy + "http://www.sojson.com/open/api/weather/json.shtml?city=广州").then( res => {
        this.newsList = res.data;
        console.log(res.data);
      }).catch( err => {
        console.log(err);
      });



  }

}

</script>
<style scoped>
#news{
  font-size: 0.8rem;
  color: rgb(230, 73, 11);
  width: 100%;
  position: fixed;
  top: 55px;
  bottom: 55px;
  overflow-y: auto;
}

.news-item{
  border-bottom: 1px solid rgb(239, 240, 241);
  width: 100%;
  height: 50px;
  background-color: rgb(239, 240, 241);
}




</style>
