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

    },

    getStars(){
        const stars="";
        const star=`<FontAwesomeIcon icon="fas fa-star" />`;
        const rating = parseInt(this.production.numbers / 2);
        for(let i=0; i < rating; i++){
            stars= stars + star
        }
        return stars

    }

   

  }
}

</script>

<template>
    <div class="col">
        <ul>
            <li>Title: {{production.title}}</li>
            <li>Original title:{{production.originalTitle}}</li>
            <li>Rating:{{ getStars }}</li>
            <li class="mb-3">
                <img v-if="hasFlag" :src="flagSrc" :alt="production.language">
                <span v-else>Language:{{ production.language }}</span>
            </li>
            <li>
                <img v-if="hasImage" :src="getImage" :alt="production.title">
                <span v-else>No image</span>
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
ul{
    list-style-type: none;
}
img{
    max-width: 100px;
}


</style>