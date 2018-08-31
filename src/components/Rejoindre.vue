<template>
  <v-card>
    <v-card-title>
      Gas Refuiling order
      <i @click="showingAddModal = true;" class="far fa-plus-square fa-2x"></i>
    <div id="addModal" class="addModal" v-if="showingAddModal">
      <b-card title=" Add a New UserCommand"
              img-src="https://picsum.photos/600/300/?image=20"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
      <button @click="showingAddModal = false" type="button" name="button"> CLOSE </button>
      <table class="table">
        <label for=""> Carburant </label>
        <input type="text" name="" value="" v-model="newHeader.carburant">
        <select  v-model="newHeader.carburant" class="" name="activite">
          <option value="DIESEL"> DIESEL </option>
          <option value="Essence SP 98"> Essence SP 98 </option>
          <option value="Essence SP 95"> Essence SP 95 </option>
          <option value="Carburant GPL"> Carburant GPL </option>
        </select>
        <label for=""> Type </label>
        <input type="text" name="" value="" v-model="newHeader.type">
        <select  v-model="newHeader.type" class="" name="activite">
          <option value="Polluant"> Polluant </option>
          <option value="Anti-Polluant"> Anti-Polluant </option>
          <option value="BIO"> BIO </option>
          <option value="Economique"> Economique </option>
        </select>
    <label for=""> Disponibilite </label>
        <input type="text" name="" value="" v-model="newHeader.disponibilite">
        <select v-model="newHeader.disponibilite"  name="">
          <option value="YES"> YES </option>
          <option value="NO"> NO </option>
        </select>
        <label for=""> Qualite </label>
        <input type="text" name="" value="" v-model="newHeader.qualite">
        <select v-model="newHeader.qualite"  name="">
          <option value="acceptable"> acceptable </option>
          <option value="non-acceptable"> non-acceptable </option>
          <option value="passable"> passable </option>
        </select>

        <label for=""> Prix </label>
        <input type="text" name="" value="" v-model="newHeader.prix">
        <input type="range" name="points" min="0" max="300" v-model="newHeader.prix">

      </table>
        <button @click="showingAddModal = false; createHeader()" type="button" name="button"> CREATE </button>
      </p>
      </b-card>
    </div>

    <div id="editModal" class="editModal" v-if="showingEditModal">
      <b-card title=" Add a New UserCommand"
              img-src="https://picsum.photos/600/300/?image=02"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
      <button @click="showingEditModal = false" type="button" name="button"> CLOSE </button>
      <table class="table">
        <label for=""> Carburant </label>
        <input type="text" name="" value="" v-model="clickedHeader.carburant">

        <select  v-model="clickedHeader.carburant" class="" name="activite">
          <option value="DIESEL"> DIESEL </option>
          <option value="Essence SP 98"> Essence SP 98 </option>
          <option value="Essence SP 95"> Essence SP 95 </option>
          <option value="Carburant GPL"> Carburant GPL </option>
        </select>

        <label for=""> Type </label>
        <input type="text" name="" value="" v-model="clickedHeader.type">

        <select v-model="clickedHeader.type" class="" name="activite">
          <option value="Polluant"> Polluant </option>
          <option value="Anti-Polluant"> Anti-Polluant </option>
          <option value="BIO"> BIO </option>
          <option value="Economique"> Economique </option>
        </select>

        <label for=""> Disponibilite </label>
        <input type="text" name="" value="" v-model="clickedHeader.disponibilite">
        <select v-model="clickedHeader.disponibilite"  name="">
          <option value="YES"> YES </option>
          <option value="NO"> NO </option>
        </select>

        <label for=""> Qualite </label>
        <input type="text" name="" value="" v-model="clickedHeader.qualite">
        <select v-model="clickedHeader.qualite"  name="">
          <option value="acceptable"> acceptable </option>
          <option value="non-acceptable"> non-acceptable </option>
          <option value="passable"> passable </option>
        </select>

        <label for=""> Prix </label>
        <input type="text" name="" value="" v-model="clickedHeader.prix">
        <input type="range" name="points" min="0" max="300" v-model="clickedHeader.prix">
      </table>
        <button @click="showingAddModal = false; updateHeader()" type="button" name="button"> UPDATE</button>
      </p>
      </b-card>
    </div>


    <div id="deleteModal" v-if="showingDeleteModal">
      <b-card title="Delete of command type"
              img-src="https://picsum.photos/600/300/?image=25"
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
          command number {{clickedHeader.id }}, of type {{ clickedHeader.type }} and costing {{clickedHeader.prix }}</p>
        <button @click="showingDeleteModal = false; deleteHeader()"  type="button" name="button"> YES </button>
        <button @click="showingDeleteModal = false" type="button" name="button"> NO </button>

        </div>
      </b-card>
    </div>




      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="small"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td> {{ props.item.id }} </td>
        <td class="text-xs-right">{{ props.item.carburant }}</td>
        <td class="text-xs-right">{{ props.item.type }}</td>
        <td class="text-xs-right">{{ props.item.disponibilite }}</td>
        <td class="text-xs-right">{{ props.item.qualite }}</td>
        <td class="text-xs-right">{{ props.item.prix }}</td>
        <td> <i @click="showingEditModal = true; selectUser(props.item)" class="fas fa-pen-square fa-2x"></i> </td>
        <td> <i @click="showingDeleteModal = true; selectUser(props.item)" class="fas fa-trash-alt fa-2x"></i> </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>


