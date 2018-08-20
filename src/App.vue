<template>
  <div id="app">
<nav>
    <div>
      <b-button-group>
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
      </b-button-group>
    </div>
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
      activeUser: null
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


</style>
