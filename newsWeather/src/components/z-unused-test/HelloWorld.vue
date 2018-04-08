<template>
  <h3>HelloWorld
    <my-vue></my-vue>
  </h3>
</template>

<script>
import myVue from '../components/myVue.vue'
export default {
  name: 'HelloWorld',
  components : {
    myVue
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate(){
      console.log("创建前");
      console.log("1", this.msg);
      console.log("2", this.$el);
      console.log("3" , this.$data);
  },
  created(){
      console.log("创建后");
      console.log("1", this.msg);
      console.log("2", this.$el);
      console.log("3" , this.$data);
  },
  beforeMount(){
      console.log("挂载前");
      console.log("1", this.msg);
      console.log("2", this.$el);
      console.log("3" , this.$data);
  },
  mounted(){
      console.log("挂载后");
      console.log("1", this.msg);
      console.log("2", this.$el);
      console.log("3" , this.$data);
  },
  beforeDestroy(){
      console.log("销毁前");
      console.log("1", this.msg);
      console.log("2", this.$el);
      console.log("3" , this.$data);
  },
  destroyed(){
      console.log("销毁后");
      console.log("1", this.msg);
      console.log("2", this.$el);
      console.log("3" , this.$data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
