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
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="production.language">
                <span v-else>{{ production.language }}</span>
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
img{
    max-width: 50px;
}


</style>