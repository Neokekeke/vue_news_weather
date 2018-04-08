<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  font-size: 20px;
}

*{
  padding: 0;
  margin: 0;
}

body{
    max-width: 800px;
    margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
