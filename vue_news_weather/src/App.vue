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
*{
  padding: 0;
  margin: 0;
}

body{
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
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
