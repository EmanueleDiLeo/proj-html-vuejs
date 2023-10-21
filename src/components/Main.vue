<template>
  <main>
    <div class="container-fluid">
      <Jumbo />
      <ContainerCardsThree text="PELICULA STUDIO" title="THIS IS WHAT WE DO" type="pelicula"/>
      <AboutUs />
      <ContainerCardsThree text="YOUR WATCHLIST" title="BEST HITS MOVIES" type="watchlist"/>

    </div>
  </main>
</template>

<script>

import Jumbo from './partials/Jumbo.vue';
import ContainerCardsThree from './partials/ContainerCardsThree.vue';
import AboutUs from './partials/AboutUs.vue';

  export default {
    name:'Main', 
    components:{
      Jumbo,
      ContainerCardsThree,
      AboutUs,
    },
  }
</script>

<style lang="scss">
  @use '../scss/main' as *;
main{
  margin-top: 97px;

}
</style>