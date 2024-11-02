<template>
  <!-- Navbar -->
  <nav class="navbar flex justify-between items-center">
      <router-link to="/" class="flex justify-start items-center p-4">
        <img src="@/assets/Image/Logo.png" alt="Logo" class="Logo rounded-full">
        <h3 :class="nexEvolveColorClass" class="Nexevolve font-bold font-sans ml-4">NexEvolve</h3>
      </router-link>
      
      <div :class="navbarMenuColorClass" class="navbar-menu flex justify-end space-x-10">
      <router-link to="/">Home</router-link>
      <router-link to="/aboutus">About Us</router-link>
      <router-link to="/ourservice">Our Service</router-link>
      <router-link to="/contactus">Contact Us</router-link>
      </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default{
  name:'NavbarMenu',
  setup(){
    const route = useRoute();

    const nexEvolveColorClass = computed(() =>{
      if (route.path === '/aboutus') return 'text-white';
      if (route.path === '/contactus') return '#002B33';
      return 'text-white'
    });

    const navbarMenuColorClass = computed (() => {
      if (route.path === '/aboutus') return 'text-white';
      if (route.path === '/contactus') return '#002B33';
      return '#002B33';
    });

    return {
      nexEvolveColorClass,
      navbarMenuColorClass,
    };
  },
};
</script>

<style scoped>
.navbar {
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
.Logo{
  height: 80px;
  width: 80px;
  margin-left: 127px;
  z-index: 10;
}
.Nexevolve{
  font-size: 20px;
  margin-left: 10px;
  z-index: 10;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.navbar-menu{
  margin-right: 127px;
  font-size: 16px;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* color: #002B33; */
}
</style>