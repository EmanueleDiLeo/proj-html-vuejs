<template>
  <div class="col-3">
    <h6>{{ title }}</h6>
    <ul>
      <li v-for="(item,index) in store[type]" :key="index" class="d-flex">
        <img v-if="item.img !== null" class="icon-footer" :src="item.img" alt="">
        <a :href="item.href">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {store} from '../../data/store';

export default {
  name:'FooterList',

  props:{
    title:String,
    type:Object,
  },

  data(){
    return{
      store,
    }
  },

}
</script>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;

  h6{
    padding-bottom: 15px;
  }
  ul{
    padding: 0;
    margin: 0;
    li{
      margin: 10px 0;
      .icon-footer{
        height: 20px;
        margin-right: 10px;
      }
      a{
        color: $color-link-footer;
        &:hover{
          color:$color-white;
        }
      }

    }
  }

  
</style>