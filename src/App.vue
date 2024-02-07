<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolflix',
  components: { AppHeader, AppMain },
  data(){
    return{
      store,
      apiUrl:"https://api.themoviedb.org/3/search/movie",
      apiKey:"&api_key=9e8a9ba25d0346e2cf97938b16ad80eb"


    }
  },

 methods: {
    fetchFilms(searched){
      axios.get(`${this.apiUrl}?query=${searched}${this.apiKey}`)
      .then((res)=>{
        const movies = res.data.results.map((movie) => {
          return{
            title: movie.title,
            originalTitle: movie.original_title,
            language: movie.original_language,
            ratings: movie.vote_average
          }
        })
        store.movies = movies;
      })

    }
 }

}
</script>

<template>
  <div>
    <AppHeader @movie-search="fetchFilms"/>
    <AppMain />
  </div>

</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>