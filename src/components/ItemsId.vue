<template lang="html">
  <div class="item">

<h2> Welcome {{LogItems[0].name}}, You have now the right to make orders according to your preferences </h2>
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

      <tr v-for="LogItem in LogItems">
        <td>{{LogItem.id}}</td>
        <td>{{LogItem.name}}</td>
        <td>{{LogItem.type}}</td>
        <td>{{LogItem.title}}</td>
        <td>{{LogItem.activity}}</td>
        <td>{{LogItem.price}}</td>
        <td>{{LogItem.dispo}}</td>
        <td><button @click="showingEditModal = true ;select(LogItem)" type="button" name="button"> EDIT </button> </td>
        <td><button @click="showingDeleteModal = true;select(LogItem)" type="button" name="button"> DELETE </button> </td>
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
    <input type="text" name="Firstname" value="Firstname" :placeholder="LogItems[0].name" v-model="newItem.name">
    <label for="">type</label>
    <input type="text" name="" value="type" v-model="newItem.type">
    <select  v-model="newItem.type" class="" name="activite">
        <option   value="DIESEL"> DIESEL </option>
      <option   value="Essence SP 98"> Essence SP 98 </option>
      <option   value="Essence SP 95"> Essence SP 95 </option>
      <option   value="Carburant GPL"> Carburant GPL </option>
    </select>


    <label for="">date</label>
    <input type="date" name="" value="title" v-model="newItem.title">

    <label for="">activity</label>
    <input type="text" name="" value="activity" v-model="newItem.activity">
    <select v-model="newItem.activity" class="" name="activite">
      <option value="Faire le  Plein"> Faire le  Plein </option>
      <option value="Faire le 1/2"> Faire le 1/2 </option>
      <option value="Faire le 1/4"> Faire le 1/4 </option>
    </select>

    <label for="">price</label>
    <input type="text" name="" value="prix" v-model="newItem.price">
    <input type="range" name="points" min="0" max="300" v-model="newItem.price">

    <label for="">dispo</label>
    <input type="text" name="" value="disponibilite" v-model="newItem.dispo">
    <select v-model="newItem.dispo"  name="">
      <option value="YES"> YES </option>
      <option value="NO"> NO </option>
    </select>
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
        <input type="text" name="Firstname" value="Firstname" :placeholder="LogItems[0].name" v-model="clickedUsersNameCommand.name">
        <label for="">type</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.type">
    <select  v-model="clickedUsersNameCommand.type" class="" name="activite">
        <option   value="DIESEL"> DIESEL </option>
      <option   value="Essence SP 98"> Essence SP 98 </option>
      <option   value="Essence SP 95"> Essence SP 95 </option>
      <option   value="Carburant GPL"> Carburant GPL </option>
    </select>

        <label for="">Date</label>
        <input type="date" name="" value="" v-model="clickedUsersNameCommand.title">
        <label for="">activity</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.activity">

        <select v-model="clickedUsersNameCommand.activity" class="" name="activite">
      <option value="Faire le  Plein"> Faire le  Plein </option>
      <option value="Faire le 1/2"> Faire le 1/2 </option>
      <option value="Faire le 1/4"> Faire le 1/4 </option>
    </select>

        <label for="">price</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.price">
    <input type="range" name="points" min="0" max="300" v-model="clickedUsersNameCommand.price">

        <label for="">dispo</label>
        <input type="text" name="" value="" v-model="clickedUsersNameCommand.dispo">

        <select v-model="clickedUsersNameCommand.dispo"  name="">
              <option value="YES"> YES </option>
              <option value="NO"> NO </option>
            </select>




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
      clickedUsersNameCommand:{},
      LogItems: [],
    }
  },
  mounted: function() {
    console.log('mounted');
    //this.getItems();
    this.getItemsById();
  },
  methods: {
    getItemsById:function(id){
      axios.get('http://localhost:3005/items/'+ sessionStorage.item).then((response) => {
        if (response.data.error) {
          console.log('items by id ERROR');
        } else {
          console.log('SUCESS SO itemId is :', response.data.rows);
        console.log(response.data.rows);
        this.LogItems = response.data.rows;
        }
      })
    },
    // getItems:function(){
    //   axios.get('http://localhost:3005/items/').then((response) => {
    //     console.log('getItems', response);
    //     if (response.data.error) {
    //       console.log('ERROR GETITEMS');
    //     } else {
    //       console.log('NO ERROR getItems',this.items);
    //       this.items = response.data.rows;
    //     }
    //   })
    // },
    createItem: function(){
      console.log('create Item');
      axios.post('http://localhost:3005/items/', this.newItem).then((response) => {
        console.log('ITEM', response);
        console.log('this.newItem', this.newItem);
        this.newItem = {name:'', type:'', title:'', activity:'', price:'', dispo:''};
        if (response.data.error) {
          console.log('=== ligne 67 ===');
          app.errorMessage = response.data.message;
        } else {
          console.log('/// ligne 70 ///');
          this.getItemsById();
        }
      })
    },
    select(LogItem){
      this.clickedUsersNameCommand = LogItem;
      console.log('clicke sur', LogItem);
      console.log('item name', LogItem.name);
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

.table th{
  background: red;
}

#addModal .table{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#addModal .table input{
  width: 10vw;
  border-bottom: 2px solid;
}

#addModal .table select{
  background: rgba(239,212,212,0.5);
}

</style>
