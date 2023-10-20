<template>
  <div class=" my-btn ">
    <a href="#">READ MORE</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;
  .my-btn{
    padding-top:20px ;
    a{
      font-size: 0.8rem;
      color:$color-dark;
      padding: 10px 20px;
      background-color: $color-white;
    }
  }

</style>