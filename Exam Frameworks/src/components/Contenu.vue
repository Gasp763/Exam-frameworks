<script setup>
import film from '../fiche.json'
</script>

<template>
    <h2>Top 5 de la semaine</h2>
    <div></div> <!-- Mettre le top 5 dans le div -->
    <h2>Autres films</h2>
    <ul>
        <li v-for="films in film">
            <img v-bind:src="films.image">
            <p>{{ films.nom }}</p>
            <p>{{ films.genre }}</p>
        </li>
    </ul>
</template>

<style scoped>
p {
    max-width: 20ch;
}

img {
    width: 174px;
    height: auto;
    object-fit: cover;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 35px;
}
</style>