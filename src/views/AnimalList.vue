<template>
  <div>
      <div class="search_animal">
        <input type="text" v-model="search_animal" placeholder="Rechercher..."/>
            <label>Rechercher un animal:</label>
      </div>
      <div class="list_animal">
        <v-list class="box_animal" v-for="animal in animaux" :key="animal.id">
          <div class="icone_animal">
            <img style="width:50px;" :src="animal.photo">
          </div>
          <div class="nom_animal">
            {{ animal.nom }}
          </div>
          <div class="info_animal">
            <div class="age">
              age: {{ animal.age }}
            </div>
          </div>
          <button @click="selectAnimal(animal)">Voir le détail</button>
        </v-list>
      </div>
  </div>
</template>
<script>
import { FETCH_ANIMAL } from '../../store/modules/action-type'
import { mapState, mapActions } from 'vuex'

import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

export default {
  data() {
    return {
      animaux: [],
      search_animal: ""
    };
  },
  http: {
    root: "http://localhost:3000"
  },
  computed: {
    ...mapState('app', [
      'animal',
    ]),
  },
  methods: {
    ...mapActions('app', [
        FETCH_ANIMAL,
    ]),
    selectAnimal (animal){
      this.$emit('selected', animal)
    }
  },
  watch: {
      search_animal(value) {
        console.log('value', value);
        this[FETCH_ANIMAL]({
            search: value,
        });
      },
    },
  mounted() {
    this.$resource("animaux")
      .get()
      .then(
        response => {
          this.animaux = response.data
        },
        response => {
          console.log("erreur", response.data)
        }
      )
  }
}
</script>
<style>

.search_animal{
  display: flex;
  flex-direction: column-reverse;
  margin: 20px auto;
  width: 75%;
}

.list_animal {
  width: 75%;
  margin: auto;
  border-collapse: collapse;
}

.box_animal {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75px;
    padding: 15px;
    font-family: "Orkney", sans-serif;
    background-clip: border-box;

    border: solid 1px black;

    border-radius: 2px;
    -webkit-box-align: center;
}

.icone_animal {
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50%;
}

.nom_animal {
  margin: auto;
}

</style>
