<template lang="html">
  <div class="pompez">
    <h1> Pompez </h1>
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
      <template>
        <v-data-table id="table"
          :items="desserts"
          :loading="true"
          class="elevation-1"
        >

          <v-progress-linear slot="progress" color="red" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>

          <td> <v-flex xs1 order-md1 order-xs1>
              <v-card>
                <v-card-text style="color:lightgrey"> Quart </v-card-text>
              </v-card>
            </v-flex>
          </td>

        <td> <v-flex xs1 order-md1 order-xs1>
              <v-card gold tile flat>
                <v-card-text style="color:lightgrey"> Moitie </v-card-text>
              </v-card>
            </v-flex>
          </td>

          <td> <v-flex xs1 order-md1 order-xs1>
              <v-card>
                <v-card-text style="color:lightgrey"> Plein </v-card-text>
              </v-card>
            </v-flex>
          </td>

          </template>
        </v-data-table>
      </template>

<button class="button" type="button" name="button"> Connection </button>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Diesel',
            calories: '' ,
            fat:'' ,
            carbs:'' ,
            protein:'' ,
            iron: ''
          },
          {
            value: false,
            name: 'Essence SP 98',
            calories: '',
            fat: '',
            carbs: '',
            protein: '',
            iron: ''
          },
          {
            value: false,
            name: 'Essence SP 95',
            calories: '',
            fat: '',
            carbs: '',
            protein: '',
            iron: ''
          },
          {
            value: false,
            name: 'Carburant GPL',
            calories: '',
            fat: '',
            carbs: '',
            protein: '',
            iron: ''
          }
        ]
    };
  },

  mounted() {
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
};
</script>

<style media="screen">
  .table{
  font-size: 1.5vw;
  }
  .v-card__text {
    padding: 16px;
    width: 100%;
    height: 1.5vh;
}
#map{
    z-index: -1;
}

.middle{
  height: 50vh;
  width: 100%;
  background: url('../assets/pomp.png') 0 0 no-repeat;
  background-position: center;
  background-size: 70% 100%;
}

button.button{
  background: rgba(90,86,86,1);
  width: 25vw;
  height: 5vh;
  margin: auto;
  font-weight: 800;
  color: white;
}

.table{
  margin-left:8vw;
  overflow-y: hidden;
}


</style>
