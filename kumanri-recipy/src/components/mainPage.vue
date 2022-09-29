<template>
  <body>
    <header>
      <div class="banniere">Cook With Me by <i><b>Bernamont Steven</b></i></div>
      <nav>
        <div class="nav-content">
          <a href="./"><img class="header-logo" src="../assets/logo-website.png" alt="logo du site" /></a>      
           <div class="search-wrapper">
            <input class="input-search" type="text" v-model="searchQuery" placeholder="Rechercher une recette" >
           </div>
          <div class="navbar">
  <div class="dropdown">
    <button class="dropbtn"><font-awesome-icon class="icon-navbar" icon="fa-solid fa-bars" />
    </button>
    <div class="dropdown-content">
      <a href="./">Acceuil</a>
    </div>
  </div>
</div>
        </div>
      </nav>
    </header>
    <main>
      <h1>! Welcome !</h1>
      <section id="bulk-recipy">
        <h2 class="bulk-title">Recettes en vrac</h2>
        <div class="bulk-list">
          <div class="recipy-unity">
            <h3>Recipy title</h3>
            <p>recipy description</p>
            <img class="recipy-img" src="../assets/recipy-img-test.jpeg" alt="">
           <button class="btn btn-recipy" @click="showModal = true">Voir la recette</button>
          </div>
          <div class="recipy-unity">
            <h3>Recipy title</h3>
            <p>recipy description</p>
            <img class="recipy-img" src="../assets/recipy-img-test.jpeg" alt="">
           <button class="btn btn-recipy" @click="showModal = true">Voir la recette</button>
          </div>
          <div class="recipy-unity">
            <h3>Recipy title</h3>
            <p>recipy description</p>
            <img class="recipy-img" src="../assets/recipy-img-test.jpeg" alt="">
           <button class="btn btn-recipy" @click="showModal = true">Voir la recette</button>
          </div>
          <div class="recipy-unity">
            <h3>Recipy title</h3>
            <p>recipy description</p>
            <img class="recipy-img" src="../assets/recipy-img-test.jpeg" alt="">
           <button class="btn btn-recipy" @click="showModal = true">Voir la recette</button>
          </div>
          <div class="recipy-unity">
            <h3>Recipy title</h3>
            <p>recipy description</p>
            <img class="recipy-img" src="../assets/recipy-img-test.jpeg" alt="">
           <button class="btn btn-recipy" @click="showModal = true">Voir la recette</button>
          </div>
          <div class="recipy-unity">
            <h3>Recipy title</h3>
            <p>recipy description</p>
            <img class="recipy-img" src="../assets/recipy-img-test.jpeg" alt="">
           <button class="btn btn-recipy" @click="showModal = true">Voir la recette</button>
          </div>
        </div>
      </section>
      <selectedRecipyModal @close-modal="showModal = false" />
    </main>
    <footer>
      <p>Bernamont Steven 2022 © </p>
    </footer>
  </body>
</template>

<script>
import selectedRecipyModal from './selectedRecipyModal.vue'

export default {
  components: { selectedRecipyModal },
  name: "mainPage",
  data() {
    return {
      showModal: false,
    }
  }
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
  background:url("../assets/tablecloth-background.jpg") ;
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
.icon-navbar {
  font-size: 20px;
}
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 16px 16px;
  background-color: inherit;
  font-family: inherit; 
  margin: 0; 
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
  top: 74px;
  opacity: 0.8;
}
.dropdown-content a {
  float: none;
  color: black;
  font-size: 20px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  opacity: 1;
}
.dropdown-content a:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
.dropdown:hover .dropdown-content {
  display: block;
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
  border:none;
  font-weight: bold;
  padding: 3px 5px;
  -webkit-box-shadow: 1px 1px 50px 9px rgba(0,0,0,0.45); 
box-shadow: 1px 1px 50px 9px rgba(0,0,0,0.45);
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
  text-shadow: 0 1px 0 #ffffff, 0 2px 0 #ffffff, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15), -2px -2px 0px rgba(0,0,0,0);
}
#bulk-recipy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.7);
  margin: 20px 10%;
  text-align: center;
  padding: 0 0 5px 0;
  border-radius: 10px;
}
.bulk-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bulk-title {
  color: white;
  opacity: 1  !important;
  text-transform: capitalize;
  text-align: center;
  margin: 20px 0 0 0;
}
.recipy-unity {
  width: 95%;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 12px 0;
  border-radius: 20px;
  height: auto;

}
.recipy-unity h3 {
  margin: 10px;
  padding:0 0 0 0;
  color: black;
  font-size: 28px;
  border-top: black 2px dashed;
  border-left: black 10px solid;
  border-right: black 10px solid;
  border-radius: 20px 20px 10px 10px;
}
.recipy-unity p {
  margin: 0;
  padding: 5px 0 0 0;
  font-size: 20px;
}
.recipy-unity img {
  width: 95%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  border-radius: 0 0 20px 20px;
  margin: 5px 0 5px 0;
  border: 2px solid rgb(139, 57, 57);
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
  .bulk-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .recipy-unity {
    width: 25%;
    margin: 10px 5px;
  }
  .input-search {
    height: 40px;
    font-size: 30px;
  }
}
</style>
