<template lang="html">
  <div class="logusers" v-if="this.logUsers[0]">
      <v-avatar size="70px" tile>
        <img
          src="../assets/avatar/flora.png"
          alt="Vuetify"
        >
      </v-avatar>

<h2> Hello <span class="gold"> {{this.logUsers[0].user_name}} </span> </h2>

    <template>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm8 md6>
            <v-card color="blue-grey lighten-3" dark>
              <v-card-title primary class="title"> Users Infos </v-card-title>
              <v-card-text>
                <li class="infos"> Your are Currently logged in as User Number <span> {{this.logUsers[0].user_id}} </span> </li>
                <li class="infos"> Your name is {{this.logUsers[0].user_name}} </li>
                <li class="infos"> Your command total is {{total}}</li>
                <li class="infos"> If you wish to plan your next order <router-link to="/Rejoindre"><i class="far fa-calendar-plus fa-3x"></i></router-link></li>

              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card color="grey" dark>
                  <v-card-text> {{today}} </v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-layout row wrap>
                  <v-flex
                    v-for="n in 2"
                    :key="n"
                    d-flex
                    xs12
                  >
                    <v-card
                      color="blue-grey lighten-4"
                      dark
                    >
                      <v-card-text>{{ amount }} </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
            <v-card color="blue-grey lighten-1" dark>
              <v-card-text>
                  <h4> Here is the list of your commands </h4>
                {{ below }}
              <br> {{fidelity}} </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
     <v-chip label outline color="amber darken-2"> <h2> Listing of your past orders </h2> </v-chip>
    <table class="table">
        <tr>
          <th> You are User number </th>
          <th> name </th>
          <th> Commandes effectues </th>
          <th> Add </th>
          <th> EDIT </th>
          <th> DELETE </th>
        </tr>

        <tr v-for="log in logUsers">
          <td> {{log.user_id}} </td>
          <td> {{log.user_name}} </td>
          <td> {{log.command}}</td>
          <td> <i class="fas fa-plus-square" @click="showingAddModal = true;"></i></td>
          <td> <i class="fas fa-pen-square" @click="showingEditModal = true; selectUser(log)"></i></td>
          <td> <i class="fas fa-times" @click="showingDeleteModal = true; selectUser(log)"></i> </td>
        </tr>
    </table>
     <v-chip label outline color="light-green accent-3"> <h2> You have just added the following order(s) </h2> </v-chip>
    <table class="table">
      <tr>
        <th> command number </th>
        <th> carburant </th>
        <th> type </th>
        <th> disponibilite </th>
        <th> qualite </th>
        <th> prix </th>
        <th> date </th>
        <th> activity </th>
      </tr>

      <tr v-for="sml in small">
        <td> {{sml.command_id}} </td>
        <td> {{sml.carburant}} </td>
        <td> {{sml.type}}  </td>
        <td> {{sml.disponibilite}} </td>
        <td> {{sml.qualite}} </td>
        <td> {{sml.prix}} </td>
        <td> {{sml.date}} </td>
        <td> {{sml.activity}} </td>
      </tr>
    </table>



      <!-- /////////////////////////// AddModal ///////////////////////// -->


      <template>

        <template>
          <v-layout
            wrap
            style="height: 5px;"
          >

            <v-navigation-drawer style ="background:rgba(250,250, 250,0.5); position: abloslute; top:90vh"
              v-model="drawer"
              absolute
              temporary
            >
              <v-list class="pa-1">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="../assets/avatar/marc.png">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Marc Leider</v-list-tile-title>
                    <v-list-tile-title> will be available in 20 minutes</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>

              <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  @click=""
                >
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
          </v-layout>
        </template>


          <!-- /////////////////////// map ///////////////// -->

          <template>
            <v-card
              class="pa-3"
              flat
              height="300px"
              img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
            >
              <v-toolbar
                dense
                floating
              >
                <v-text-field
                  hide-details
                  prepend-icon="search"
                  single-line
                ></v-text-field>

                <v-btn icon>
                  <v-icon>my_location</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container>
                <v-layout justify-center>
                  <v-btn
                    color="pink"
                    dark
                    @click.stop="drawer = !drawer"
                  >
                    Find a filler
                  </v-btn>
                </v-layout>
              </v-container>
            </v-card>

          </template>
        </v-card>
      </template>



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

          <table class="form2">
            <p> Hello {{this.logUsers[0].user_name}} </p>
      <p> You are User number {{this.logUsers[0].user_id}} </p>
      <input type="text" name="" value="" v-model="usersNameCommand.user_id">
      <input type="text" name="" value="" v-model="usersNameCommand.user_name">
          <p> Comamnds </p> <input type="text" name="" value="" v-model="usersNameCommand.command">
          <button @click="showingAddModal = false; createUserCommandName2()" type="button" name="button"> Save </button>
          </table>
          </div>
      </b-card>
    </div>

      <!-- //////////////////////////////// Edit  Modal /////////////////////// -->
      <div id="editModal" v-if="showingEditModal">
        <b-card title="Card Title"
                img-src="https://picsum.photos/600/300/?image=24"
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
            <th> name </th>
            <th> : </th>
            <td> <input type="text" name=""  v-model="clickedUsersNameCommand.user_name"> </td>
            </tr>
            <tr>
            <th> Command </th>
            <th> : </th>
            <td> <input type="text" name=""  v-model="clickedUsersNameCommand.command"> </td>
            </tr>
            <tr>
            <th></th>
            <th> </th>
            <td> <button @click="showingEditModal = false; updateUserCommandName2()"> Update </button> </td>
            </tr>
            </table>
            </div>
          </p>
        </b-card>
      </div>
      <!-- ////////////////////////////////////////////////////////////////////// -->
  </div>





