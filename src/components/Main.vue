<template>
  <main>
    <div class="container-fluid">
      <Jumbo />
      <ContainerCardsThree type="PELICULA STUDIO" title="THIS IS WHAT WE DO"/>
    </div>
  </main>
</template>

<script>

import Jumbo from './partials/Jumbo.vue';
import ContainerCardsThree from './partials/ContainerCardsThree.vue';

  export default {
    name:'Main', 
    components:{
      Jumbo,
      ContainerCardsThree,
    },
  }
</script>

<style lang="scss">
  @use '../scss/main' as *;
main{
  margin-top: 97px;

}
</style>