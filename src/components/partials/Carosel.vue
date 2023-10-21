<template>
  <div class="carosel mb-100">
    <swiper 
      :pagination="{clickable: true,}"
      :keyboard="{enabled: true,}"
      :autoplay="{delay: 2500,disableOnInteraction: false,}"
      :loop="true"
      :modules="modules" 
      class="mySwiper">
    <swiper-slide v-for="(item,index) in caroselImg" :key="index">
      <div class="carosel-img" :style="`background-image:url('${item.img}');`">
        <div class="carosel-text d-flex flex-column justify-content-center align-items-center">
          <img class="mod" src="virgole.svg" alt="virgole">
          <p>{{ item.text }}</p>
          <div class="people d-flex align-items-center"  >
            <div class="people-img">
              <img :src="item.teamImg" :alt="item.name">
            </div>
            <div class="text-people text-start">
              <h6>{{ item.name }}</h6>
              <p>{{ item.role }}</p>
            </div>
          </div>
        </div>

      </div>
    </swiper-slide>
    
  </swiper>
  </div>
</template>

<script>
import caroselImg from '../../data/caroselImg';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';

export default {
  name:'Carosel',

  data(){
    return{
      caroselImg,
    }
  },

  components: {
      Swiper,
      SwiperSlide,
    },

    setup() {
      return {
        modules: [Pagination, Keyboard, Autoplay],
      };
    },
}
</script>

<style lang="scss">
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;

.carosel{

  span.swiper-pagination-bullet{
    background-color: $bg-form !important; 
    margin-bottom: 100px !important;

  } 
  span.swiper-pagination-bullet-active::after{
    background-color: $color-white;
    padding-bottom: 100px;
  }

  .carosel-img{
    height: 600px;
    .carosel-text{
      color:$color-white; 
      width: 40%;
      height: 600px;
      margin: 0 auto;
      text-align:center;
      img.mod{
        filter: invert(1);
        height: 40px;
        margin-bottom: 40px;
      }
      .people{
        img{
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        .text-people{
          margin-left: 10px;
          margin-top: 10px;
          line-height: 0.3rem;
        }
      }
    }
  }
}
</style>