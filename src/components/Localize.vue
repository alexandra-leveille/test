<template lang="html">
  <div class="localize">
<h1> Locate </h1>


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
 <p> Describe your situation </p>

 <div class="midbottom">
<h4> <label for=""> I am : </label> <input type="text" name="" value="" v-model="trouve">

</h4>

  <h4>  <label for=""> street :  </label>
  <gmap-autocomplete
    @place_changed="setPlace">
  </gmap-autocomplete>
</h4>

      <h4> <p> my localization is : {{trouve}}</p> </h4>
  </div>
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
  background: url('../assets/localize.png') 0 0 no-repeat;
  background-position: center;
  height: 45vh;
  width: auto;
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

button.button{
  background: rgba(90,86,86,1);
  width: 15vw;
  height: 5vh;
  margin: auto;
  font-weight: 800;
  color: white;
  font-size:4vw;
}

@media (max-width: 427px) {
  .midbottom h4{
    display: flex;
    font-size:4vw;
  }
}

</style>