</template>



<script>
import axios from 'axios'
export default {
  name:'LogUsers',
  data () {
    return {
      small:[],
      lorem:'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos',
      today:'You have no extra order for the moment',
      total: '90 €',
      amount:'Your account is all set for now, your balance is set at 0 €',
      fidelity: 'Your fidelity CODE is : AFTDOEU',
      below:'Please find bellow a summary of all your past orders',
      logUsers:[],
      rangeUsers:[],
      usersNameCommand: { user_id:'', user_name:'', command:''},
      clickedUsersNameCommand:{},
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false,
      //sessionStorageUser:0,
      avatar:[{path:"../assets/avatar/deby.png"},
              {path:"../assets/avatar/albertino.png"},
              {path:"../assets/avatar/alexyt.png"},
              {path:"../assets/avatar/benoit.png"},
              {path:"../assets/avatar/angela.png"},
              {path:"../assets/avatar/daniel.png"},
              {path:"../assets/avatar/celine.png"},
              {path:"../assets/avatar/marc.png"},
              {path:"../assets/avatar/flora.png"}],
              drawer:null,
              items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
              ]
    }
  },
  mounted: function(){
    console.log('mounted from LogUsers');
    this.getIdUserCommandName2();
    this.getIdUserCommandName2ById();
    this.getHeaders();
    //console.log('Au mounted', logUsersId);
  },
  methods: {
    getHeaders:function(){
      axios.get('http://localhost:3005/headers/').then((response) => {
        console.log('getHeaders', response);
        if (response.data.error) {
          app.errorMessage = reponse.data.message;
        } else {
          console.log('NO ERRORS THIS HEADERS', this.small);
          this.small = response.data.rows;
        }
      });
    },
    getIdUserCommandName2: function(){
    axios.get('http://localhost:3005/users/recommand/').then((response) => {
      console.log('getIdUserCommandName2', response);
      if (response.data.error) {
        console.log('=== getIdUserCommandName2 ===');
        app.errorMessage = response.data.message;
      } else {
        console.log('NO ERROR getIdUserCommandName2', this.rangeUsers);
        this.rangeUsers = response.data.rows;
      }
    })
    },
    getIdUserCommandName2ById: function(id){
      axios.get('http://localhost:3005/users/recommand/'+ sessionStorage.user).then((response) => {
        console.log('getIdUserCommandName2ById', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
          console.log('ERROR getIdUserCommandName2ById');
        } else {
          console.log('SUCESS response.data.rows', response.data.rows);
          this.logUsers = response.data.rows;
          console.log('this.logUsers', this.logUsers);
          console.log('this.logUsers[0]', this.logUsers[0]);
          console.log('this.logUsers[0].user_id', this.logUsers[0].user_id);
          console.log('this.logUsers[0].user_name', this.logUsers[0].user_name);
          console.log('this.logUsers[0].command', this.logUsers[0].command);
          //var logUsersId = this.logUsers[0].user_id;
          //console.log('ligne 189', logUsersId);
          //console.log('sessionStorage.user = ', sessionStorage.user);
          //sessionStorage.user = this.sessionStorageUser;
          //console.log('sessionStorageUser id the following', this.sessionStorageUser);
        }
      })
    },
    selectUser(log) {
      this.clickedUsersNameCommand = log;
    },
    createUserCommandName2: function(){
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
          this.getIdUserCommandName2ById();
        }
      })
    },
    updateUserCommandName2: function() {
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

</style>
