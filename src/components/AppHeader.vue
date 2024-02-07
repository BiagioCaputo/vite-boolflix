<script>
import BaseSearch from './BaseSearch.vue';
export default {
  name: 'AppHeader',
  components: {BaseSearch},
  emits:['movie-search'],
}


</script>

<template>
    <header class="d-flex justify-content-between align-items-center px-4">
        <h1>Boolflix</h1>
        <BaseSearch @submit-search="$emit('movie-search', $event)"/>

    </header>

</template>

<style lang="scss" scoped>

header{
    background-color: black;
    height: 150px;
}

</style>