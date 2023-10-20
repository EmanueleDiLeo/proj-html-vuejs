<template>
  <div class=" my-card d-flex flex-column text-center ">
    <div class="container-img">
      <img class="svg-w" :src="item.img" alt="">
    </div>
    <h4>{{ item.title }}</h4>
    <p>{{ item.text }}</p>
  </div>
</template>

<script>
import {pelicula,watchlist} from '../../data/cards';
export default {
  name:'Card',

  data(){
    return{
      pelicula,
      watchlist,
    }
  },

  props:{
    item:Object,
  },

}
</script>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
  .my-card{
    margin-top: 50px ;
    .container-img{
      // height: 250px;
      margin-bottom: 30px;
      .svg-w{
        width: 80px;
        height: 80px;
      }
    }
    h4{
      margin-bottom: 20px ;
    }
  }
</style>