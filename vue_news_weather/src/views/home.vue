<!-- 主页面承载页面 -->
<template>
  <div id="home">

    <navHeader></navHeader>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <navFooter></navFooter>

  </div>
</template>

<script>
import navHeader from '../components/common/nav-header.vue';
import navFooter from '../components/common/nav-footer.vue';

export default {
  data () {
    return {

    };
  },

  components: {
    navHeader,
    navFooter
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
#home{
  position: relative;
  overflow: hidden;
}

</style>
