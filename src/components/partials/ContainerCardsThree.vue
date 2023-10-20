<template>
  <div class="container text-center mb-100">
    <span>{{ type }}</span>
    <h3 class="pt-2"> {{ title }}</h3>
    <div class="row">
      <div 
        v-for="(item,index) in pelicula"
        :key="index"
        class="col-4"><p></p>
        <Card :item="item"/>

      </div>
    </div>
  </div>

</template>

<script>
import {pelicula,watchlist} from '../../data/cards';
import Card from './Card.vue';
export default {
  name:'ContainerCardsThree',
  props:{
    type:String,
    title:String,
  },
  components:{
    Card,
  },

  data(){
    return{
      pelicula,
      watchlist,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../../scss/main' as *;
@use '../../scss/partials/variables' as *;

</style>