<template lang="html">
  <div class="logfillers" v-if="this.LogFillers[0]">

<h5> <span class="light"> {{this.LogFillers[0].firstname}} </span>  Welcome on your Personal Filler Page</h5>
<p> Your are identified as  Driver with Id Number {{LogFillers[0].id}} </p>
<p> with firstname : {{LogFillers[0].firstname}} and lastname {{LogFillers[0].lastname}}</p>

<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="deep-orange accent-4" dark>
          <i class="fas fa-bars"></i>
          <v-toolbar-title> Daily Menu </v-toolbar-title>
          <v-spacer></v-spacer>
                <i class="far fa-plus-square" @click="showingAddModal= true"></i>
                <i class="fas fa-search"></i>
          </v-toolbar>

          <div class="map" id="map">
            <label>
              <gmap-autocomplete
                @place_changed="setPlace">
              </gmap-autocomplete>
              <button @click="addMarker">Add</button>
            </label>
            <gmap-map
              :center="center"
              :zoom="12"
              style="width:100%;  height:250px;"
              id="map2"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>

        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header">


              <button @click="showingAddModal = true" type="" name="button">
              <i class="fas fa-address-card fa-1x"></i>
              </button>
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.date"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <!-- <img :src="avatar.path"> -->
                <i class="fas fa-user-edit" @click="showingEditModal = true; selectItem(item)"></i>
                <i class="fas fa-trash" @click="showingDeleteModal=true; selectItem(item)"></i>
              </v-list-tile-avatar>

              <div class="mix">
                <p class="name"> USER : {{item.user_id}} </p>
                <p class="type"> {{item.type}} </p>
              </div>

              <v-list-tile-content class="bloc">
                <p>{{item.date}}</p>
                <p> {{item.activity}} </p>
                <p>{{item.prix}} € </p>
              <p> Availability : {{item.disponibilite}} </p>
              </v-list-tile-content>
              <div class="bas">
                <i class="fas fa-angle-right fa-3x"></i>
              </div>

            </v-list-tile>
          </template>

          <div class="bottom">
            <img src="../assets/min_localize.png" alt="">
            <h6 class="d-flex justify-content-start"> Recherche </h6>
            <img src="../assets/min_pomp.png" alt="">
            <h6 class="d-flex justify-content-start"> Prestataires </h6>
            <img src="../assets/min_pay.png" alt="">
            <h6 class="d-flex justify-content-start"> Payez </h6>
            <img src="../assets/min_pomp.png" alt="">
            <h6 class="d-flex justify-content-start"> Mon Compte </h6>
          </div>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</template>


<!-- //////////////////////////////////////////////////////////////// -->

<div id="addModal" v-if="showingAddModal">
  <b-card title=" Add a New UserCommand"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      <div>
       <button class="fright close" @click="showingAddModal = false"> <i class="fas fa-times-circle"></i> </button>
      <br>
      <div>
<button class="fright close" @click="showingAddModal = false"> CLOSE </button>
<table class="table">

<label for="">User Id </label>
<input type="number" name="Firstname" value="Firstname" v-model="newItem.user_id">


<label for="">type</label>
<input type="text" name="" value="type" v-model="newItem.type">
<select  v-model="newItem.type" class="" name="activite">
    <option   value="DIESEL"> DIESEL </option>
  <option   value="Essence SP 98"> Essence SP 98 </option>
  <option   value="Essence SP 95"> Essence SP 95 </option>
  <option   value="Carburant GPL"> Carburant GPL </option>
</select>
<label for="">date</label>
<input type="date" name="" value="date" v-model="newItem.date">
<label for="">activity</label>
<input type="text" name="" value="activity" v-model="newItem.activity">
<select v-model="newItem.activity" class="" name="activite">
  <option value="Faire le  Plein"> Faire le  Plein </option>
  <option value="Faire le 1/2"> Faire le 1/2 </option>
  <option value="Faire le 1/4"> Faire le 1/4 </option>
