<script setup>
    import { ref } from 'vue'
    const movie = ref('');
</script>
<template>
    <nav>
        <h1>B3G - Films</h1>
        <a>Home</a>
        <form>
            <label for="searchMovie">Rechercher un film</label>
            <input type="text" id="searchMovie" v-model="movie">
            <button type="submit">Chercher</button>
        </form>
    </nav>
    <div>
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