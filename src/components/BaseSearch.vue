<script>
export default {
  name: 'BaseSearch',
  data() {
    return{
        searchedText:''
    }
  },
  emits:['submit-search'],

}


</script>

<template>
    <div>
        <form class="d-flex gap-2" @submit.prevent ="$emit('submit-search', searchedText)">
            <input type="text" class="form-control" placeholder="nome film o serie tv..." v-model.trim="searchedText">
            <button class="btn btn-secondary">Cerca</button>
        </form>
        
    </div>

</template>

<style lang="scss" scoped>

</style>