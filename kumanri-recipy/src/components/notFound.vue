<template>
  <div>
    <header>
      <div class="banniere">Cook With Me by <i><b>Bernamont Steven</b></i></div>
      <nav>
        <div class="nav-content">
          <a href="./"><img class="header-logo" src="../assets/logo-website.png" alt="logo du site" /></a>      
        </div>
      </nav>
    </header>
    <main>
      <h1>EROR 404 ! PAGE NOT FOUND</h1>
      <a href="./"><h2>Click <span style="color: blue; font-size: 50px;">> HERE 	&lt;</span> to go back to the main page</h2></a>
    </main>
  </div>
  
</template>

<script>
    export default {
  name: "pageNotFound",
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
main h1 {
  font-size: 60px;
  -webkit-animation: heartbeat 5s ease-in-out infinite both;
	        animation: heartbeat 5s ease-in-out infinite both;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
a {
  text-decoration: none;
  color: black;
}
</style>
    
