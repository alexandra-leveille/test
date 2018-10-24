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
      <tr v-for="cmd in commands">
        <td> {{cmd.date}} </td>
        <td> {{cmd.id}}</td>
        <td> {{cmd.user_id}}</td>
        <td> {{cmd.disponibilite}}</td>
        <td> {{cmd.activity}}</td>
        <td> {{cmd.filler_id}}</td>
        <td> <button @click="showingEditModal= true; selectCommand(cmd)" type="button" name="button"> EDIT </button></td>
        <td> <button @click="showingDeleteModal= true; selectCommand(cmd)" type="button" name="button"> DELETE </button></td>
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
         <input type="date" name="" value="" v-model="newCommand.date">

        <label for="">user_id</label>
       <input type="number" name="" v-model="newCommand.user_id">

       <label for="">filler_id</label>
       <input type="number" name="" v-model="newCommand.filler_id">

       <label for=""> Disponibilite </label>
           <input type="text" name="" value="" v-model="newCommand.disponibilite">
           <select v-model="newCommand.disponibilite"  name="">
             <option value="true"> true </option>
             <option value="false"> false </option>
           </select>

           <label for=""> activity</label>
           <input type="text" name="" value="activity" v-model="newCommand.activity">
           <select v-model="newCommand.activity" class="" name="activite">
             <option value="Faire le  Plein"> Faire le  Plein </option>
             <option value="Faire le 1/2"> Faire le 1/2 </option>
             <option value="Faire le 1/4"> Faire le 1/4 </option>
           </select>



         <td> <button @click="showingAddModal = false; createCommand()" type="button" name="button"> Save </button> </td>
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
      <input type="date" name="" value="" v-model="clickedCommand.date">
</tr>

<tr>
  <label for="">User_id</label>
  <input type="number" name="" value="" v-model="clickedCommand.user_id">
</tr>

      <tr>
        <label for=""> Disponibilite </label>
        <input type="text" name="" value="" v-model="clickedCommand.disponibilite">
        <select v-model="clickedCommand.disponibilite"  name="">
          <option value="true"> true </option>
          <option value="false"> false </option>
        </select>
      </tr>

        <tr>
          <label for=""> filler_id</label>
          <input type="number" name="" value="" v-model="clickedCommand.filler_id">
        </tr>

        <tr>
          <td> <button @click="showingEditModal= false; updateCommand();" type="button" name="button"> Update </button> </td>
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
      <p> Are you sure you want to delete your command the following command number<span> {{this.clickedCommand.id}}</span> </p>
      <button type="button" name="button" @click="showingDeleteModal = false; deleteCommand()"> Yes </button>
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
      newCommand: { user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix:'', date:'', activity:'', filler_id:0},
      commands:[],
      clickedCommand:{}
    }
  },
  mounted: function(){
    console.log('mounted command');
    this.getCommands();
  },
  methods: {
    getCommands: function(){
      axios.get('http://localhost:3005/command/').then((response) => {
        console.log('get commands', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN COMMANDS', this.commands);
          this.commands = response.data.rows;
          console.log('ligne 142');
        }
      })
    },
    createCommand: function(){
      const sentCommand = {
        ...this.newCommand,
         command_id: +this.newCommand.id,
         user_id:+this.newCommand.user_id,
         prix:+this.newCommand.prix,
         filler_id:+this.newCommand.filler_id
      }
      console.log('ligne 199 - this.newCommand', this.newCommand);
      axios.post('http://localhost:3005/command/', sentCommand).then((response) => {
        console.log('newCommand', response);
        this.newCommand = { user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix: 0, date:'', activity:'', filler_id:0 };
        if (response.data.error) {
          console.log('========= ligne 167 =========');
          app.errorMessage = response.data.message;
        } else {
          console.log('ligne 99');
          console.log(this.newCommand);
          this.getCommands();
        }
      })
    },
    selectCommand(cmd){
      console.log('on a clicke sur ');
      this.clickedCommand = cmd;
      console.log('cmd', cmd);
    },
    updateCommand: function(){
      console.log('clickedCommand.command_id',this.clickedCommand.id);
      console.log('clickedCommand.user_id',this.clickedCommand.user_id);
      console.log('clickedCommand.filler_id',this.clickedCommand.filler_id);
      axios.put('http://localhost:3005/command/'+ this.clickedCommand.id, this.clickedCommand).then((response) => {
        console.log('from response', response);
        this.clickedCommand = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
          console.log('this.clickedCommand', this.clickedCommand);
        }
      })
    },
    deleteCommand: function(){
      console.log('////////////// deleteCommand //////////');
      console.log(this.clickedCommand);
      axios.delete('http://localhost:3005/command/'+ this.clickedCommand.id).then((response) => {
        console.log('from delete response', response);
        this.clickedCommand = {};
        if (response.data.error) {
          console.log('ERROR IN DELETE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN DELETE');
          this.getCommands();
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
