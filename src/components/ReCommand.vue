<template>
  <div class="recommand">
    <div>
      <b-card overlay
              img-src="https://picsum.photos/900/250/?image=20"
              img-alt="Card Image"
              text-variant="white"
              title="Table"
              sub-title="Recap of different command">
        <p class="card-text">
        Take a look at the different commands that are on going for the moment
        </p>
      </b-card>
    </div>
<button type="button" name="button" @click="showingAddModal = true; elect()">
  <i class="far fa-address-card fa-4x"></i>
</button>

  <table class="table">
      <tr>
        <th> Id </th>
        <th> name </th>
        <th> Commandes effectues </th>
        <th> EDIT </th>
        <th> DELETE </th>
      </tr>

      <tr v-for="name in names">
        <td> {{name.user_id}} </td>
        <td> {{name.user_name}} </td>
        <td> {{name.command }}</td>
        <td> <i class="fas fa-pen-square" @click="showingEditModal = true;selectUsersNameCommand(name)"></i></td>
        <td> <i class="fas fa-times" @click="showingDeleteModal = true;selectUsersNameCommand(name)"></i> </td>
      </tr>
  </table>


<!-- ////////////////////////////////////////////////////////////////////// -->


<div id="addModal" v-if="showingAddModal">
  <b-card title="Add a New UserCommand"
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

      <table class="form2">
      <label for=""> id </label>
      <input type="text" name="" value="" v-model="usersNameCommand.user_id">
      <br>
      <label for=""> Name </label>
      <input type="text" name="" value="" v-model="usersNameCommand.user_name">
      <br>
      <label for=""> Comamnds </label>
      <input type="text" name="" value="" v-model="usersNameCommand.command">

      <button @click="showingAddModal = false; createUsersNameCommand()" type="button" name="button"> Save </button>
      </table>
      </div>
    </p>
  </b-card>
</div>

<!-- ////////////////////////////////////////////////////////////////////////// -->

<div id="editModal" v-if="showingEditModal">
  <b-card title="Edit UsersNameCommand"
          img-src="https://picsum.photos/600/300/?image=5"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      <div>
          <button class="fright close" @click="showingEditModal = false"> <i class="fas fa-times-circle"></i> </button>
      <p> Are your sure you want to delete Users Number <span> {{clickedUsersNameCommand.user_id}} </span> </p>
      <table class="form2">
        <label for=""> user_id </label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.user_id">
      <br>
        <label for=""> user_name </label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.user_name">
      <br>
        <label for=""> command </label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.command">
      <br>

      <button @click="showingEditModal = false; updateUsersNameCommand()" type="button" name="button"> Update </button>

      </table>
      </div>
    </p>

  </b-card>
</div>





<div id="deleteModal" v-if="showingDeleteModal">
  <b-card border-variant="danger"
            header="Delete User"
            header-border-variant="danger"
            header-text-variant="danger"
            align="center">
      <p class="card-text">
        <div>
        <h2 class="title"> You are about to delete the following<button class="fright close" @click="showingDeleteModal = false"> <i class="far fa-times-circle"></i> </button> </h2>
      <p> Do you want to Delete the command number <span> {{clickedUsersNameCommand.user_id}} </span> associated to <span> {{clickedUsersNameCommand.user_name}} </span> with the name <span> {{ clickedUsersNameCommand.command_name }} </span> for sure </p>
      <button @click="showingDeleteModal = false;deleteUsersNameCommand()" type="button" name="button"> YES </button>
      <button @click="showingDeleteModal = false" type="button" name="button"> NO </button>
      </div></p>
    </b-card>
</div>

    <!-- ////////////////////////////////////////////////////////////////////////// -->

        <!-- ////////////////////////////////////////////////////////////////////////// -->

</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      names:[],
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false,
      usersNameCommand: { user_id:'', user_name:'', command:''},
      clickedUsersNameCommand:{}
    }
  },
  mounted: function(){
    console.log('mounted from Recommand');
    this.getIdUserCommandName2();
  },
  methods:{
    getIdUserCommandName2: function(){
      axios.get('http://localhost:3005/users/recommand').then((response) => {
        console.log('getIdUserCommandName2', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
        } else {
          console.log('sucess so', response.data.rows);
          this.names = response.data.rows;
        }
      })
    },
    createUsersNameCommand: function(){
      console.log('create command');
      axios.post('http://localhost:3005/users/recommand/', this.usersNameCommand).then((response) => {
        console.log('usersNameCommand', response);
        console.log('this.usersNameCommand', this.usersNameCommand);
        this.usersNameCommand = {user_id:'', user_name:'', command:''};
        if (response.data.error) {
          console.log('ERROR usersNameCommand');
          app.errorMessage = response.data.message;
        } else {
          console.log('usersNameCommand', this.usersNameCommand);
          this.getIdUserCommandName2();
        }
      })
    },
    updateUsersNameCommand: function(){
      console.log('updateUsersNameCommand');
      console.log(this.clickedUsersNameCommand);
        axios.put('http://localhost:3005/users/recommand/'+ this.clickedUsersNameCommand.user_id, this.clickedUsersNameCommand).then((response) => {
        console.log('updateUsersNameCommand', response);
        this.clickedUsersNameCommand = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
          console.log('ligne 139 : this.clickedUsersNameCommand', this.clickedUsersNameCommand);
          console.log('this.clickedUsersNameCommand.user_id:', this.clickedUsersNameCommand.user_id);
        }
      })
    },
    deleteUsersNameCommand: function(){
      console.log('deleteUsersNameCommand');
      axios.delete('http://localhost:3005/users/recommand/'+ this.clickedUsersNameCommand.user_id).then((response) => {
        this.clickedUsersNameCommand = {};
        if (response.data.error) {
          console.log('ERROR IN DELETE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN DELETE');
          this.getIdUserCommandName2();
          app.sucessMessage = response.data.message
        }
      })
    },
    elect: function(){
      console.log('stones');
    },
    selectUsersNameCommand(name){
      this.clickedUsersNameCommand = name;
      console.log(name);
    }
  }
}
</script>
<style scoped>
#addModal, #editModal, #deleteModal {
margin: auto;
position: fixed;
top: 0;
background: rgba(247,208,228,0.3);
}

#deleteModal p span, #editModal span{
  color: orangered;
  font-weight: 800;
}
</style>
