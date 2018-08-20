<template lang="html">
<div class="display">
<div>
  <b-card overlay
          img-src="https://picsum.photos/900/250/?image=10"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Recapitulatif of commands">
    <p class="card-text">
      Table of different commands
    </p>
  </b-card>
</div>

<table class="table">
  <tr>
    <th> id </th>
    <th> name </th>
    <th> commandes effectues </th>
    <th> edit </th>
    <th> delete </th>
  </tr>

  <tr v-for="name in names">
    <td> {{name.id}} </td>
    <td> {{name.name}} </td>
    <li v-for=" nm in name.command">
      the command {{nm.name}} is order number {{nm.id}}
    </li>
    <td> <button type="button" name="button"> <i class="fas fa-pen-fancy"></i> </button> </td>
    <td> <button type="button" name="button"> <i class="fas fa-trash-alt"></i> </button> </td>
  </tr>
</table>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'display',
  data () {
    return {
      showingAddModal:false,
    showingEditModal:false,
    showingDeleteModal:false,
    names: []
    }
  },
  mounted: function() {
    console.log('mounted for display');
    this.getIdUserCommandName();
  },
  methods: {
    getIdUserCommandName: function(){
      axios.get('http://localhost:3005/users/display/').then((response) => {
        console.log('getIdUserCommandName', response)
        if (response.data.error) {
          console.log('=== getIdUserCommandName ===');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR THIS getIdUserCommandName', this.names);
          this.names = response.data.rows;
        }
      })
    }
  }
}
</script>

<style lang="css">
.table li{
  list-style: none;
}
</style>
