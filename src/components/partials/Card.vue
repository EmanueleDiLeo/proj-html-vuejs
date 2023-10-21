<template>
  <div class=" my-card d-flex flex-column text-center ">
    <div class="container-img">
      <img v-if="item.isSVG" class="svg-w" :src="item.img" alt="">
      <img v-if="item.isGallery" class="gallery" :src="item.img" alt="">
    </div>
    <h4>{{ item.title }}</h4>
    <p>{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  name:'Card',

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
      margin-bottom: 30px;
      .svg-w{
        width: 80px;
        height: 80px;
      }
      .gallery{
        height: 250px;
      }
    }
    h4{
      margin-bottom: 20px ;
    }
    p{
      color:$color-p;
    }
  }
</style>