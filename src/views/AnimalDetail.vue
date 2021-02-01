<template>
  <div class="animal_detail">
    <h1> Détails d'un animal </h1>
        <ul>
            {{ animal.nom }}
            {{ animal.age }}
            {{ animal.description }}
        </ul>
  </div>
</template>
<script>

export default {
  props: ['animal']
}
</script>
<style>
.animal_detail {
    display: inline-block;
    width: 40%;
}
</style>