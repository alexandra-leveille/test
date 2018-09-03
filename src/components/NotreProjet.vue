
<template>
  <div class="proj">

    <h2> Disover the core purpose of our app </h2>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Register as a User of Filler
      <small> Just follow our simple instructions </small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="indigo lighten-2" class="mb-5" height="400px" width="850px">
          <img class="resp" v-img:name src="../assets/register.jpg">
      </v-card>
      <v-btn color="blue lighten-1" @click="e6 = 2">Continue</v-btn>
      <v-btn color="orange darken-4">Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2"> Enter your personal informations to resgister </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="400px" width="850px">
        <img class="resp" v-img:name src="../assets/infos.jpg">
      </v-card>
      <v-btn color="blue lighten-1" @click="e6 = 3">Continue</v-btn>
      <v-btn color="orange darken-4">Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Select an appropriate time slot </v-stepper-step>

    <v-stepper-content step="3">
      <v-card class="mb-5" height="400px" width="850px">
<img  class="resp" v-img:name src="../assets/time.jpg">

      </v-card>
      <v-btn color="blue lighten-1" @click="e6 = 4">Continue</v-btn>
      <v-btn color="orange darken-4">Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4"> Receive your order on time (validated by a text message) </v-stepper-step>
    <v-stepper-content step="4"
      <v-card color="grey lighten-1" class="mb-5" height="400px" width="850px">
          <img class="resp" v-img:name src="../assets/sms.jpg">
      </v-card>
      <v-btn color="blue lighten-1" @click="e6 = 1">Continue</v-btn>
      <v-btn color="orange darken-4">Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
    </div>
</template>

<script>
  export default {
    name:'proj',
    data () {
      return {
        e6: 1
      }
    }
  }
</script>

<style>
.resp{
  max-width:100%;
  height: auto;
}
</style>
