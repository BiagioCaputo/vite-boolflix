<script>
import {store} from './../data/store'
export default {
    name: 'AppMain',
    components: {},
    data(){
        return{
            store,
        }
    },
}


</script>

<template>
    <main>
        <div id="movie-section" class="row-container py-3">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 row-cols-xxl-6  gap-4 ">
                <div class="col" v-for="movie in store.movies">
                    <ul>
                        <li>{{movie.title}}</li>
                        <li>{{movie.originalTitle}}</li>
                        <li>{{movie.ratings}}</li>
                        <li>{{movie.language}}</li>
                    </ul>
                    
                </div>
            </div>
        </div>
         
    </main>

</template>

<style lang="scss" scoped>


</style>