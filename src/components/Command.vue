<template lang="html">
  <div class="page20">
  <div>
    <b-card overlay
            img-src="https://picsum.photos/900/250/?image=03"
            img-alt="Card Image"
            text-variant="white"
            title="Image Overlay"
            sub-title="Recapitulatif of Users">
    <h1> Table of command </h1>
    </b-card>
  </div>
  <button class="map" type="button" name="button" @click="showingAddModal= true"> <i class="fas fa-map-marked-alt"></i></button>
<h1> Table of command </h1>

  <table class="table">
    <thead>
      <tr>
        <th scope="col"> Date </th>
        <th scope="col"> Command # id </th>
        <th scope="col"> User # id </th>
        <th scope="col"> DISPO </th>
        <th scope="col"> Activity </th>
        <th scope="col"> Filler # id </th>
        <th scope="col"> Edit </th>
        <th scope="col"> Erase </th>
      </tr>
</thead>
<tbody>
      <tr v-for="head in headers">
        <td> {{head.date}} </td>
        <td> {{head.command_id}}</td>
        <td> {{head.user_id}}</td>
        <td> {{head.disponibilite}}</td>
        <td> {{head.activity}}</td>
        <td> {{head.filler_id}}</td>
        <td> <button @click="showingEditModal= true; selectHeader(head)" type="button" name="button"> EDIT </button></td>
        <td> <button @click="showingDeleteModal= true; selectHeader(head)" type="button" name="button"> DELETE </button></td>
      </tr>
    </tbody>
  </table>

  <!-- ////////////////////////showingAddModal////////////////////////// -->

  <div id="addModal" v-if="showingAddModal">
    <b-card border-variant="Add New Command"
             header="Add New Command"
             header-border-variant="Add New Command"
             align="center">
       <p class="card-text"><div>
         <p> Adding a New Command </p>
        <button @click="showingAddModal= false" type="button" name="button" class="close"> <i class="fas fa-times"></i></button>
       <table class="form">

         <label for="">date</label>
         <input type="date" name="" value="" v-model="newHeader.date">

         <label for="">command_id</label>
        <input type="number" name="" v-model="newHeader.command_id">

        <label for="">user_id</label>
       <input type="number" name="" v-model="newHeader.user_id">

       <label for="">filler_id</label>
       <input type="number" name="" v-model="newHeader.filler_id">

       <label for=""> Disponibilite </label>
           <input type="text" name="" value="" v-model="newHeader.disponibilite">
           <select v-model="newHeader.disponibilite"  name="">
             <option value="true"> true </option>
             <option value="false"> false </option>
           </select>

           <label for=""> activity</label>
           <input type="text" name="" value="activity" v-model="newHeader.activity">
           <select v-model="newHeader.activity" class="" name="activite">
             <option value="Faire le  Plein"> Faire le  Plein </option>
             <option value="Faire le 1/2"> Faire le 1/2 </option>
             <option value="Faire le 1/4"> Faire le 1/4 </option>
           </select>



         <td> <button @click="showingAddModal = false; createHeader()" type="button" name="button"> Save </button> </td>
       </tr>
       </table>
       </div></p>
     </b-card>
  </div>


<!-- ////////////////////////editModal////////////////////////// -->

<div id="editModal" v-if="showingEditModal">
  <b-card title="Edit Command"
          img-src="https://picsum.photos/600/300/?image=09"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
   <table>

<tr>
      <label for="">date</label>
      <input type="date" name="" value="" v-model="clickedHeader.date">
</tr>

<tr>
  <label for="">Command_id</label>
  <input type="number" name="" value="" v-model="clickedHeader.command_id">
</tr>

<tr>
  <label for="">User_id</label>
  <input type="number" name="" value="" v-model="clickedHeader.user_id">
</tr>

      <tr>
        <label for=""> Disponibilite </label>
        <input type="text" name="" value="" v-model="clickedHeader.disponibilite">
        <select v-model="clickedHeader.disponibilite"  name="">
          <option value="true"> true </option>
          <option value="false"> false </option>
        </select>
      </tr>

        <tr>
          <label for=""> filler_id</label>
          <input type="number" name="" value="" v-model="clickedHeader.filler_id">
        </tr>

        <tr>
          <td> <button @click="showingEditModal= false; updateHeader();" type="button" name="button"> Update </button> </td>
        </tr>
      </table>

    </p>
  </b-card>
