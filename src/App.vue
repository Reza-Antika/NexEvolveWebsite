<template>
  <div id="app">
    <NavbarMenu/>
    <router-view/>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue';

export default {
  name: 'App',
  components: {
   NavbarMenu
  }
}
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
