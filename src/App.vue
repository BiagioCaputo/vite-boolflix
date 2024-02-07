<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolflix',
  components: { AppHeader, AppMain },
  data: () => ({ store }),

 methods: {}

}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>

</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>