<template lang="html">
  <div class="logusers" v-if="this.LogUsers[0]">
      <v-avatar size="70px" tile>
        <img
          src="../assets/avatar/flora.png"
          alt="Vuetify"
        >
      </v-avatar>

<h2> Hello </h2>

<h5> <span class="light"> {{this.LogUsers[0].firstname}} </span>  Welcome on your Personal User Page</h5>
<p> Your are identified as User with Id Number {{LogUsers[0].id}} </p>
<p> with firstname : {{LogUsers[0].firstname}} and lastname {{LogUsers[0].lastname}}</p>

 <v-chip label outline color="purple"> <h2> Do you wish to add a command </h2> <i class="fas fa-calendar-plus fa-2x" @click="showingAddModal = true"></i> </v-chip>

 <table class="table">
  <thead>
  <th scope="col"> User_id </th>
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
    <td> {{cmd.carburant}} </td>
    <td> {{cmd.type}} </td>
    <td> {{cmd.disponibilite}} </td>
    <td> {{cmd.qualite}} </td>
    <td> {{cmd.prix}} </td>
    <td> {{cmd.date}} </td>
    <td> {{cmd.activity}} </td>
    <td> swith </td>
    <td> delete </td>
  </tr>
</tbody>
</table>


<!-- /////////////////////// addModal ///////////////////////// -->

<div id="addModal" v-if="showingAddModal">
  <b-card border-variant="Add New Command"
  img-src="https://picsum.photos/600/300/?image=25"
  img-alt="Image"
  img-top
  tag="article"
  style="max-width: 20rem;"
           header="Add New Command"
           header-border-variant="Add New Command"
           align="center">
     <p class="card-text"><div>
       <p> Adding a New Command </p>
      <button @click="showingAddModal= false" type="button" name="button" class="close"> <i class="fas fa-times"></i></button>
     <table class="form">

       <label for="">User_id</label>
      <input type="number" name="" v-model="newCommand.user_id">

      <label for="">Carburant</label>
      <input type="text" name="" value="type" v-model="newCommand.carburant">
      <select  v-model="newCommand.carburant" class="" name="activite">
          <option   value="DIESEL"> DIESEL </option>
        <option   value="Essence SP 98"> Essence SP 98 </option>
        <option   value="Essence SP 95"> Essence SP 95 </option>
        <option   value="Carburant GPL"> Carburant GPL </option>
      </select>

      <label for="">Type</label>
      <input type="text" name="" value="type" v-model="newCommand.type">
      <select  v-model="newCommand.type" class="" name="activite">
          <option   value="POLLUANT "> POLLUANT </option>
        <option   value="NON POLLUANT"> NON POLLUANT </option>
        <option   value="BIO"> BIO </option>
        <option   value="OTHER"> OTHER </option>
      </select>

      <label for="">Disponibilite </label>
          <input type="text" name="" value="" v-model="newCommand.disponibilite">
          <select v-model="newCommand.disponibilite"  name="">
            <option value="true"> true </option>
            <option value="false"> false </option>
          </select>

      <label for="">Qualite</label>
      <input type="text" name="" value="qualite" v-model="newCommand.qualite">
      <select v-model="newCommand.qualite"  name="">
        <option value="acceptable"> acceptable </option>
        <option value="passable"> passable </option>
        <option value="anti-polluant"> anti-polluant </option>
      </select>

      <label for="">Prix</label>
      <input type="text" name="" value="prix" v-model="newCommand.prix">
      <input type="range" name="points" min="0" max="300" v-model="newCommand.prix">

       <label for="">Date</label>
       <input type="date" name="" value="" v-model="newCommand.date">

         <label for="">Activity</label>
         <input type="text" name="" value="activity" v-model="newCommand.activity">
         <select v-model="newCommand.activity" class="" name="activite">
           <option value="Faire le  Plein"> Faire le  Plein </option>
           <option value="Faire le 1/2"> Faire le 1/2 </option>
           <option value="Faire le 1/4"> Faire le 1/4 </option>
         </select>
       <td> <button @click="showingAddModal = false; createCommand()" type="button" name="button"> Save </button> </td>
     </tr>
     </table>
     </div>
    </p>
   </b-card>
</div>

<!-- /////////////////////// addModal ///////////////////////// -->
</div>
</template>
<script>
import axios from 'axios'
export default{
  name:'logusers',
  data(){
    return {
      showingAddModal:false,
      LogUsers:[],
      newCommand: { user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix:'', date:'', activity:'', filler_id:1},
      commands:[]
    }
  },
  mounted:function(){
    console.log('hello');
    this.getCommands();
    this.getCommandByUserId();
    this.getUserById();
  },
  methods:{
    getCommands:function(){
      axios.get('http://localhost:3005/command/').then((response) => {
        console.log('line 139 getcommands', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN COMMANDS', this.commands);
          this.commands = response.data.rows;
          console.log('ligne 145');
        }
      })
    },
    getUserById: function(id){
      axios.get('http://localhost:3005/users/' + sessionStorage.user).then((response) => {
        if (response.data.error) {
          console.log('error userbyId');
        } else {
          console.log('SUCESS SO', response.data.rows);
          console.log(response.data.rows);
          this.LogUsers = response.data.rows;
          console.log('this.LogUsers', this.LogUsers);
          console.log('this.LogUsers[0].id', this.LogUsers[0].id);
          console.log('this.LogUsers[0].lastname', this.LogUsers[0].lastname);
          this.newCommand.user_id = this.LogUsers[0].id;
          console.log('ligne 38');
        }
      })
    },
  getCommandByUserId:function(user_id){
    axios.get('http://localhost:3005/command/'+ sessionStorage.user_id).then((response) => {
      console.log('get commands', response);
      if (response.data.error) {
        app.errorMessage = response.data.message;
      } else {
        console.log('SUCESS SO', response.data.rows);
        console.log(response.data.rows);
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
        this.newCommand = { user_id:0, carburant: '', type:'', disponibilite:'' , qualite:'', prix: 0, date:'', activity:'', filler_id:1 };
      if (response.data.error) {
        console.log('========= ligne 167 =========');
        app.errorMessage = response.data.message;
      } else {
        console.log('ligne 195');
        console.log('ligne 196 =', this.newCommand);
        this.getCommands();
        this.getCommandByUserId();
      }
    })
  }
  }
}

</script>

<style lang="css">
span.gold{
  color: gold;
  font-weight: 800;
  text-decoration: underline;
}

p.straight{
  background: red;
  display:inline-block;
}

img{
  max-width: 100%;
  height: auto;
}
li.infos{
font-weight: 800;
text-align: left;
list-style: none;
}

#addModal, #editModal, #deleteModal {
margin: auto;
position: fixed;
top: 0;
}


#addModal input{
  width: 5vw;
}

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

#addModal table.form {
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
