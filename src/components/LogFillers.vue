<template lang="html">
  <div class="logfillers">
<h1> <span class="light"> {{LogFillers[0].firstname}} </span>  Welcome on you Personal Filler Page</h1>
<p> Your personal informations are the following : </p>
<label for=""> Driver with Id Number {{LogFillers[0].id}} </label>
<label for=""> Your name  is : {{this.LogFillers[0].firstname}} {{this.LogFillers[0].lastname}}  </label>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Filers2',
  data () {
    return {
      LogFillers: [],
      ranges:[]
    }
  },
  mounted: function (){
    console.log('mounted au mounted');
    this.getFillerById();
    this.getUsersNameCommandById();
  },
  methods: {
    getFillerById:function(id){
      axios.get('http://localhost:3005/fillers/'+ sessionStorage.filler).then((response) => {
        if (response.data.error) {
          console.log('error fillerbyId');
        } else {
          console.log('SUCESS SO', response.data.rows);
           console.log(response.data.rows);
          this.LogFillers = response.data.rows;
          console.log('filler id is', this.LogFillerss[0].id);
          console.log('filler lastname is', this.LogFillers[0].lastname);
          console.log('filler firstname id', this.LogFillers[0].firstname);
        }
      })
    },
    getUsersNameCommandById:function(id){
      axios.get('http://localhost:3007/command'+ sessionStorage.command).then((response) => {
        //console.log('getUsersNameCommandById', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
          console.log('ERROR getUsersNameCommandById');
        } else {
          console.log('SUCESS SO', response.data.rows);
          this.ranges = response.data.rows;
          console.log('l id de luser est le suivant ', this.ranges[0].id);
          console.log('l id de luser est le suivant ', this.ranges.id);
          var loggedCommand = this.ranges[0].id;
          console.log('loggedUser ==>', loggedCommand);
          this.loggedCommand = {};
        }
      })
    }
  }
}
</script>

<style lang="css">
span.light{
  color: silver
}
</style>
