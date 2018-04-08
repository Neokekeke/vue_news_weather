<!--  -->
<template>
  <div>
    <span v-html="haha"></span>
    <span v-text="haha"></span>
    <div v-for="(product,index) in products">
      <ul>
        <li>{{product.name}}{{product.price}}</li>
      </ul>
    </div>
     <div v-for="(value,key) in obj">
      <ul>
        <li>{{value}}{{key}}</li>
      </ul>
    </div>
    <input type="text" v-model="haha">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      haha : `<p>哈哈哈</p>`,
      products : [
        {
          name : "aa",
          price : 100
        },
        {
          name : "bb",
          price : 200
        }
      ]
    }
  },

  computed: {
  },

  methods: {


  },
  mounted(){
    axios.get(Api_Proxy + "https://api.douban.com/v2/book/1220562").then( data => {
      console.log(data.data);
    }).catch( err=>{
      console.log(err);
    });

    axios.get("http://neokekeke/getPerson").then( data => {
      console.log(data.data);
    }).catch( err => {
      console.log(err);
    });
  }
}

</script>
<style scoped>
</style>
