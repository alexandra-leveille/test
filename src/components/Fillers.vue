<template lang="html">
<div class="">

  <div>
    <b-card overlay
            img-src="https://picsum.photos/900/250/?image=1"
            img-alt="Card Image"
            text-variant="white"
            title="Listing of all Fillers"
            sub-title="Fillers availble today">
      <h1> Fillers available today </h1>
    </b-card>
  </div>

To register as a filler
  <button @click="showingAddModal = true" type="" name="button"> <span> Add New </span> </button>

<table class="list">
<tr>
  <th> Id </th>
  <th> Users - lastname </th>
  <th> Users - firstname </th>
  <th> Edit </th>
  <th> Delete </th>
</tr>

<tr v-for="filler in fillers">
  <td> {{ filler.id }} </td>
  <td> {{filler.lastname }} </td>
  <td> {{filler.firstname }} </td>
  <td> <button @click="showingEditModal = true; selectFiller(filler)" type="button" name="button"> <i class="fas fa-eraser"></i> </button>  </td>
  <td> <button @click="showingDeleteModal = true; selectFiller(filler)" type="button" name="button"> <i class="fas fa-trash-alt"></i> </button> </button> </td>
</tr>
</table>


<!-- ////////////////////// showingAdd Modal ////////////////////////// -->

<div id="addModal" v-if="showingAddModal">
    <b-card-group deck>
        <b-card img-src="https://picsum.photos/600/300/?image=09"
                img-alt="Card image"
                img-top
                 title="Add a new filler">
            <p class="card-text">
              <div>
                <button @click="showingAddModal = false" type="button" name="button" class="close">
                <i class="far fa-times-circle"></i>
                </button>
              <table class="form">

              <tr>
              <th> Filler  - Firstname </th>
              <th> : </th>
              <td> <input type="text" name=""  v-model="newFiller.firstname"> </td>
              </tr>

              <tr>
              <th> Filler  - Lastname </th>
              <th> : </th>
              <td> <input type="text" name=""  v-model="newFiller.lastname"> </td>
              </tr>


              <tr>
              <th></th>
              <th> </th>
              <td> <button @click="showingAddModal = false; createFiller()"> Save </button> </td>
              </tr>

              </table>
              </div>
            </p>
        </b-card>
    </b-card-group>
</div>

<!-- ////////////////////////////////////showingEditModal \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->

<div id="editModal" v-if="showingEditModal">
    <b-card-group deck>
        <b-card img-src="https://picsum.photos/600/300/?image=06"
                img-alt="Card image"
                img-top
                 title="Edit a filler">
            <p class="card-text">
              <div>
                <button @click="showingEditModal = false" type="button" name="button" class="close">
                <i class="far fa-times-circle"></i>
                </button>
              <table class="form">

              <tr>
              <th> Filler  - Firstname </th>
              <th> : </th>
              <td> <input type="text" name=""  v-model="clickedFiller.firstname"> </td>
              </tr>

              <tr>
              <th> Filler  - Lastname </th>
              <th> : </th>
              <td> <input type="text" name=""  v-model="clickedFiller.lastname"> </td>
              </tr>


              <tr>
              <th></th>
              <th> </th>
              <td> <button @click="showingEditModal = false; updateFiller()"> Update </button> </td>
              </tr>

              </table>
              </div>
            </p>
        </b-card>
    </b-card-group>
</div>

<!-- /////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
<div id="deleteModal" v-if="showingDeleteModal">
    <b-card-group deck>
        <b-card img-src="https://picsum.photos/600/300/?image=20"
                img-alt="Card image"
                img-bottom
                 title="Delete a filler">
            <p class="card-text">
              <div>
                <button @click="showingDeleteModal = false" type="button" name="button" class="close">
                <i class="far fa-times-circle"></i>
                </button>
              <p> Do you wish to delete the following :
                command number {{clickedFiller.id }}, with the lastname {{clickedFiller.lastname }}</p>
              <button @click="showingDeleteModal = false; deleteFiller()"  type="button" name="button"> YES </button>
              <button @click="showingDeleteModal = false" type="button" name="button"> NO </button>

              </div>
            </p>
        </b-card>
    </b-card-group>
</div>

<!-- /////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->

</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Fillers',
  data () {
  return {
    showingAddModal:false,
    showingEditModal:false,
    showingDeleteModal:false,
    fillers:[],
    newFiller: {lastname:'', firstname: ''},
    clickedFiller:{}
    }
  },
  mounted: function () {
    console.log('==== fillers is mounted ====');
    this.getFillers();
  },
  methods: {
    getFillers: function(){
      axios.get('http://localhost:3005/fillers/').then((response) => {
        console.log('get Fillers', response);
        if (response.data.error) {
          console.log('=== getFillers === ');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR THIS FILLERS IS', this.fillers);
          this.fillers = response.data.rows;
        }
      })
    },
  createFiller: function(){
    console.log('create Filler');
    axios.post('http://localhost:3005/fillers/', this.newFiller).then((response) => {
      console.log('filler', response);
      console.log('this.newFiller', this.newFiller);
      this.newFiller = {lastname:'', firstname: ''};
      if (response.data.error) {
        console.log('=== ligne 67 ===');
        app.errorMessage = response.data.message;
      } else {
        console.log('/// ligne 70 ///');
        this.getFillers();
      }
    })
  },
  selectFiller(filler){
    this.clickedFiller = filler;
    console.log('clicke sur');
    console.log('filler.id = ', filler.id);
    console.log('filler.lastname = ', filler.lastname);
    console.log('filler.firstname = ', filler.firstname);
  },
  updateFiller: function(){
    console.log(this.clickedFiller.id);
    console.log(this.clickedFiller.lastname);
    console.log(this.clickedFiller.firstname);
    axios.put('http://localhost:3005/fillers/'+ this.clickedFiller.id, this.clickedFiller).then((response) => {
      console.log('from updateFiller', response);
      this.clickedFiller = {};
      if (response.data.error) {
      console.log('ERROR IN UPDATE');
      app.errorMessage = response.data.message;
    } else {
      console.log('NO ERROR IN UPDATE');
      app.sucessMessage = response.data.message;
    }
    })
  },
   deleteFiller:function(){
     console.log('////////////  deleteFiller ////////// ');
     console.log(this.clickedFiller);
     axios.delete('http://localhost:3005/fillers/'+ this.clickedFiller.id).then((response) => {
       console.log('from delete response', response);
       this.clickedFiller = {};
       if (response.data.error) {
         console.log('ERROR IN DELETE');
         app.errorMessage = response.data.message;
       } else {
         console.log('NO ERROR IN DELETE');
         this.getFillers();
         app.sucessMessage = response.data.message;
       }
     })
   }
  }
}
</script>

<style scoped="">


table.list{
border: 2px solid;
width: 60vw;
height: auto;
margin: auto;
}


table.list th{
  background: silver;
  color: whitesmoke;
  opacity: 0.5;
}

table.list td{
  text-align: center;
}



table.form input, table.form td{
  padding:5px;
  width: 9vw;
}

table.form input{
  width: 9vw;
  border: none;
  border-bottom: 2px solid;
}

div#addModal, div#deleteModal, div#editModal{
  height: 25vh;
  width: 40vw;
  margin: auto;
  position:fixed;
  top:0;
  left:0;
}
button{
  background: none;
  border: 1px solid black;
}
</style>
