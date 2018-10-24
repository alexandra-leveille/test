<template lang="html">
  <div class="logusers2" v-if="this.LogUsers[0]">
  <h2> Welcome on the LogUsers page </h2>

  <h3> Welcome {{this.LogUsers[0].firstname}} </h3>
<button type="button" name="button" @click="showingAddModal = true"> Add commands </button>
  <table class="table">
   <thead>
   <th scope="col"> User_id </th>
   <th scope="col"> Filler_id </th>
   <th scope="col"> carburant </th>
   <th scope="col"> type </th>
   <th scope="col"> DISPO </th>
   <th scope="col"> qualite </th>
   <th scope="col"> prix </th>
   <th scope="col"> date </th>
   <th scope="col"> activity </th>
   <th scope="col"> Edit </th>
   <th scope="col"> Erase </th>
   </thead>

   <tbody>
   <tr v-for="cmd in commands">
     <td> {{cmd.user_id}} </td>
     <td> {{cmd.filler_id}} </td>
     <td> {{cmd.carburant}} </td>
     <td> {{cmd.type}} </td>
     <td> {{cmd.disponibilite}} </td>
     <td> {{cmd.qualite}} </td>
     <td> {{cmd.prix}} </td>
     <td> {{cmd.date}} </td>
     <td> {{cmd.activity}} </td>
     <td> <button @click="showingEditModal = true; selectCommand(cmd)" type="button" name="button"> EDITING </button> </td>
     <td> <button @click="showingDeleteModal = true; selectCommand(cmd)" type="button" name="button"> DELETING </button> </td>
   </tr>
 </tbody>
 </table>

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
 <input type="number" name="Firstname" value="Firstname" v-model="newCommand.user_id">

 <label for="">filler Id </label>
 <input type="number" name="Firstname" value="Firstname" v-model="newCommand.filler_id">

 <label for="">Carburant</label>
 <input type="text" name="" value="type" v-model="newCommand.carburant">
 <select  v-model="newCommand.carburant" class="" name="activite">
     <option   value="DIESEL"> DIESEL </option>
   <option   value="Essence SP 98"> Essence SP 98 </option>
   <option   value="Essence SP 95"> Essence SP 95 </option>
   <option   value="Carburant GPL"> Carburant GPL </option>
 </select>

 <label for="">type</label>
 <input type="text" name="" value="type" v-model="newCommand.type">
 <select  v-model="newCommand.type" class="" name="activite">
     <option   value="DIESEL"> POLLUANT </option>
   <option   value="Essence SP 98"> NON POLLUANT </option>
   <option   value="Essence SP 95"> BIO </option>
   <option   value="Carburant GPL"> OTHER </option>
 </select>
 <label for="">date</label>
 <input type="date" name="" value="date" v-model="newCommand.date">
 <label for="">activity</label>
 <input type="text" name="" value="activity" v-model="newCommand.activity">
 <select v-model="newCommand.activity" class="" name="activite">
   <option value="Faire le  Plein"> Faire le  Plein </option>
   <option value="Faire le 1/2"> Faire le 1/2 </option>
   <option value="Faire le 1/4"> Faire le 1/4 </option>
 </select>

 <label for="">prix</label>
 <input type="text" name="" value="prix" v-model="newCommand.prix">
 <input type="range" name="points" min="0" max="300" v-model="newCommand.prix">
 <hr>
 <label for="">disponibilite</label>

 <input type="text" name="" value="disponibilite" v-model="newCommand.disponibilite">
 <select v-model="newCommand.disponibilite"  name="">
   <option value="true"> true </option>
   <option value="false"> false </option>
 </select>
 <hr>
 </table>
 <button @click="showingAddModal = false; createCommand()" type="button" name="button"> CREER </button>
 </div>
 </div>
     </p>
   </b-card>
 </div>

 <div id="editModal" v-if="showingEditModal">


 </div>


<div id="deleteModal" v-if="showingDeleteModal">
<section>
  <h3> Are you sure that you want to delete command number {{this.clickedCommand.id}} concerning user_id {{this.clickedCommand.user_id}} and filler_id {{this.clickedCommand.filler_id}} </h3>
 <button type="button" name="button" @click="showingDeleteModal = false; deleteCommand()" > YES </button>
<button type="button" name="button"  @click="showingDeleteModal = false"> NO </button>
</section>
</div>




  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'logusers2',
  data(){
    return {
      LogUsers:[],
      showingAddModal: false,
      showingEditModal: false,
      showingDeleteModal: false,
      commands:[],
      newCommand: { user_id:0, carburant: '', type:'', date:'', activity:'', disponibilite:'' , prix:'' , filler_id:0},
      clickedCommand:{}
    }
  },
  mounted: function(){
    console.log('hello');
    this.getUserById();
    this.getCommands();
  },
  methods:{
    getUserById:function(id){
      axios.get('http://localhost:3005/users/'+ sessionStorage.user).then((response) => {
        if (response.data.error) {
          console.log('error in userbyId');
        } else {
          console.log('SUCESS SO', response.data.rows);
          this.LogUsers = response.data.rows;
          console.log('this.LogUsers', this.LogUsers);
        }
      })
    },
    getCommands:function(){
      axios.get('http://localhost:3005/command/').then((response) => {
        console.log('getcommand', response);
        if (response.data.error) {
          console.log('getcommands');
        } else {
          console.log('no error this command', this.commands);
          this.commands = response.data.rows;
          console.log(this.commands);
        }
      })
    },
    createCommand:function(){
      console.log('create commands');
      console.log('ligne 155', this.newCommand);
      axios.post('http://localhost:3005/command/', this.newCommand).then((response) => {
        console.log('create commands', response);
        this.newCommand = {user_id:0, carburant: '', type:'', date:'', activity:'', disponibilite:'' , prix:'' , filler_id:0};
        if (response.data.error) {
          console.log('create commands');
          app.errorMessage = response.data.message;
        } else {
          console.log('ligne 163 - no error in commands', this.newCommand);
          this.getCommands();
        }
      })
    },
    selectCommand(cmd){
      console.log('on a clicke sur');
      this.clickedCommand = cmd;
      console.log('cmd', cmd.id, 'cmd_user.id', cmd.user_id);
    },
    deleteCommand: function(){
      console.log(this.clickedCommand);
      axios.delete('http://localhost:3005/command/' + this.clickedCommand.id).then((response) => {
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
#addModal table.table, #deleteModal table.table, #editModal table.table {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

table.table select{
  background: rgba(255,192,203,0.4);
}

table.table input{
  background: pink
}
</style>
