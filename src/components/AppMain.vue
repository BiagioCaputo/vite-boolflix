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
    <main class="p-5">
        <h1>Movies</h1>
        <div id="movie-section" class="row-container py-3 mb-5 ">
            <div class="row gap-2">
                <ProductionCard v-for="movie in store.movies" :production="movie" />    
            </div>
        </div>
        <h1>Tv series</h1>
        <div id="tv-section" class="row-container py-3 ">
            <div class="row gap-2">
                <ProductionCard v-for="show in store.tvShows" :production="show" />
            </div>
        </div>
         
    </main>

</template>

<style lang="scss" scoped>
main{
    background-color: grey;
}

#movie-section{
    width:100%;
}




</style>