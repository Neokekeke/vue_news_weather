<!-- 电影详情页 -->
<template>
  <div>


    {{movieData.summary}}



  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  data () {
    return {
      movieID : this.$route.params.id,
      movieData : ''
    };
  },

  components: {},

  computed: {},

  mounted() {
    console.log("id" ,this.$route.params.id);

    axios.get(Api_Proxy + "https://api.douban.com//v2/movie/subject/" + this.movieID).then(res => {
      this.movieData = res.data;
      console.log(res.data);
    }).catch(err =>{
      console.log(err);
    });

  },

  methods: {}
}

</script>
<style scoped>
</style>