</select>

<label for="">prix</label>
<input type="text" name="" value="prix" v-model="newItem.prix">
<input type="range" name="points" min="0" max="300" v-model="newItem.prix">
<hr>
<label for="">disponibilite</label>

<input type="text" name="" value="disponibilite" v-model="newItem.disponibilite">
<select v-model="newItem.disponibilite"  name="">
  <option value="true"> true </option>
  <option value="false"> false </option>
</select>
<hr>
</table>
<button @click="showingAddModal = false; createItem()" type="button" name="button"> CREER </button>
</div>
</div>
    </p>
  </b-card>
</div>

    <!-- ////////////////////////// editModal /////////////////////// -->

    <div id="editModal" v-if="showingEditModal">
      <b-card title="Edit Order"
              img-src="https://picsum.photos/600/300/?image=20"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <button class="fright close" @click="showingEditModal = false">
               CLOSE </button>
               <button class="fright close" @click="showingAddModal = false"> <i class="fas fa-times-circle"></i> </button>
        <p class="card-text">
          <table class="table">

          <label for=""> type </label>
          <input type="text" name="" value="" v-model="clickedItem.type">
          <select v-model="clickedItem.type" name="activite">
    <option value="DIESEL"> DIESEL </option>
    <option value="Essence SP 98"> Essence SP 98 </option>
    <option value="Essence SP 95"> Essence SP 95 </option>
    <option value="Carburant GPL"> Carburant GPL </option>
  </select>
  <hr>

          <label for="">date</label>
          <input type="date" name="" value="" v-model="clickedItem.date">

          <label for="">activity</label>
          <input type="text" name="" value="" v-model="clickedItem.activity">

          <select v-model="clickedItem.activity" class="" name="activite">
    <option value="Faire le  Plein"> Faire le  Plein </option>
    <option value="Faire le 1/2"> Faire le 1/2 </option>
    <option value="Faire le 1/4"> Faire le 1/4 </option>
  </select>

          <label for="">prix</label>
          <input type="text" name="" value="" v-model="clickedItem.prix">
          <input type="range" name="points" min="0" max="300" v-model="clickedItem.prix">

          <label for="">disponibilite</label>
          <input type="text" name="" value="" v-model="clickedItem.disponibilite">
          <select v-model="clickedItem.disponibilite" class="" name="">
          <option value="true"> true </option>
          <option value="false"> false </option>
          </select>
</table>
          <button @click="showingDeleteModal=false;updateItem()" type="button" name="button"> EDIT </button>
        </p>
      </b-card>
    </div>



<!-- ////////////////////////// deleteModal /////////////////////// -->

<div id="deleteModal" v-if="showingDeleteModal">
    <b-card title="Delete Order"
            sub-title="For sure">
        <p class="card-text">
          <p> Are you sure you want to delete {{this.clickedItem.id}} </p>
          <button  @click="showingDeleteModal = false; deleteItem()" type="button" name="button"> YES </button>
<button  @click="showingDeleteModal = false" type="button" name="button"> NO </button>
        </p>
    </b-card>
</div>

