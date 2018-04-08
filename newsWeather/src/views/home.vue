<!-- 主页面承载页面 -->
<template>
  <div id="home">

    <navHeader></navHeader>

    <router-view></router-view>

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
</style>
