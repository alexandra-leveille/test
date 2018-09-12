<template lang="html">
<div class="notreConcept">
  <h1> Our Simple concept </h1>

  <v-app light>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="210px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="../assets/avatar/marc.png"
                >
              </v-avatar>
              <div class="headline"> Marc <span style="font-weight:bold">Carter</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3"> is brand new to our service </div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3"> what should he do now ? </div>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="post.imgUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline red">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ post.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <i class="fab fa-reddit-alien fa-2x"></i>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <i class="fab fa-twitter fa-2x"></i>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <i class="fab fa-facebook-square fa-2x"></i>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <i class="fas fa-gas-pump fa-2x"></i>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn" target="_blank">Costa Huang</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
 </div>

</template>

<script>
export default {
  name: 'NotreConcept',
  data () {
    return {
      title: 'Your Logo',
        posts: [
          {
            title: ' Step 1 - Connect as a  User',
            content: 'Enter all your personel information that will be necessary to create a complete user profil. Give us your firstname, lastname, adress, phone number, vehicule gabaris, gas type, and availability preferences.',
            imgUrl: 'https://picsum.photos/600/300/?image=09'
          },
          {
            title: ' Step 2 - Find an available filler',
            content: 'Find the proper filler and time spot for you to receive your order. Choose if you want to be present or not during the delivery. Not available ? Dont worry you will receive a text once your order is over .',
            imgUrl: 'https://picsum.photos/600/300/?image=09'
          },
          {
            title: 'Setp 3 - leave your detailed infromations for your order',
            content: 'One your order is over we would like to receive some feedback from you. You can grade the quality of the service or plan for your next order. Remeber we want to see you very soon :)',
            imgUrl: 'https://picsum.photos/600/300/?image=09'
          }
        ]
    }
  }
}
</script>.
<style lang="css">
.red{
  color:white;
}
</style>
