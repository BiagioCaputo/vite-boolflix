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

    rating(){
        return Math.ceil(this.production.ratings / 2);
    },

   

  }
}

</script>

<template>
    <div class="col">
        <div class="card-production">
            <div class="cover-card">
                <img v-if="hasImage" :src="getImage" :alt="production.title">
                <img v-else src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png">
            </div>
            <div class="content-card p-2">
                <div class="title-box">
                    <span><b>Title:</b> {{production.title}}</span>
                    <div v-if="production.originalTitle != production.title"><span><b>Original title:</b></span>{{production.originalTitle}}</div>
                </div>
                <div class="language-box mb-3">
                    <span class="me-2"><b>Language:</b></span>
                    <img v-if="hasFlag" :src="flagSrc" :alt="production.language">
                    <span v-else>{{ production.language }}</span>
                </div>
                <div class="ratings-box d-flex gap-2">
                    <span><b>Ratings:</b></span>
                    <div>
                        <FontAwesomeIcon v-for="n in 5"  :key="n" :icon="[n <= rating ? 'fas' : 'far', 'star']"/>
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
.col{
    height: 520px;
    flex-basis: 368px;
}
.card-production{
    border:1px solid white;
    height: 100%;
    color:white;
    position: relative;
}

.cover-card{
    border-radius: 10px;
    transition: all 0.5s ease;
    height: 100%;


    &:hover{
    display: none;
    }

    img{
        width: 100%;
        height: 100%;
    }
}

.content-card{
    transition: all 0.5s ease;
    top: 0;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    &:hover{
        opacity: 1;
        background-color: black;
    }

    .language-box img{
    max-width: 30px;
}
}

</style>