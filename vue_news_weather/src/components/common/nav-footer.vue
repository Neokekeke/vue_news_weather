<!-- app底部导航栏 -->
<template>
  <div class="footer">

    <div class="nav-foot">

        <router-link to="/home/movie" class="common movie">电影</router-link>
        <router-link to="/home/news" class="common news">新闻</router-link>
        <router-link to="/home/weather" class="common weather">天气</router-link>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>

.footer{
    position: fixed;
    bottom: 0;
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    height: 55px;
    background-color: rgb(255,51,51);
}
.nav-foot{
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}

.common{
    font-size: 0.9rem;
    font-weight: 600;
    color: white;
    text-align: center;
    text-decoration: none;
}

.news{
  flex: 1;
  border: none;
  background-color: transparent;
}

.weather{
  flex: 1;
  border: none;
  background-color: transparent;
}

.movie{
  flex: 1;
  border: none;
  background-color: transparent;
}

</style>
