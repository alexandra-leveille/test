<template lang="html">
<div class="">
  <div>
    <b-card overlay
            img-src="https://picsum.photos/900/250/?image=05"
            img-alt="Card Image"
            text-variant="white"
            title="Users present"
            sub-title="Listing of All Users">
    <h1> Users available today </h1>
    </b-card>
  </div>

  <h1> List of users present Today </h1>
  <h2> To Add a new User <button @click="showingAddModal = true" type="" name="button"> <i class="fas fa-user-plus"></i> </button> </h2>


<table class="list">
<tr>
  <th> Id </th>
  <th>  lastname </th>
  <th> firstname </th>
  <th> Edit </th>
  <th> Delete </th>
</tr>

<tr v-for="user in users">
  <td> {{user.id }} </td>
  <td> {{user.lastname }} </td>
  <td> {{user.firstname }} </td>
  <td> <button @click="showingEditModal = true; selectUser(user)" type="button" name="button"> <i class="fas fa-eraser"></i> </button>  </td>
  <td> <button @click="showingDeleteModal = true; selectUser(user)" type="button" name="button"> <i class="fas fa-trash-alt"></i> </button> </button> </td>
</tr>
</table>

<!-- ///////////////////////////////////////////////////////////////////// -->


<!-- ////////////////////// showingAdd Modal ////////////////////////// -->

<div id="addModal" v-if="showingAddModal">
  <b-card title="Add a new user"
          img-src="https://picsum.photos/600/300/?image=43"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      <div >

      <button @click="showingAddModal = false" type="button" name="button" class="close">
      <i class="far fa-times-circle"></i>
      </button>
      <table class="form">

      <tr>
      <th> Firstname </th>
      <th> : </th>
      <td> <input type="text" name=""  v-model="newUser.firstname"> </td>
      </tr>

      <tr>
      <th>  Lastname </th>
      <th> : </th>
      <td> <input type="text" name=""  v-model="newUser.lastname"> </td>
      </tr>


      <tr>
      <th></th>
      <th> </th>
      <td> <button @click="showingAddModal = false; createUser()"> Save </button> </td>
      </tr>

      </table>
      </div>
    </p>
  </b-card>
</div>

<!-- ////////////////////////////////////showingEditModal \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->

<div id="editModal" v-if="showingEditModal">
  <b-card title="Edit a user"
          img-src="https://picsum.photos/600/300/?image=48"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      <div>
        <button @click="showingEditModal = false" type="button" name="button" class="close">
        <i class="far fa-times-circle"></i>
        </button>
      <table class="form">

      <tr>
      <th> user  - Firstname </th>
      <th> : </th>
      <td> <input type="text" name=""  v-model="clickedUser.firstname"> </td>
      </tr>

      <tr>
      <th> user  - Lastname </th>
      <th> : </th>
      <td> <input type="text" name=""  v-model="clickedUser.lastname"> </td>
      </tr>


      <tr>
      <th></th>
      <th> </th>
      <td> <button @click="showingEditModal = false; updateUser()"> Update </button> </td>
      </tr>

      </table>
      </div>
    </p>

  </b-card>
</div>


<!-- /////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->


<div id="deleteModal" v-if="showingDeleteModal">
  <b-card title="Delete a user"
          img-src="https://picsum.photos/600/300/?image=60"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">

    <div>
      <button @click="showingDeleteModal = false" type="button" name="button" class="close">
      <i class="far fa-times-circle"></i>
      </button>
    <p> Do you wish to delete the following :
      command number {{clickedUser.id }}, with the lastname {{clickedUser.lastname }}</p>
    <button @click="showingDeleteModal = false; deleteuser()"  type="button" name="button"> YES </button>
    <button @click="showingDeleteModal = false" type="button" name="button"> NO </button>

    </div>
  </b-card>
</div>

<!-- /////////////////////////////////////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->

</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'users',
  data () {
  return {
    showingAddModal:false,
    showingEditModal:false,
    showingDeleteModal:false,
    users:[],
    newUser: {lastname:'', firstname: ''},
    clickedUser:{}
    }
  },
  mounted: function () {
    console.log('==== users is mounted ====');
    this.getUsers();
  },
  methods: {
    getUsers: function(){
      axios.get('http://localhost:3005/users/').then((response) => {
        console.log('get users', response);
        if (response.data.error) {
          console.log('=== getusers === ');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR THIS users IS', this.users);
          this.users = response.data.rows;
          console.log('ligne 202');
          console.log(this.users);
        }
      })
    },
  createUser: function(){
    console.log('create user');
    axios.post('http://localhost:3005/users/', this.newUser).then((response) => {
      console.log('user', response);
      console.log('this.newuser', this.newUser);
      this.newUser = {lastname:'', firstname: ''};
      if (response.data.error) {
        console.log('=== ligne 67 ===');
        app.errorMessage = response.data.message;
      } else {
        console.log('/// ligne 70 ///');
        this.getUsers();
      }
    })
  },
  selectUser(user){
    this.clickedUser = user;
    console.log('clicke sur');
    console.log('user.id = ', user.id);
    console.log('user.lastname = ', user.lastname);
    console.log('user.firstname = ', user.firstname);
  },
  updateUser: function(){
    console.log(this.clickedUser.id);
    console.log(this.clickedUser.lastname);
    console.log(this.clickedUser.firstname);
    axios.put('http://localhost:3005/users/'+ this.clickedUser.id, this.clickedUser).then((response) => {
      console.log('from updateuser', response);
      this.clickedUser = {};
      if (response.data.error) {
      console.log('ERROR IN UPDATE');
      app.errorMessage = response.data.message;
    } else {
      console.log('NO ERROR IN UPDATE');
      app.sucessMessage = response.data.message;
    }
    })
  },
   deleteUser:function(){
     console.log('////////////  deleteuser ////////// ');
     console.log(this.clickedUser);
     axios.delete('http://localhost:3005/users/'+ this.clickedUser.id).then((response) => {
       console.log('from delete response', response);
       this.clickedUser = {};
       if (response.data.error) {
         console.log('ERROR IN DELETE');
         app.errorMessage = response.data.message;
       } else {
         console.log('NO ERROR IN DELETE');
         this.getUsers();
         app.sucessMessage = response.data.message;
       }
     })
   }
  }
}
</script>

<style scoped="">
button{
  background: none;
  border: 1px solid black;
}

table.list{
border: 2px solid;
width: 60vw;
height: auto;
margin: auto;
}


table.list th{
  background: orange;
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
  height: 55vh;
  width: 30vw;
  margin: auto;
  position:fixed;
  top:0;
  left:0;
}
</style>
