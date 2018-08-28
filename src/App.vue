<template>
  <div id="app">
<router-link to="/Return"><i class="fa fa-home"></i></router-link>
  <header class="grid-header">
    <i v-on:click="showMobileMenu = !showMobileMenu" id="bars" class="icon fa fa-bars fa-2x"> </i>
    <nav class="nav-main">
    <div>
      <b-button-group>
        <ul class="list">
        <b-dropdown right text="Home">
            <b-dropdown-item> <router-link tag="li" to="/"> <i class="fas fa-home fa-lg"></i> Home</router-link> </b-dropdown-item>
            <b-nav-item to="/posts-manager">Posts Manager</b-nav-item>
            <b-nav-item href="#" @click.prevent="login" v-if="!activeUser">Login</b-nav-item>
            <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
        </b-dropdown>
        <b-dropdown right text="FulFill">
          <b-dropdown-item> <router-link tag="li" to="/Localize"> Localize </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Payez"> Payez </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Pompez"> Pompez </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> <router-link tag="li" to="/Maps"> Maps </router-link> </b-dropdown-item>

        </b-dropdown>
        <b-dropdown right text="Project">
          <b-dropdown-item> <router-link tag="li" to="/NotreConcept"> Notre Concept </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/NotreProjet"> Notre Projet </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Rejoidre"> Rejoindre </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Reservez"> Reservez </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Who"> Qui Sommes-nous </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> <router-link tag="li" to="/Sign"> Sign Up </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Sign"> Sign In </router-link> </b-dropdown-item>
        </b-dropdown>
        <b-dropdown right text="Admin">
          <b-dropdown-item> <router-link tag="li" to="/Users"> Users </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Fillers"> Fillers </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Command"> Command </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> <router-link tag="li" to="/Display"> Display </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/ReCommand"> ReCommand </router-link> </b-dropdown-item>
        </b-dropdown>
        <b-dropdown right text="Logged">
          <b-dropdown-item> <router-link tag="li" to="/LogFillers"> LogFillers </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/LogUsers"> LogUsers </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> Admin </router-link> </b-dropdown-item>
        </b-dropdown>
        </ul>
      </b-button-group>
    </div>
</nav>
  </header>

  <nav class="nav-mobile" v-bind:class="{ active: showMobileMenu }">
      <ul class="list">
        <b-dropdown right text="Home">
            <b-dropdown-item> <router-link tag="li" to="/"> <i class="fas fa-home fa-lg"></i> Home</router-link> </b-dropdown-item>
            <b-nav-item to="/posts-manager">Posts Manager</b-nav-item>
            <b-nav-item href="#" @click.prevent="login" v-if="!activeUser">Login</b-nav-item>
            <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
        </b-dropdown>
        <b-dropdown right text="FulFill">
          <b-dropdown-item> <router-link tag="li" to="/Localize"> Localize </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Payez"> Payez </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Pompez"> Pompez </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> <router-link tag="li" to="/Maps"> Maps </router-link> </b-dropdown-item>

        </b-dropdown>
        <b-dropdown right text="Project">
          <b-dropdown-item> <router-link tag="li" to="/NotreConcept"> Notre Concept </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/NotreProjet"> Notre Projet </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Rejoidre"> Rejoindre </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Reservez"> Reservez </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Who"> Qui Sommes-nous </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> <router-link tag="li" to="/Sign"> Sign Up </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Sign"> Sign In </router-link> </b-dropdown-item>
        </b-dropdown>
        <b-dropdown right text="Admin">
          <b-dropdown-item> <router-link tag="li" to="/Users"> Users </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Fillers"> Fillers </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/Command"> Command </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> <router-link tag="li" to="/Display"> Display </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/ReCommand"> ReCommand </router-link> </b-dropdown-item>
        </b-dropdown>
        <b-dropdown right text="Logged">
          <b-dropdown-item> <router-link tag="li" to="/LogFillers"> LogFillers </router-link> </b-dropdown-item>
          <b-dropdown-item> <router-link tag="li" to="/LogUsers"> LogUsers </router-link> </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item> Admin </router-link> </b-dropdown-item>
        </b-dropdown>
      </ul>
  </nav>

  <!-- <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">My Vue App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/posts-manager">Posts Manager</b-nav-item>
          <b-nav-item href="#" @click.prevent="login" v-if="!activeUser">Login</b-nav-item>
          <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> -->


    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      activeUser: null,
      showMobileMenu: true
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    },
    handler: function(){
      console.log('handler');
    }
  }
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
  margin-top:-50px;
}

.fa-home{
  font-size: 40px;
  left: 5px;
  top: 0;
  position:absolute;
  transition:1s;
}
.fa-home:hover{
  color: silver;
  transition:1s;
}

#bars.icon {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 15px;
}

#bars.icon:hover {
    color: orange;
}

#bars.is-hidden {
    display: none;
}

.grid-header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.grid-header .icon {
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: inherit;
}

.nav-main {
    flex: 1;
    min-height: 60px;
}

.nav-mobile .list {
    padding: 0;
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 1s linear;
}

.nav-mobile.active .list {
    transform: translateX(100%);
}

.nav-mobile .item {
    height: 40px;
    width: 100%;
}

[class^=nav-] .list {
    list-style: none;
    padding: 0;
    display: flex;
    min-height: inherit;
    align-items: flex-start;
    z-index: 100;
}


[class^=nav-] .item {
    cursor: pointer;
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: inherit;
}


/* ///////////////// desktop format ///////////////// */
@media (min-width: 601px) {
    .grid-header .icon {
        display: none !important;
    }

    .nav-mobile{
      display: none;
    }
}



/* ///////////////// mobile format ///////////////// */
@media (max-width: 601px) {
    .nav-main {
        display: none;
    }

    .fa-home{
      display: none;
    }

    .nav-mobile{
      display: block;
    }


}

</style>