</div>




<!-- ///////////////////////deleteMODAL////////////////////////// -->

<div id="deleteModal" v-if="showingDeleteModal">
  <b-card border-variant="danger"
            header="Danger"
            header-border-variant="danger"
            header-text-variant="danger"
            align="center">
      <p class="card-text"<div>
        <button @click="showingDeleteModal= false" type="button" name="button" class="close"> <i class="fas fa-times"></i></button>
      <p> Are you sure you want to delete your command the following command number<span> {{this.clickedHeader.command_id}}</span> </p>
      <button type="button" name="button" @click="showingDeleteModal = false; deleteHeader()"> Yes </button>
      <button type="button" name="button" @click="showingDeleteModal = false"> No </button>
      </div></p>
    </b-card>
  </div>


<!-- ///////////////////////END////////////////////////// -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'page20',
  data(){
    return{
      showingAddModal:false,
      showingDeleteModal:false,
      showingEditModal:false,
      newHeader: {command_id:0, user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix:'', date:'', activity:'', filler_id:0},
      headers:[],
      clickedHeader:{}
    }
  },
  mounted: function(){
    console.log('mounted command');
    this.getHeaders();
  },
  methods: {
    getHeaders: function(){
      axios.get('http://localhost:3005/headers/').then((response) => {
        console.log('get headers', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN HEADERS', this.headers);
          this.headers = response.data.rows;
          console.log('ligne 142');
        }
      })
    },
    createHeader: function(){
      const sentHeader = {
        ...this.newHeader,
         command_id: +this.newHeader.command_id,
         user_id:+this.newHeader.user_id,
         prix:+this.newHeader.prix,
         filler_id:+this.newHeader.filler_id
      }
      console.log('this.newHeader', this.newHeader);
      axios.post('http://localhost:3005/headers/', sentHeader).then((response) => {
        console.log('newHeader', response);
        this.newHeader = { command_id:0, user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix: 0, date:'', activity:'', filler_id:0 };
        if (response.data.error) {
          console.log('========= ligne 167 =========');
          app.errorMessage = response.data.message;
        } else {
          console.log('ligne 99');
          console.log(this.newHeader);
          this.getHeaders();
        }
      })
    },
    selectHeader(head){
      console.log('on a clicke sur ');
      this.clickedHeader = head;
      console.log('head', head);
    },
    updateHeader: function(){
      console.log('clickedHeader.command_id',this.clickedHeader.command_id);
      console.log('clickedHeader.user_id',this.clickedHeader.user_id);
      console.log('clickedHeader.filler_id',this.clickedHeader.filler_id);
      axios.put('http://localhost:3005/headers/'+ this.clickedHeader.command_id, this.clickedHeader).then((response) => {
        console.log('from response', response);
        this.clickedHeader = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
          console.log('this.clickedHeader', this.clickedHeader);
        }
      })
    },
    deleteHeader: function(){
      console.log('////////////// deleteheader //////////');
      console.log(this.clickedHeader);
      axios.delete('http://localhost:3005/headers/'+ this.clickedHeader.command_id).then((response) => {
        console.log('from delete response', response);
        this.clickedHeader = {};
        if (response.data.error) {
          console.log('ERROR IN DELETE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN DELETE');
          this.getHeaders();
          app.sucessMessage = response.data.message;
        }
      })
    }
  }
}
</script>

<style lang="css">

table.table{
width: 60vw;
height: auto;
margin: auto;
}

table thead{
  background: cornflowerblue;
}
table thead tr th{
  color: whitesmoke
}

.fa-map-marked-alt{
  font-size: 30px;
}
button.map{
  border: none;
  height: 6vh;
  width: 10vw;
  float: right;
}

#addModal, #deleteModal, #editModal{
  margin: auto;
  position: fixed;
  top: 0;
}

.close{
margin-top:-40px;
}



#addModal table.form, #deleteModal table.form, #editModal table.form {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

table.form select{
  background: rgba(255,192,203,0.4);
}

table.form input{
  background: pink
}
</style>
