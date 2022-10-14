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
            <a href="./list">Liste de courses</a>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <modal :open="isOpen" @close="isOpen = !isOpen">
        <h3>recipy title</h3>
        <p>recipy description</p>
        <img src="../assets/recipy-img-test.jpeg" alt="" class="img-modal">
      </modal>
      <h1>! Welcome !</h1>
      <section id="food-category" class="recipy-section">
        <div class="food-categorie">
          <h3 class="categorie-title">Type de nourriture</h3>
          <ul class="categorie-list">
			  <li v-for="(categorie, index) in categories" :key="index">   
				<a href="./currentCategory" @click.prevent="getCategory(categorie.strCategory)"> 
				       
              <img class="categorie-img" :src="categorie.strCategoryThumb" >    
              <p>{{ categorie.strCategory }}</p>
			</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <footer>
      <p>Bernamont Steven 2022 © </p>
    </footer>
  </body>
</template>

<script>

// Axios

import * as Vue from "vue";
import VueAxios from "vue-axios";
const axios = require("axios");

const app = Vue.createApp();
app.use(VueAxios, axios);

// Modal 
import { ref } from "vue";
import Modal from "./modalRecipy.vue";

export default {
  components: { Modal },
  setup() {
    const isOpen = ref(false)
    return { isOpen }
  },
  name: "mainPage",
  mounted() {
    this.getAllCategories()
  },
  data() {
    return {
      categories: []
    }
  },
  methods: {
    getAllCategories() {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => {
          console.log( response.data);
          this.categories = response.data.categories;  
        }).catch(error => {
          console.log(error);
		  alert("api can't be reached");
        })
    },
	getCategory(cat) {	
		localStorage.setItem('currentCategory',  JSON.stringify(cat));
		this.$router.push('/currentCategory')
	}
  },
}
</script>
<style lang="css">
.banniere {
	position: absolute;
	width: 100%;
	height: 20px;
	background-color: rgb(11, 167, 11);
	color: #fff;
	text-align: center;
	font-size: 15px;
}
body {
	background: url("../assets/tablecloth-background.jpg");

}

a {
	text-decoration: none;
	color: white;
}


nav {
	padding-top: 20px;
}
.nav-content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: rgb(0, 128, 0);
	align-items: center;
	padding: 0 20px;
}
.header-logo {
	width: 50px;
}
.navbar {
	overflow: hidden;
	font-family: Arial;
}
.navbar a {
	float: left;
	font-size: 16px;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}
.nav-content a {
	font-size: 20px;
	color: white ;

}
.search-wrapper {
	max-width: 450px;
	width: 50%;
	min-width: 200px;
}
.input-search {
	text-align: center;
	width: 100%;
	border-radius: 20px;
	border: none;
	font-weight: bold;
	padding: 3px 5px;
	-webkit-box-shadow: 1px 1px 50px 9px rgba(0, 0, 0, 0.45);
	box-shadow: 1px 1px 50px 9px rgba(0, 0, 0, 0.45);
}
.input-search:focus {
	outline: none;
	text-align: left;
}
.input-search:focus::placeholder {
	color: transparent;
}
main {
	text-align: center;
}
main h1 {
	text-transform: uppercase;
	font-size: 50px;
	margin: 20px 0 0 0;
	text-shadow: 0 1px 0 #ffffff, 0 2px 0 #ffffff, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15), -2px -2px 0px rgba(0, 0, 0, 0);
}
#food-category {
	background-color: rgba(0, 0, 0, .7);
	margin: 20px 10%;
	border-radius: 2rem;
}
#food-category h2,h3 {
	color: white;
	opacity: 1 !important;
	text-transform: capitalize;
	text-align: center;
	padding: 20px 0 20px 0;
}
.categorie-list {
	list-style: none;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	font-size: 2rem;
}
.categorie-list li {
	margin: 0 10px;
	width: 250px;
	position: relative;
}
.categorie-img {
	width: 100%;
	max-height: 150px;
	position: relative;
}
.categorie-list p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px, rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px, rgb(0, 0, 0) -0.832294px 1.81859px 0px, rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97998px 0.28224px 0px, rgb(0, 0, 0) -1.87291px -0.701566px 0px, rgb(0, 0, 0) -1.30729px -1.5136px 0px, rgb(0, 0, 0) -0.421592px -1.95506px 0px, rgb(0, 0, 0) 0.567324px -1.91785px 0px, rgb(0, 0, 0) 1.41734px -1.41108px 0px, rgb(0, 0, 0) 1.92034px -0.558831px 0px;
}
#bulk-recipy {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, .7);
	margin: 20px 10%;
	text-align: center;
	padding: 0 0 5px 0;
	border-radius: 10px;
}
.btn-recipy {
	margin: 0 0 10px 0;
	border: none;
	padding: 5px 28px;
	border-radius: 18px;
	border-bottom: black 3px solid;
}
.btn-recipy:hover {
	border: 0;
}
.img-modal {
	width: 100%;
	height: auto;
}
footer {
	text-align: center;
	width: 100%;
	height: 54px;
	margin: 0;
	background-color: rgb(0, 128, 0);
	position: relative;
}
footer p {
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	font-size: 20px;
	width: 100%;
}
@media all and (min-width: 1024px) {
	.nav-content {
		height: 100px;
	}
	.input-search {
		height: 40px;
		font-size: 30px;
	}
}
@media all and (max-width: 767px) {
	.categorie-img {
		display: none;
	}
	.categorie-list p {
		position: relative;
		margin-bottom: 30px;
	}
}
@media all and (max-width: 675px) {
	.categorie-list p {
		margin-bottom: 15px;
	}
	.categorie-list li {
		width: 170px;
	}
	.nav-content {
		padding: 0 ;
	}
	.nav-content p {
		text-align: center;
	}
}
@media all and (max-width: 470px) {
	#food-category {
		margin: 0;
		border-radius: 2rem 2rem 0 0;
	}
}

</style>
