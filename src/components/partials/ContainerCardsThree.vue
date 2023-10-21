<template>
  <div class="container text-center mb-100">
    <span>{{ text }}</span>
    <h3 class="pt-2"> {{ title }}</h3>
    <div class="row">
      <div 
        v-for="(item,index) in store[type]"
        :key="index"
        class="col-4"><p></p>
        <Card :item="item"/>

      </div>
    </div>
  </div>

</template>

<script>
import {store} from '../../data/store';
import Card from './Card.vue';
export default {
  name:'ContainerCardsThree',
  props:{
    text:String,
    title:String,
    type:Object,
  },
  components:{
    Card,
  },

  data(){
    return{
      store,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../../scss/main' as *;
@use '../../scss/partials/variables' as *;

</style>