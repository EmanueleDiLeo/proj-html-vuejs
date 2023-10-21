<template>
  <div class="mb-100">
    <div class="img-mic">
      <div class="container">
        <div class="row">
          <div class=" offset-6 col-6 text-pad">
            <h6>ABOUT US</h6>
            <h2> HIGH QUALITY CINEMATICS </h2>
            <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure illo nihil quasi laudantium pariatur in! Et quasi repellat mollitia id iusto nam saepe vero perferendis inventore deleniti veritatis laborum, rem possimus blanditiis nostrum omnis aut quos nulla error! Distinctio, ducimus illo culpa eaque molestias ut dignissimos nulla magnam alias dolores.</p>
            <ReadMoreBtn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreBtn from './ReadMoreBtn.vue'

export default {
  name:'AboutUs',
  components:{
    ReadMoreBtn,
  }
}
</script>

<style lang="scss" scoped>
@use '../../scss/main' as *;
@use '../../scss/partials/variables' as *;

.img-mic{
  background-image: url(/About-Us.jpg);
  height: 580px;
  background-size: cover;
  background-position: center;

  .text-pad{
    padding-top: 180px;
    p{
      color:$color-white;
      padding-top: 10px;
      
    }
  }
}

</style>