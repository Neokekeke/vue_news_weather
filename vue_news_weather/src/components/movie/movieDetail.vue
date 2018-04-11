<!-- 电影详情页 -->
<template>
  <div>


    {{movieData.summary}}



  </div>
</template>

<script>
import ajax from '../common/ajax.js';

export default {
  data () {
    return {
      movieData : '',
      detailUrl : "https://api.douban.com//v2/movie/subject/" + this.$route.params.id
    };
  },

  components: {},

  computed: {},

  mounted() {
    console.log(this.$route.params.id);
    ajax.jqGet(this.detailUrl).then(res => {
      this.movieData = res;
      console.log(res);
    })

  },

  methods: {}
}

</script>
<style scoped>
</style>
