<template>
  <div>
    <div>
        <AnimalList v-on:selected='setSelected($event)'/>
        <AnimalDetail :animal='selectAnimal' />
    </div>
  </div>
</template>
<script>
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';

export default {
  data() {
    return {
      selectAnimal: {}
    };
  },
  components: {
      AnimalList,
      AnimalDetail
  },
  methods: {
    setSelected (_selectAnimal){
      this.selectAnimal = _selectAnimal
    }
  }
}
</script>
