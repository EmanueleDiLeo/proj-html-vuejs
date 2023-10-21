<template>
  <main>
    <div class="container-fluid">
      <Jumbo />
      <ContainerCardsThree text="PELICULA STUDIO" title="THIS IS WHAT WE DO" type="pelicula"/>
      <AboutUs />
      <ContainerCardsThree text="YOUR WATCHLIST" title="BEST HITS MOVIES" type="watchlist"/>
      <Data />
      <ContainerCardsFour text="THE PERICUROS" title="MEET THE TEAM" type="team"/>
      <Carosel />


    </div>
  </main>
</template>

<script>

import Jumbo from './partials/Jumbo.vue';
import ContainerCardsThree from './partials/ContainerCardsThree.vue';
import AboutUs from './partials/AboutUs.vue';
import Data from './partials/Data.vue';
import ContainerCardsFour from './partials/ContainerCardsFour.vue';
import Carosel from './partials/Carosel.vue';


  export default {
    name:'Main', 
    components:{
      Jumbo,
      ContainerCardsThree,
      AboutUs,
      Data,
      ContainerCardsFour,
      Carosel,
    },
  }
</script>

<style lang="scss">
  @use '../scss/main' as *;
main{
  margin-top: 97px;

}
</style>