<template>
  <div id="app">
    <nav>
    <ul class="list">
      <li class="item"> <router-link tag="li" to="/"> <a><i class="fas fa-home"></i> Home </a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/Sign"> <a> Sign </a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/NotreConcept"> <a>Notre Concept</a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/NotreProjet"> <a>Notre Projet</a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/Rejoindre"> <a>Rejoindre</a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/Reservez"> <a>Reservez</a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/Who"> <a> Qui sommes Nous</a> </router-link></li>
      <li class="item"> <router-link tag="li" to="/AddCommand"> <a> AddCommand </a> </router-link></li>
    </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
nav{
  width: auto;
  height: auto;
  float: right;
  background: cyan;
  margin-top:-50px;
}

nav ul.list{
  list-style: none;
}

nav ul li{
  display: inline;
  float: left;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  width: 7vw;
  background: gold;
  margin-right:3px;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 0.7vw;
  transition:0.5s;
}
nav a:hover{
  color:silver;
  border-bottom: 1px solid;
  transition:0.5s;
}

</style>
