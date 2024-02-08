<script>

export default {
  name: 'ProductionCard',
  props:{production:Object},
  computed:{
    hasFlag(){
        const flags =['it', 'en'];
        return flags.includes(this.production.language);
    },

    flagSrc() {
        const url = new URL(`../assets/img/${this.production.language}.png`, import.meta.url);
        return url.href;
    },

    hasImage(){
        return this.production.img;
    },

    getImage(){
        const baseUrl = "https://image.tmdb.org/t/p/w500";
        return  baseUrl + this.production.img;

    }

  }
}

</script>

<template>
    <div class="col">
        <ul>
            <li>{{production.title}}</li>
            <li>{{production.originalTitle}}</li>
            <li>{{production.ratings}}</li>
            <li class="mb-3">
                <img v-if="hasFlag" :src="flagSrc" :alt="production.language">
                <span v-else>{{ production.language }}</span>
            </li>
            <li>
                <img v-if="hasImage" :src="getImage" :alt="production.title">
                <span v-else>No image</span>
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
img{
    max-width: 100px;
}


</style>