<template lang="html">
  <div class="localize">
<h1> Localisez </h1>

<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 2" :key="`6${i}`" xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card dark color="secondary">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 6" :key="`2${i}`" xs2>
          <v-card dark color="primary">
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 12" :key="`1${i}`" xs1>
          <v-card dark color="secondary">
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>


  <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
      id="map"
    >
  <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>

<div class="middle">

</div>
      <div class="bottom">

        <button class="button" @click="addMarker">Connect</button>
      </div>







  </div>
</template>

<script>
export default {
  name:'Localize',
  data(){
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      trouve: ''
    };
  },
  mounted(){
  this.geolocate();
  },
  methods: {
  // receives a place object via the autocomplete component
  setPlace(place) {
    this.currentPlace = place;
  },
  addMarker() {
    if (this.currentPlace) {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    }
  },
  geolocate: function() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }
}
}
</script>

<style>
label.label{
  position:absolute;
  left: 20px;
  z-index: 1;
  margin-top: 90px;
}

#map{
  border: 2px solid purple;
}

.center{
  height: 40vh;
  width: auto;
  border: 2px solid lime;
  display: flex;
  justify-content: center;
  align-items: center;

}
section.box{
  width: auto;
  height: 30vh;
  border: 2px solid yellow;
  margin: auto;
  vertical-align: center;
}

section.box img{
  max-width: 100%;
  height: 30vh;
}
.bottom{
  height: 40vh;
  width: auto;
  border: 2px solid orange;
}

.middle{
  background: center;
  height: 35vh;
  width: auto;
  background: url('../assets/pay.png') 0 0 no-repeat;
  background-position: center;
}

.bottom{
  margin-top:5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bottom input{
  margin-left: 45px;
  margin-right: 0
}

.midbottom{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 70px;
}

.bottom{
  background: url('../assets/paiement.png') 0 0 no-repeat;
  background-position: center;
}

button.button{
  background: rgba(90,86,86,1);
  width: 15vw;
  height: 5vh;
  margin: auto;
  font-weight: 800;
  color: white;
}
</style>
