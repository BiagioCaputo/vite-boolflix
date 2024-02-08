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
        const baseUrl = "https://image.tmdb.org/t/p/w342";
        return  baseUrl + this.production.img;

    },

    getNumberStars(){
        const stars = parseInt(this.production.numbers / 2);
        return stars

    },

    getStars(){
        return Array.from({ length: this.getNumberStars });
    }

   

  }
}

</script>

<template>
    <div class="col">
        <div class="card-production">
            <div class="cover-card">
                <img v-if="hasImage" :src="getImage" :alt="production.title">
                <span v-else>No image</span>
            </div>
            <div class="content-card">
                <div class="title-box">
                    <div><b>Title:</b> {{production.title}}</div>
                    <div v-if="production.originalTitle != production.title"><b>Original title:</b>{{production.originalTitle}}</div>
                </div>
                <div class="language-box mb-3">
                    <span class="me-2"><b>Language:</b></span>
                    <img v-if="hasFlag" :src="flagSrc" :alt="production.language">
                    <span v-else>{{ production.language }}</span>
                </div>
                <div class="ratings-box d-flex gap-2">
                    <div>
                        <FontAwesomeIcon icon="fas fa-star" />
                    </div>
                </div>
                <div class="description-box">
                    <span><b>Description: </b></span>
                    <p>{{production.description}}</p>
                </div>

            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
ul{
    list-style-type: none;
}
.language-box img{
    max-width: 30px;
}

.card-production{
    border:1px solid white;
    height: 100%;
    color:white;
}


</style>