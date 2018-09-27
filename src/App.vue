<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Typing msg="Welcome to Typing Exercise"/>
  </div>
</template>

<script>
import Typing from './components/Typing.vue'

export default {
  name: 'app',
  components: {
    Typing
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
