<template>
  <div class="mb-100">
    <div class="partner">
      <div class="container">
        <div class="my-position d-flex align-items-center justify-content-around  ">
          <div v-for="(item,index) in partners" :key="index"
            class="">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partners from '../../data/partners';
export default {
  name:'Partner',

  data(){
    return{
      partners,
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;

.partner{
  background-image: url(/Parallax-03.jpg);
  height: 320px;
  background-size: cover;
  background-position: top;
  .my-position{
    height: 320px;

    img{
      height: 70px;
      color: $color-white
    }
  }
}

</style>