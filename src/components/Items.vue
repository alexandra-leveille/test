<template lang="html">
  <div class="item">

    <button @click="showingAddModal = true; createItem()" type="button" name="button">ADD</button>
    <table class="table">
      <tr>
        <th>ID </th>
        <th>NAME</th>
        <th>TYPE</th>
        <th>DATE</th>
        <th>ACTIVITY</th>
        <th>PRICE</th>
        <th>DISPO</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>

      <tr v-for="item in items">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.type}}</td>
        <td>{{item.title}}</td>
        <td>{{item.activity}}</td>
        <td>{{item.price}}</td>
        <td>{{item.dispo}}</td>
        <td><button @click="showingEditModal = true ;select(item)" type="button" name="button"> EDIT </button> </td>
        <td><button @click="showingDeleteModal = true;select(item)" type="button" name="button"> DELETE </button> </td>
      </tr>
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


<!-- /////////////////////////////////////////////////////////////// -->

<div id="editModal" v-if="showingEditModal">
  <b-card title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      <button @click="showingEditModal = false" type="button" name="button" class="close">
      <i class="far fa-times-circle"></i>
      </button>

      <div class="card">
        <label for="">Name</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.name">
        <label for="">type</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.type">
        <label for="">title</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.title">
        <label for="">activity</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.activity">
        <label for="">price</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.price">
        <label for="">dispo</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.dispo">
<button @click="updateItem();showingEditModal= false" type="button" name="button"> EDIT </button>
</div>
    </p>
  </b-card>
</div>


<!-- /////////////////////////////////////////////////////////////// -->

<div id="deleteModal" v-if="showingDeleteModal">
  <b-card title="DELETE"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <button @click="showingDeleteModal = false" type="button" name="button" class="close">
          <i class="far fa-times-circle"></i>
          </button
    <p class="card-text">
  {{clickedUsersNameCommand.name}} are you sure you want to delete
  command number {{clickedUsersNameCommand.id}}
    </p>
    <button @click="showingDeleteModal = false;deleteItem()" type="button" name="button"> YES </button>
    <button @click="showingDeleteModal = false" type="button" name="button"> NO </button>
  </b-card>
</div>

<!-- /////////////////////////////////////////////////////////////// -->


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Items',
  data() {
    return {
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false,
      items: [],
      newItem: {name:'', type:'', title:'', activity:'', price:'', dispo:''},
      clickedUsersNameCommand:{}
    }
  },
  mounted: function() {
    console.log('mounted');
    this.getItems();
  },
  methods: {
    getItems:function(){
      axios.get('http://localhost:3005/items/').then((response) => {
        console.log('getItems', response);
        if (response.data.error) {
          console.log('ERROR GETITEMS');
        } else {
          console.log('NO ERROR getItems',this.items);
          this.items = response.data.rows;
        }
      })
    },
    createItem: function(){
      console.log('create Filler');
      axios.post('http://localhost:3005/items/', this.newItem).then((response) => {
        console.log('filler', response);
        console.log('this.newFiller', this.newItem);
        this.newItem = {name:'', type:'', title:'', activity:'', price:'', dispo:''};
        if (response.data.error) {
          console.log('=== ligne 67 ===');
          app.errorMessage = response.data.message;
        } else {
          console.log('/// ligne 70 ///');
          this.getItems();
        }
      })
    },
    select(item){
      this.clickedUsersNameCommand = item;
      console.log('clicke sur', item);
      console.log('item name', item.name);
    },
    updateItem: function(){
      console.log(this.clickedUsersNameCommand.id);
      console.log(this.clickedUsersNameCommand.name);
      axios.put('http://localhost:3005/items/'+ this.clickedUsersNameCommand.id, this.clickedUsersNameCommand).then((response) => {
        console.log('from clickedUsersNameCommand', response);
        this.clickedUsersNameCommand = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
        }
      })
    },
    deleteItem: function(){
      console.log('////////// deleteItem ///////////');
      axios.delete('http://localhost:3005/items/' + this.clickedUsersNameCommand.id).then((response) => {
        console.log(this.clickedUsersNameCommand.id);
        console.log('from delete', response);
        this.clickedUsersNameCommand.id = {};
        if (response.data.error) {
          console.log('ERROR IN DELETE');
          app.errorMessage = response.data.messsage;
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

#editModal .card{
  display: flex;
justify-content: center;
align-items: flex-start
}

#editModal .card label{
  color: red;
  font-weight: 700;
}

</style>
