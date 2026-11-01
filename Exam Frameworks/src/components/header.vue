<script setup>
    import { ref } from 'vue'
    const movie = ref('');
</script>
<template>
    <nav>
        <h1>Films</h1>
        <RouterLink to="/" v-if="$route.path !== '/'">Home</RouterLink>
        <form v-if="$route.path !== '/Films'">
            <label for="searchMovie">Rechercher un film</label>
            <input type="text" id="searchMovie" v-model="movie">
            <button type="submit">Chercher</button>
        </form>
    </nav>
    <div v-if="$route.path !== '/Films'">
        <p>Recherche: {{ movie }}</p>
        <div>
            <span>Filtres:</span>
            <ul>
                <li>Action</li>
                <li>Animation</li>
                <li>Science-fiction</li>
                <li>Comédie</li>
                <li>Horreur</li>
                <li>Romance</li>
            </ul>
        </div>
    </div>
    
</template>