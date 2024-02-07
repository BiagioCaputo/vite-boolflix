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
      apiUrlMovie:"https://api.themoviedb.org/3/search/movie",
      apiKey:"9e8a9ba25d0346e2cf97938b16ad80eb",
      apiUrlTv:"https://api.themoviedb.org/3/search/tv"


    }
  },

 methods: {
    fetchCards(searched){
      axios.get(`${this.apiUrlMovie}?query=${searched}&api_key=${this.apiKey}`)
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
      }),
      axios.get(`${this.apiUrlTv}?query=${searched}&api_key=${this.apiKey}`)
      .then((res)=>{
        const tvShows = res.data.results.map((show) => {
          return{
            title: show.name,
            originalTitle: show.original_name,
            language: show.original_language,
            ratings: show.vote_average
          }
        })
        store.tvShows = tvShows;
      })

    }
 }

}
</script>

<template>
  <div>
    <AppHeader @movie-search="fetchCards"/>
    <AppMain />
  </div>

</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>