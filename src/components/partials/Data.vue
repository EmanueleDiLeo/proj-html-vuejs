<template>
  <div class="mb-100">
    <div class="data">
      <div class="container h-100">
        <div class="row h-100">
          <div v-for="(item,index) in datas" :key="index"
            class="col-3 d-flex flex-column align-items-center h-100 justify-content-center ">
            <h2>{{ item.num }}</h2>
            <h6>{{ item.text }}</h6>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import datas from '../../data/datas.js';
export default {
  name:'Data',

  data(){
    return{
      datas,
    }
  },

}
</script>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;

.data{
  background-image: url(/Parallax-01.jpg);
  height: 310px;
  background-size: cover;
  background-position: 0px 450px;

}

</style>