<template lang="html">
<div class="reservez">
  <h1> Who are we ? </h1>

  <v-app light>
   <v-toolbar class="white">
     <v-toolbar-title v-text="title"></v-toolbar-title>
   </v-toolbar>
   <v-content>
     <section>
       <template>
  <v-parallax
    dark
    src="https://picsum.photos/650/350"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">  Fullfill </h1>
      <h4 class="subheading"> It start today </h4>
    </v-layout>
  </v-parallax>
</template>
     </section>

     <section>
       <v-layout
         column
         wrap
         class="my-5"
         align-center
       >
         <v-flex xs12 sm4 class="my-3">
           <div class="text-xs-center">
             <h2 class="headline">The best way to start fulfilling </h2>
             <span class="subheading">
               gas pumping has never been easier
             </span>
           </div>
         </v-flex>
         <v-flex xs12>
           <v-container grid-list-xl>
             <v-layout row wrap align-center>
               <v-flex xs12 md4>
                 <v-card class="elevation-0 transparent">
                   <v-card-text class="text-xs-center">
                     <i class="fab fa-simplybuilt fa-5x"></i>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline text-xs-center">{{simple}}</div>
                   </v-card-title>
                   <v-card-text>
                     {{simple1}}
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 md4>
                 <v-card class="elevation-0 transparent">
                   <v-card-text class="text-xs-center">
                     <i class="fas fa-lock fa-5x"></i>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline">{{securise}}</div>
                   </v-card-title>
                   <v-card-text>
                     {{securise1}}
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 md4>
                 <v-card class="elevation-0 transparent">
                   <v-card-text class="text-xs-center">
                     <i class="fas fa-hand-holding-usd fa-5x"></i>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline text-xs-center">{{prix}}</div>
                   </v-card-title>
                   <v-card-text>
                     {{prix1}}
                   </v-card-text>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-flex>
       </v-layout>
     </section>

     <section>
       <v-parallax src="https://picsum.photos/600/300/?image=09" height="380">
         <v-layout column align-center justify-center>
           <div class="headline white--text mb-3 text-xs-center"> Renew your Gas station experience </div>
           <em>Kick-start your application today</em>
           <v-btn
             class="blue lighten-2 mt-5"
             dark
             large
             href="/pre-made-themes"
           >
             Get Started
           </v-btn>
         </v-layout>
       </v-parallax>
     </section>

     <section>
       <v-container grid-list-xl>
         <v-layout row wrap justify-center class="my-5">
           <v-flex xs12 sm4>
             <v-card class="elevation-0 transparent">
               <v-card-title primary-title class="layout justify-center">
                 <div class="headline">Company info</div>
               </v-card-title>
               <v-card-text>
                 Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                 Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
               </v-card-text>
             </v-card>
           </v-flex>
           <v-flex xs12 sm4 offset-sm1>
             <v-card class="elevation-0 transparent">
               <v-card-title primary-title class="layout justify-center">
                 <div class="headline">{{contact}}</div>
               </v-card-title>
               <v-card-text>
                 {{contactus}}
               </v-card-text>
               <v-list class="transparent">
                 <v-list-tile>
                   <v-list-tile-action>
                     <i class="fas fa-phone-volume fa-2x"></i>
                   </v-list-tile-action>
                   <v-list-tile-content>
                     <v-list-tile-title>777-867-5309</v-list-tile-title>
                   </v-list-tile-content>
                 </v-list-tile>
                 <v-list-tile>
                   <v-list-tile-action>
                     <i class="fas fa-location-arrow fa-2x"></i>
                   </v-list-tile-action>
                   <v-list-tile-content>
                     <v-list-tile-title>Chicago, US</v-list-tile-title>
                   </v-list-tile-content>
                 </v-list-tile>
                 <v-list-tile>
                   <v-list-tile-action>
                     <i class="fab fa-mailchimp fa-2x"></i>
                   </v-list-tile-action>
                   <v-list-tile-content>
                     <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                   </v-list-tile-content>
                 </v-list-tile>
               </v-list>
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>
     </section>

     <v-footer class="blue darken-2">
       <v-layout row wrap align-center>
         <v-flex xs12>
           <div class="white--text ml-3">
             Made with
            <i class="fas fa-gas-pump fa-2x"></i>
             by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
             and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
           </div>
         </v-flex>
       </v-layout>
     </v-footer>
   </v-content>
 </v-app>
  </div>
</template>

<script>
export default {
  name: 'Who are we',
  data () {
    return {
    title : 'Welcome to your web interface',
    simple: 'Fast and practical',
    simple1: 'Your vehicles are refueled without moving: simply indicate the location, the availability and the type of fuel you want (Diesel, SP95, SP98).',
    securise: 'Safe',
    securise1: 'Our equipment complies with European regulations and our Pompists are officially certified.',
    prix:'Competitive Prices',
    prix1: 'You will not spend more on our market price indexed prices and track your consumption on your dashboard.',
    gain: 'Time saving',
    gain1: 'It s the end of detours and wastes of time to refuel. Our customers are happy and businesses are gaining in productivity',
    contact: 'contact',
    contactus: 'Feel free to contact us now. and leave your input on our service'
      }
  }
}
</script>

<style lang="css">
</style>
