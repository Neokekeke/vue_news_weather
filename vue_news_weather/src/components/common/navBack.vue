<!-- 顶部通用返回键 -->
<template>
  <div class="navBack">
         <div class="back" @click="back">
           <img src="../../assets/back.png" style="width:30px; height:30px;">
         </div>
         <div class="title">{{movieDesc}}</div>
  </div>
</template>

<script>
export default {
  props:
  {
      movieDesc : {
          type : String,
          require : true
      }
  },
  data () {
    return {
    };
  },

  computed: {},

  mounted() {},

  methods: {
    back(){
      // 不知道页面名，按历史记录跳转到上一页
      this.$router.go(-1);
    }
  }
}

</script>
<style scoped>
.navBack{
  position: fixed;
  top: 0;
  height: 50px;
  max-width: 1024px;
  width: 100%;
  background-color: lightcoral;
  z-index: 100;   /* 这里是关键避免absolute，覆盖fixed */
}

.navBack .back{
  height: 50px;
  width: 10%;
  float: left;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navBack .back img{
  opacity: 0.8;
  cursor: pointer;
}

.navBack .back img:hover{
  opacity: 1;
}

.navBack .title{
  width: 80%;
  margin: 0 auto;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 1.5rem;
  color: white;
}


</style>
