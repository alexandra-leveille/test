<template lang="html">
  <div class="localize">
<h1> Pay </h1>

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
  z-index: -1;
}

.center{
  height: 40vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

}
section.box{
  width: auto;
  height: 30vh;
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
}

.middle{
  background: center;
  height: 35vh;
  width: 100%;
  background: url('../assets/pay.png') 0 0 no-repeat;
  background-position: center;
  background-size:auto;
  opacity: 0.5;
  background-size:  50%  100%;
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
  background-size:auto;
  width: 100%;
  height: 30vh;
  background-size:  50%  100%;
}

button.button{
  background: rgba(90,86,86,1);
  width: 15vw;
  height: 10vh;
  margin: auto;
  font-weight: 800;
  color: white;
  margin-top: 25vh;
}


</style>
