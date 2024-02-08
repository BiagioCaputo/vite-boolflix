<script>
import {store} from './../data/store'
import ProductionCard from './ProductionCard.vue';
export default {
    name: 'AppMain',
    components: {ProductionCard},
    data(){
        return{
            store,
        }
    },
}


</script>

<template>
    <main>
        <div id="movie-section" class="row-container py-3 mb-5">
            <h1>Movies</h1>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 row-cols-xxl-6  gap-4">
                <ProductionCard v-for="movie in store.movies" :production="movie" />    
            </div>
        </div>

        <div id="tv-section" class="row-container py-3">
            <h1>Tv series</h1>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 row-cols-xxl-6  gap-4 ">
                <ProductionCard v-for="show in store.tvShows" :production="show" />
            </div>
        </div>
         
    </main>

</template>

<style lang="scss" scoped>


</style>