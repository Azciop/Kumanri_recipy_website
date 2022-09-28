<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';
  import singleRecipy from './components/singleRecipy.vue';
  import pageNotFound from './components/notFound.vue';
 
export default {
  name: 'App',
  components: {
    mainPage,
    singleRecipy,
    pageNotFound
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
#app {
  font-family: 'PT Sans Narrow', sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
</style>
