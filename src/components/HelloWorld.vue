<template>
  <div class="hello">
    <img src="../assets/gas.jpeg">
    <h1>{{ msg }}</h1>
    <button type="button" name="button"> <router-link tag="li" to="/Sign"> Enter </router-link> </button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Fulfill Application'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button{
  width: 12vw;
  height: 5vh;
  border: 2px solid;
  background:none;
  transition:0.5s;
}

button:hover{
  width: 12vw;
  height: 5vh;
  border: 2px solid;
  background:gold;
  transition:0.5s;
}
</style>
