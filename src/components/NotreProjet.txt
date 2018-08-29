<template lang="html">
<div class="notreprojet">
  <h1> Notre Projet </h1>
  <template>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card color="purple" dark>
            <v-card-title primary class="title"> Notre Projet </v-card-title>
            <v-card-text>{{station}}
              <li> indice</li>
                {{indice}}

            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="indigo" dark>
                <v-card-text>
                    {{indice}}
                  </v-card-text>
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
                    color="red lighten-2"
                    dark
                  >
                    <v-card-text>
                      {{indice}}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="green lighten-2" dark>
            <v-card-text>{{indice}}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="blue lighten-2" dark>
            <v-card-text>
                <li>station</li>
              {{station}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>

  <template>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12 order-xs5>
          <v-layout column>
            <v-flex d-flex>
              <v-card color="blue-grey" dark tile flat>
                <v-card-text>{{ station }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="brown" dark tile flat>
                <v-card-text>{{station2}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm7>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="indigo lighten-2" dark tile flat>
                <v-card-text>{{temps}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row>
                <v-flex
                  v-for="n in 2"
                  :key="n"
                  d-flex
                >
                  <v-card
                    color="amber lighten-2"
                    tile
                    flat
                  >
                    <v-card-text>{{simple }}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm2 child-flex>
          <v-card color="orange lighten-2" tile flat>
            <v-card-text>{{securise}}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3>
          <v-card color="red lighten-2" dark tile flat>
            <v-card-text>{{prix}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>


          </div>
</template>

<script>
export default {
  name: 'NotreProjet',
  data : () => ( {
   projet: `Notre projet consite en la mise en place d une interface de communication entre des users (utilisateur ayant un besoin) et de fillers (personnes disponible pour faire un plain a votre place)`,
   projet1 : 'Nous souhaitons vous faire decouvrir notre gamme de service',
  anous : 'Grâce à notre station-service mobile, plus besoin de vous déplacer pour faire le plein. Nous livrons les véhicules des particuliers et des entreprises directement sur votre parking. Passez dès aujourd’hui à la livraison de carburant avec fulfill!',
  indice: 'Faire le plein n’a jamais été aussi simple. Commandez depuis notre application ou notre interface web et laissez-nous faire le reste.',
  simple: 'Vos véhicules sont ravitaillés sans bouger: indiquez simplement le lieu, le créneau et le type de carburant que vous souhaitez (Diesel, SP95, SP98).',
  securise: 'Nos équipements sont conformes à la réglementation européenne et nos Pompistes sont titulaires d’une certification d’état officielle.',
  prix: 'Vous ne dépenserez pas plus grâce à nos prix indexés sur les prix du marché et suivez votre consommation sur votre tableau de bord.',
  temps: 'C’est la fin des détours et des pertes de temps pour faire le plein. Nos clients sont heureux et les entreprises gagnent en productivité.',
  station: 'Nous avons créé Fullfill pour offrir aux automobilistes et aux entreprises une alternative pour leurs besoins en ravitaillements. Une solution moderne et pratique qui libère du temps en plus dans une journée pour nos utilisateurs et supprime une corvée qui n’est (à priori) un plaisir pour personne... voir une contrainte. Les journées sont remplies d’impératifs, de perte de temps et de stress. POMP supprime tous les impératifs liés au ravitaillement de votre véhicule.',
  station2: 'Un détour de temps en temps ou une obligation quotidienne pour les entreprises, la circulation et les dépenses en carburants que génèrent ce besoin sont réels. Nous avons lancé notre service à Paris et en Ile de France où nous connaissons la réalité de la circulation et de la pollution. Chaque véhicule ou chaque flotte pour qui nous livrons du carburant, sont des véhicules qui feront des trajets en moins. L’accumulation de ces trajets en moins représente une réelle réduction d’émissions de CO2.'
  })
}
</script>

<style lang="css">
</style>
