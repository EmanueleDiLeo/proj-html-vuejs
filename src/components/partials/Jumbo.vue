<template>
  <div class="jumbo mb-100">
    <swiper 
      :navigation="true" 
      :modules="modules"
      :loop="true" 
      class="mySwiper">
      <swiper-slide 
        v-for="(item,index) in jumboImg" 
        :key="index">
        <div class="bg-img" :style="`background-image:url('${item.img}');`">
          <div class=" container h-100 ">
            <div class="jumbo-text ">
              <h6>CINEMATO STUDIO</h6>
              <h1>ACTION AND INSPIRE PEOPLE</h1>
              <div class=" my-btn ">
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
  // import required modules
import { Navigation } from 'swiper/modules';

import jumboImg from "../../data/jumboImg.js";
export default {
  name:'Jumbo',
  data(){
    return{
      jumboImg,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
    

}
</script>

<style lang="scss">
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;
.jumbo{
  .bg-img{
    height: 80vh;
    width: 100%;
    background-size: cover;
    background-position: center;

    
  }
  .swiper-button-prev::after,
  .swiper-button-next::after
  {
    background-color:rgba(101, 101, 101, 0.8);
    color:$color-white;
    padding: 10px;
    font-size: 20px;
  }
  .jumbo-text{
    padding-top: 200px;
    width: 40%;
    h1{
      font-size: 3rem;
    }
    .my-btn{
      padding-top:20px ;
      a{
        font-size: 0.8rem;
        color:$color-dark;
        padding: 10px 20px;
        background-color: $color-white;
      }
    }
  }
}
</style>