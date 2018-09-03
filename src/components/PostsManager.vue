<template lang="html">
  <div class="post-manager">

    <div class="container-fluid mt-4">
        <h1 class="h1">Posts Manager</h1>
        <p>Only authenticated users should see this page</p>
        <img src="../assets/sorry2.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name:'post-manager'
}
</script>

<style lang="css">

img{
  max-width: 100%;
  height: 30vh;
}

</style>
