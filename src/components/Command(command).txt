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
        <th scope="col"># id </th>
        <th scope="col">name</th>
        <th scope="col">lieux</th>
        <th scope="col"> Edit </th>
        <th scope="col"> Erase </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cmd in command">
        <td> {{cmd.id}} </td>
        <td> {{cmd.name}} </td>
        <td> {{cmd.lieux}} </td>
        <td> <i class="fas fa-eraser"  @click="showingEditModal = true; selectCmd(cmd)"></i></td>
        <td> <i class="far fa-trash-alt" @click="showingDeleteModal = true; selectCmd(cmd)"></i> </td>
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


       <tr>
         <th> Command name </th>
         <td> <input type="text" name="" value="" v-model="newCommand.name"> </td>
       </tr>

       <tr>
         <th> Command lieux </th>
         <td> <input type="text" name="" value="" v-model="newCommand.lieux"> </td>
       </tr>

       <tr>
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
      <div>
        <p> Adding a New Command </p>
        <button @click="showingEditModal = false" type="button" name="button" class="close"><i class="fas fa-times"></i></button>
      <table class="form">
        <tr>
          <th> Command name </th>
          <td> <input type="text" name="" value="" v-model="clickedCommand.name">  </td>
        </tr>


        <tr>
          <th> Command lieux </th>
          <td> <input type="text" name="" value="" v-model="clickedCommand.lieux"> </td>
        </tr>


        <tr>
          <td> <button @click="showingEditModal= false; updateCommand();" type="button" name="button"> Update </button> </td>
        </tr>
      </table>
      </div>
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
      <p> Are you sure you want to delete you command </p>
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
  name:'Page20',
  data (){
    return {
    showingAddModal:false,
    showingEditModal:false,
    showingDeleteModal:false,
    command:[],
    newCommand: {name:'', lieux:''},
    clickedCommand:{}
    }
  },
  mounted: function(){
    console.log("mounted for now");
    this.getCommands();
    console.log('=====================ligne 81==========================');
  },
  methods: {
  getCommands: function(){
    axios.get('http://localhost:3005/command/').then((response) => {
      console.log('get Command', response);
      if (response.data.error) {
        console.log('error');
      } else {
        console.log('NO ERROR SO APP COMMAND IS', this.command);
        this.command = response.data.rows;
        console.log('ligne 91 sucess', response.data.rows);
      }

    })
  },
createCommand: function(){
  console.log('we are in createCommand');
  axios.post('http://localhost:3005/command/', this.newCommand).then((response) => {
    console.log('1 - showCommand', response);
    this.newCommand = {name:'', lieux:''};
    if (response.data.error) {
      console.log('/// createCommand error /// ');
    } else {
      console.log('/// createCommand NOerror ///');
      this.getCommands();
    }
  })
},
updateCommand: function(){
  console.log('we are here to update command');
  console.log('UPDATE this.clickedCommand', this.clickedCommand);
  console.log('UPDATE this.clickedCommand.id', this.clickedCommand.id);
  console.log('UPDATE this.clickedCommand.name', this.clickedCommand.name);
  console.log('UPDATE this.clickedCommand.lieux', this.clickedCommand.lieux);
  axios.put('http://localhost:3005/command/'+ this.clickedCommand.id, this.clickedCommand).then((response) => {
    console.log('from update response', response);
    this.clickedCommand = {};
    if (response.data.error) {
      console.log('error in update');
      app.errorMessage = response.data.message;
    } else {
      console.log('no error in update');
      app.sucessMessage = response.data.message
    }
  })
},
selectCmd(cmd){
  this.clickedCommand = cmd;
  console.log('cmd.id',cmd.id);
  console.log('cmd.name',cmd.name);
  console.log('cmd.lieux',cmd.lieux);
},
deleteCommand:function(){
  console.log('/////// deleteCommand ///// ');
  axios.delete('http://localhost:3005/command/'+ this.clickedCommand.id).then((response) => {
    console.log('delete response', response);
    this.clickedCommand = {};
    if (response.data.error) {
      console.log('Error in Delete');
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
border: 2px solid;
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
  top: 0
}

.close{
margin-top:-40px;
}



#addModal table.form, #deleteModal table.form, #editModal table.form {
  margin: auto;
}
</style>
