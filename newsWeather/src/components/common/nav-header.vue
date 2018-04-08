<!-- app顶部显示栏 -->
<template>
  <div class="header">

      <div class="title">
          <!-- 最简单切换页面标题的方法是使用$route.name -->
          {{ $route.name }}
      </div>

  </div>
</template>

<script>
import store from '../../store/store.js';

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
.header{
    position: fixed;
    top: 0;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    background-color: black;
    line-height: 55px;
}

.title{
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    text-align: center;
    height: 100%;
    width: 100%;
}


</style>
