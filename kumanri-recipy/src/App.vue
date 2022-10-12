<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import mainPage from './components/mainPage.vue';
  import pageNotFound from './components/notFound.vue';
  import shoppingList from './components/shoppingList.vue';
  import currentCategory from './components/currentCategory.vue';

 
export default {
  name: 'App',
  components: {
    mainPage,
    pageNotFound,
    shoppingList,
    currentCategory
  
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
