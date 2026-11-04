<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
import film from '../fiche.json'
function goToFilm (){
    router.push("Films");
}

const actifGenre = ref('');

function changeGenre(genre) {
    actifGenre.value = genre;
}
</script>

<template>
    <div v-if="$route.path !== '/films'">
        <div>
            <span>Filtres:</span>
            <ul>
                <li @click="changeGenre('Action')">Action</li>
                <li @click="changeGenre('Animation')">Animation</li>
                <li @click="changeGenre('Science-Fiction')">Science-Fiction</li>
                <li @click="changeGenre('Comédie')">Comédie</li>
                <li @click="changeGenre('Horreur')">Horreur</li>
                <li @click="changeGenre('Romance')">Romance</li>
                <li @click="changeGenre('Fantastique')">Fantastique</li>
            </ul>
        </div>
    </div>
    <h2>Top 5 de la semaine</h2>
    <div></div> <!-- Mettre le top 5 dans le div -->
    <h2>Autres films</h2>
    <ul>
        <li v-for="films in film" @click="goToFilm">
            <img v-bind:src="films.image">
            <p>{{ films.nom }}</p>
            <p v-for="genre in films.genre" :key="genre">{{ genre }}</p>
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
li{
    cursor: pointer;
}
</style>