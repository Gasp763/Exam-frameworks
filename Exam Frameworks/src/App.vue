<script setup>
import Header from './components/header.vue'
import Contenu from './components/Contenu.vue'
import film from './films.json'
</script>

<template>
<Header />
<Contenu />
<ul>
  <li v-for="films in film">
    <img v-bind:src="films.image">
    <p>{{ films.nom }}</p>
    <p>{{ films.genre }}</p>
  </li>
</ul>
</template>

<style scoped>
p{
  max-width: 20ch;
}
img{
  width: 174px;
  height: auto;
  object-fit: cover;
}
ul{
  list-style: none;
  padding: 0;
  display: flex;
  gap: 35px;
}
</style>
