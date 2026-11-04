<script setup>
    import { ref } from 'vue'
    const movie = ref('');
</script>
<template>
    <nav>
        <h1>Films</h1>
        <RouterLink to="/" v-if="$route.path !== '/'">Home</RouterLink>
        <form v-if="$route.path !== '/films'">
            <label for="searchMovie">Rechercher un film</label>
            <input type="text" id="searchMovie" v-model="movie">
            <button type="submit">Chercher</button>
        </form>
    </nav>
    <p>Recherche: {{ movie }}</p>
    
</template>