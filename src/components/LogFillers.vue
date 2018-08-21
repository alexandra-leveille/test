<template lang="html">
  <div class="logfillers">
<h5> <span class="light"> {{LogFillers[0].firstname}} </span>  Welcome on your Personal Filler Page</h5>


<button type="button" name="button" @click="showingEditModal = true;"> EDIT </button>
<button type="button" name="button" @click="showingDeleteModal = true;"> DELETE </button>




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

        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header">
              <h6> <span class="light"> Hello {{LogFillers[0].firstname}} </span> </h6>
              <p> Driver with Id Number {{LogFillers[0].id}} </p>
              <p>Your name  is : {{LogFillers[0].firstname}} {{LogFillers[0].lastname}}</p>

              <button  @click="showingAddModal = true" type="" name="button">
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
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <!-- <img :src="avatar.path"> -->
                <i class="fas fa-user-edit" @click="showingEditModal = true; selectItem(item)"></i>
                <i class="fas fa-trash" @click="showingDeleteModal=true; selectItem(item)"></i>
              </v-list-tile-avatar>

              <div class="mix">
                <p class="name"> {{item.name}} </p>
                <p class="type"> {{item.type}} </p>
              </div>

              <v-list-tile-content class="bloc">
                <p>{{item.title}}</p>
                <p> {{item.activity}} </p>
                <p>{{item.price}} € </p>
              <p> <h6> Availability : {{item.dispo}} </h6> </p>
              </v-list-tile-content>

            </v-list-tile>
          </template>
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

<label for="">Name</label>
<input type="text" name="Firstname" value="Firstname" v-model="newItem.name">
<label for="">type</label>
<input type="text" name="" value="type" v-model="newItem.type">
<label for="">date</label>
<input type="text" name="" value="title" v-model="newItem.title">
<label for="">activity</label>
<input type="text" name="" value="activity" v-model="newItem.activity">
<label for="">price</label>
<input type="text" name="" value="prix" v-model="newItem.price">
<label for="">dispo</label>
<input type="text" name="" value="disponibilite" v-model="newItem.dispo">
</table>
<button @click="showingAddModal = false; createItem()" type="button" name="button"> CREER </button>
</div>
</div>
    </p>
  </b-card>
</div>

    <!-- ////////////////////////// editModal /////////////////////// -->

    <div id="editModal" v-if="showingEditModal">
      <b-card title="Card Title"
              img-src="https://picsum.photos/600/300/?image=20"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <button class="fright close" @click="showingEditModal = false"> CLOSE </button>
        <p class="card-text">
          <label for=""> name </label>
          <input type="text" name="" value="" v-model="clickedItem.name">
          <label for=""> type </label>
          <input type="text" name="" value="" v-model="clickedItem.type">
          <label for="">title</label>
          <input type="text" name="" value="" v-model="clickedItem.title">
          <label for="">activity</label>
          <input type="text" name="" value="" v-model="clickedItem.activity">
          <label for="">price</label>
          <input type="text" name="" value="" v-model="clickedItem.price">
          <label for="">dispo</label>
          <input type="text" name="" value="" v-model="clickedItem.dispo">

          <button @click="showingDeleteModal=false;updateItem()" type="button" name="button"> EDIT </button>
        </p>
      </b-card>
    </div>



<!-- ////////////////////////// deleteModal /////////////////////// -->

<div id="deleteModal" v-if="showingDeleteModal">
    <b-card title="Card title"
            sub-title="Card subtitle">
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
  name:'Fillers2',
  data () {
    return {
      LogFillers: [],
      ranges:[],
      items: [],
      newItem:{name:'', type:'', title:'', activity:'', price:'', dispo:''},
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
              {path:"../assets/avatar/flora.png"}]
    }
  },
  mounted: function (){
    this.getItems();
    console.log('mounted au mounted');
    this.getFillerById();

  },
  methods: {
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
        }
      })
    },
    createItem: function() {
      console.log('we create items');
      axios.post('http://localhost:3005/items/', this.newItem).then((response) => {
        this.newItem = {name:'', type:'', title:'', activity:'', price:'', dispo:''}
        if (response.data.error) {
          console.log('error createItem');
          app.errorMesssage = response.data.message;
        } else {
          console.log('NO ERROR CREATE ITEM', response);
          this.getItems();
        }
      })
    },
    getItems: function(){
      axios.get('http://localhost:3005/items').then((response) => {
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
      console.log(this.clickedItem.name);
      axios.put('http://localhost:3005/items/'+this.clickedItem.id, this.clickedItem).then((response) => {
        console.log('from update', response);
        this.clickedItem = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
        }
      })
    },
    deleteItem: function () {
  console.log('we do delete');
  console.log(this.clickedItem);
  axios.delete('http://localhost:3007/items/'+ this.clickedItem.id).then((response) => {
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
.mix{
position: relative;
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
  font-size: 0.9vw;
}
.bloc{
  margin-left:5vw;
}
</style>
