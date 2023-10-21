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
      <ContainerCardsThree text="LATEST NEWS" title="ARTICLES UPDATED DAILY " type="news"/>
      <Partner />
      <Collaborate />


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
import Partner from './partials/Partner.vue';
import Collaborate from './partials/Collaborate.vue';


  export default {
    name:'Main', 
    components:{
      Jumbo,
      ContainerCardsThree,
      AboutUs,
      Data,
      ContainerCardsFour,
      Carosel,
      Partner,
      Collaborate,
    },
  }
</script>

<style lang="scss">
  @use '../scss/main' as *;
main{
  margin-top: 97px;

}
</style>