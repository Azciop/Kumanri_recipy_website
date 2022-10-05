<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';
  import pageNotFound from './components/notFound.vue';

 
export default {
  name: 'App',
  components: {
    mainPage,
    pageNotFound,
  
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
#app {
  font-family: 'PT Sans Narrow', sans-serif;
}
*,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
