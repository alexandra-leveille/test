
<template>
  <v-card>
    <v-card-title>
      Gas Refuiling order
      <i @click="showingAddModal = true;" class="far fa-plus-square fa-2x"></i>
    <div id="addModal" class="addModal" v-if="showingAddModal">
      <button @click="showingAddModal = false" type="button" name="button"> CLOSE </button>
      <table class="table">
        <label for=""> Carburant </label>
        <input type="text" name="" value="" v-model="newHeader.carburant">
        <label for=""> Type </label>
        <input type="text" name="" value="" v-model="newHeader.type">
        <label for=""> Disponibilite </label>
        <input type="text" name="" value="" v-model="newHeader.disponibilite">
        <label for=""> Qualite </label>
        <input type="text" name="" value="" v-model="newHeader.qualite">
        <label for=""> Prix </label>
        <input type="text" name="" value="" v-model="newHeader.prix">
      </table>
        <button @click="showingAddModal = false; createHeader()" type="button" name="button"> CREATE </button>
    </div>


    <div id="editModal" class="editModal" v-if="showingEditModal">
      <button @click="showingAddModal = false" type="button" name="button"> CLOSE </button>
      <table class="table">
        <label for=""> Carburant </label>
        <input type="text" name="" value="" v-model="clickedHeader.carburant">
        <label for=""> Type </label>
        <input type="text" name="" value="" v-model="clickedHeader.type">
        <label for=""> Disponibilite </label>
        <input type="text" name="" value="" v-model="clickedHeader.disponibilite">
        <label for=""> Qualite </label>
        <input type="text" name="" value="" v-model="clickedHeader.qualite">
        <label for=""> Prix </label>
        <input type="text" name="" value="" v-model="clickedHeader.prix">
      </table>
        <button @click="showingAddModal = false; updateHeader()" type="button" name="button"> CREATE </button>
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
        <td> <i @click="showingEditModal = true; selectUser(head)" class="fas fa-pen-square fa-1x"></i> </td>
        <td> <i @click="showingDeleteModal = true; selectUser(head)" class="fas fa-trash-alt fa-1x"></i> </td>
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
        clickedHeader: {},
        newHeader: {carburant:'', type:'', disponibilite:'' , qualite:'', prix:''},
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
          { text: 'Prix', value: 'iron' }
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
      selectUser(head){
        console.log('on a clicke sur');
        this.clickedHeader = head;
        console.log(head);
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
      }

    }
  }
</script>

<style lang="css">

#addModal table{
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2vw;
}

#addModal table input{
  border-bottom: 1px solid black;
  width: 25vw;
}
#addModal{
  height: 55vh;
  width: 35vw;
  border: 2px solid red;
}
</style>