<!-- /////////////////////////////////////////////////////////////////////// -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'logfillers',
  data () {
    return {
      LogFillers:[],
      ranges:[],
      items: [],
      //newItem:{name:'', type:'', title:'', activity:'', price:'', dispo:''},
      newItem: { user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix:'', date:'', activity:'', filler_id:0},
      clickedItem:{},
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false,
      avatar:[{path:"../assets/avatar/deby.png"},
              {path:"../assets/avatar/albertino.png"},
              {path:"../assets/avatar/alexyt.png"},
              {path:"../assets/avatar/benoit.png"},
              {path:"../assets/avatar/angela.png"},
              {path:"../assets/avatar/daniel.png"},
              {path:"../assets/avatar/celine.png"},
              {path:"../assets/avatar/marc.png"},
              {path:"../assets/avatar/flora.png"}],
              center: { lat: 45.508, lng: -73.587 },
              markers: [],
              places: [],
              currentPlace: null
    }
  },
  mounted: function (){
    this.getFillerById();
    this.getItems();
    console.log('mounted au mounted');
    this.geolocate();
  },
  methods: {
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
    },
    getFillerById:function(id){
      axios.get('http://localhost:3005/fillers/'+ sessionStorage.filler).then((response) => {
        if (response.data.error) {
          console.log('error fillerbyId');
        } else {
          console.log('SUCESS SO', response.data.rows);
           console.log(response.data.rows);
          this.LogFillers = response.data.rows;
          //console.log('filler id is', this.LogFillers[0].id);
          //console.log('filler lastname is', this.LogFillers[0].lastname);
          //console.log('filler firstname id', this.LogFillers[0].firstname);
          console.log('this.newItem.id', this.newItem.id);
          this.newItem.filler_id = this.LogFillers[0].id;
          console.log('this.LogFillers[0].filler_id',this.LogFillers[0].id);
          console.log('this.newItem.filler_id ',this.newItem.filler_id );
          console.log('ligne 312');
        }
      })
    },
    createItem: function() {
console.log('we create items');
console.log('ligne 320 this.newItem = ', this.newItem);
      axios.post('http://localhost:3005/command/', this.newItem).then((response) => {
        //this.newItem = {name:'', type:'', title:'', activity:'', price:'', disponibilite:''}
        this.newItem = { user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix:'', date:'', activity:'', filler_id:0};
        if (response.data.error) {
          console.log('error createItem');
          app.errorMesssage = response.data.message;
        } else {
          console.log('ligne 328 this.newItem = ', this.newItem);
          console.log('NO ERROR CREATE ITEM', response);
          this.getItems();
        }
      })
    },
    getItems: function(){
      axios.get('http://localhost:3005/command/').then((response) => {
        console.log('getItems', response);
        if (response.data.error) {
          console.log('ERROR getItems');
        } else {
          console.log('NO ERROR',this.items);
          this.items = response.data.rows;
        }
      })
    },
    selectItem(item){
      this.clickedItem = item;
      console.log('on a clicke sur', item);
    },
    updateItem :function(){
      console.log(this.clickedItem);
      console.log(this.clickedItem.user_id);
      axios.put('http://localhost:3005/command/'+this.clickedItem.id, this.clickedItem).then((response) => {
        console.log('from update', response);
        this.clickedItem = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
          console.log('this.clickedItem', this.clickedItem.disponibilite);
        }
      })
    },
    deleteItem: function () {
  console.log('we do delete');
  console.log(this.clickedItem);
  axios.delete('http://localhost:3005/command/'+ this.clickedItem.id).then((response) => {
    console.log('delete from response', response);
    this.clickedItem = {};
    if (response.data.error) {
      console.log('ERROR IN DELETE');
      app.errorMessage = response.data.message;
    } else {
      console.log('NO ERROR IN DELETE');
      this.getItems();
      app.sucessMessage = response.data.message;
    }
  })
  }
  }
}
</script>

<style lang="css">
div.map#map{
  height: 46vh;
  width: auto;
  border: 2px solid red;
}

.mix{
  margin-right:2vw;
}

.mix p{
  text-align: left;
  margin-bottom: 0;
}

.mix p.name{
  font-weight: 800;
  font-size: 1.0vw;
}
.mix p.type{
  font-size: 1.0vw;
}

.bloc p{
  margin-bottom:0;
}

#addModal, #editModal, #deleteModal{
  width: 25vw;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
}

#addModal table.table, #editModal table.table {
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
}

#addModal table.table input, #editModal table.table input{
  width: 5vw;
  border-bottom: 1px solid;
}

#addModal table.table select, #editModal table.table select{
  background: rgba(191,119,179,0.27);
}

.bottom{
  height: 10vh;
  width: auto;
  background: black;
  color: silver;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.bloc{
  display: grid;
}
</style>
