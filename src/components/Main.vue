<template>
  <main>
    <div class="container-fluid">
      <Jumbo />
      <ContainerCardsThree type="PELICULA STUDIO" title="THIS IS WHAT WE DO"/>
      <AboutUs />

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