<script>
import axios from 'axios'
  export default {
  name: 'Rejoindre',
    data () {
      return {
        search: '',
        showingAddModal: false,
        showingEditModal:false,
        showingDeleteModal: false,
        newHeader: {carburant:'', type:'', disponibilite:'' , qualite:'', prix:''},
        clickedHeader: {},
        headers: [
          {
            text: 'Id Number',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Carburant', value: 'calories' },
          { text: 'Type', value: 'fat' },
          { text: 'Disponibilite', value: 'carbs' },
          { text: 'Qualite', value: 'protein' },
          { text: 'Prix', value: 'iron' },
          { text: 'EDIT', value: 'iron' },
          { text: 'DELETE', value: 'iron' }
        ],
        small: [
        // {id:1, carburant:"DIESEL", type:"polluant", disponibilite:true, qualite:"acceptable", prix: 35},
        // {id:2, carburant:"ESSENCE S98", type:"polluant", disponibilite:true, qualite:"passable", prix: 50},
        // {id:3, carburant:"Carburant GPL", type:"anti-polluant", disponibilite:false, qualite:"acceptable", prix: 90},
        // {id:4, carburant:"Essence SP 95", type:"polluant", disponibilite:true, qualite:"acceptable", prix: 35},
        // {id:5, carburant:"DIESEL", type:"anti-polluant", disponibilite:false, qualite:"passable", prix: 130},
        // {id:6, carburant:"DIESEL", type:"anti-polluant", disponibilite:false, qualite:"non-acceptable", prix: 150},
        // {id:7, carburant:"Essence SP 98", type:"polluant", disponibilite:true, qualite:"acceptable", prix: 30},
        // {id:8, carburant:"DIESEL", type:"polluant", disponibilite:true, qualite:"non-acceptable", prix: 40}
        ]
      }
    },
    mounted(){
      console.log('we are in mounted');
      this.getHeaders();
    },
    methods: {
      getHeaders: function(){
        axios.get('http://localhost:3005/headers/').then((response) => {
          console.log('get headers', response);
          if (response.data.error) {
            app.errorMessage = response.data.message;
          } else {
            console.log('NO ERROR THIS HEADERS', this.small);
            this.small = response.data.rows;
            console.log('ligne 84');
          }
        })
      },
      selectUser(propsItem){
        console.log('on a clicke sur');
        this.clickedHeader = propsItem;
        console.log(propsItem);
      },
      createHeader: function(){
        axios.post('http://localhost:3005/headers/', this.newHeader).then((response) => {
          console.log('newHeader', response);
          console.log('this.newHeader', this.newHeader);
          this.newHeader = { carburant: '', type:'', disponibilite:'' , qualite:'', prix:'' };
          if (response.data.error) {
            console.log('========= ligne 167 =========');
            app.errorMessage = response.data.message;
          } else {
            console.log('ligne 99');
            this.getHeaders();
          }
        })
      },
      updateHeader: function(){
        console.log(this.clickedHeader.id);
        console.log(this.clickedHeader.prix);
        console.log(this.clickedHeader.qualite);
        axios.put('http://localhost:3005/headers/'+ this.clickedHeader.id, this.clickedHeader).then((response) => {
          console.log('from response', response);
          this.clickedHeader = {};
          if (response.data.error) {
            console.log('ERROR IN UPDATE');
          } else {
            console.log('NO ERROR IN UPDATE');
            app.sucessMessage = response.data.message;
          }
        })
      },
      deleteHeader: function(){
        console.log('/////////////// deleteHeader /////////////////');
        console.log(this.clickedHeader);
        axios.delete('http://localhost:3005/headers/'+ this.clickedHeader.id).then((response) => {
          console.log('from delete response', response);
          this.clickedHeader = {};
          if (response.data.error) {
            console.log('ERROR IN DELETE');
            app.errorMessage = response.data.message;
          } else {
            console.log('NO ERROR IN DELETE');
            this.getHeaders();
            app.sucessMessage = respponse.data.message;
          }
        })
      }
    }
  }
</script>

<style lang="css">

#addModal table, #editModal table{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2vw;
}

#addModal table input, #editModal table input{
  border-bottom: 1px solid black;
  width: 25vw;
}
#addModal, #editModal{
  height: 55vh;
  width: 35vw;
}
</style>
