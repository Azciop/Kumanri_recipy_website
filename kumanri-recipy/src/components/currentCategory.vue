<template>
    <body>   
    <header>
      <div class="banniere">Cook With Me by <i><b>Bernamont Steven</b></i></div>
      <nav>
        <div class="nav-content">
          <a href="./"><img class="header-logo" src="../assets/logo-website.png" alt="logo du site" /></a>
          <div class="search-wrapper">
            <input class="input-search" type="text" v-model="searchQuery" placeholder="Rechercher une recette">
          </div>
          <div>
            <a href="./">Acceuil</a>
          </div>
        </div>
      </nav>
    </header>
    <main>
        <section>
            <h3>Recettes de  categorie.strCategory  </h3>
            <ul class="meals-list">
            <li v-for="(meal, index) in meals" :key="index">               
              <img class="meal-img" :src="meal.strMealThumb" >    
                    <p>{{ meal.strMeal }}</p>
            </li>
          </ul>
        </section>
    </main>
    <footer>
      <p>Bernamont Steven 2022 © </p>
    </footer>
  </body>
</template>

<script>
import * as Vue from "vue";
import VueAxios from "vue-axios";
const axios = require("axios");

const app = Vue.createApp();
app.use(VueAxios, axios);

export default {
    name: "currentCategory",
    mounted() {
    this.selectedCategory()
    this.currentCategory()
  },
    data() {
    return {
      meals: [],
      categories: [],
    }
  },
  methods: {
    selectedCategory() {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood')
        .then((response) => {
          console.log( response.data);
          this.meals = response.data.meals;  
        }).catch(error => {
          console.log(error);
        })
    },
    currentCategory() {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => {
          console.log( response.data);
          this.categories = response.data.categories;  
        }).catch(error => {
          console.log(error);
        })
    },
  },
}
</script>

<style lang="css" scoped>

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .7);
    margin: 20px 10%;
    border-radius: 2rem;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

ul li img {
  width: 250px;
  height: auto;
  position: relative;
  border-radius: 20px 20px 0 0;
  border: 2px white solid;
}

ul li p {
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: rgba(0, 0, 0, .7);
  font-weight: bold;
  font-size: 20px;
  border-radius: 20px 20px 0 0;
  border-left: 2px white solid;
  border-top: 2px white solid;
  border-right: 2px white solid;
  text-shadow: rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;
}
</style>