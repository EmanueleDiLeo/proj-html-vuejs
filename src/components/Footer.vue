<template>
  <footer>
    <div class="container ">
      <div class="row py-90">
        <FooterList title="CONTACT INFO" type="contact"/>
        <FooterList title="INFORMATION" type="info"/>
        <FooterList title="USEFUL LINKS" type="useful"/>
        <Newsletter />
      </div>
      <hr>
      <div class="text-center w-100">
        <span>&#169; 2023 All Rights Reserved. Developed By TemplateMela</span>
      </div>
    </div>
  </footer>

</template>

<script>
import FooterList from './partials/FooterList.vue';
import Newsletter from './partials/Newsletter.vue';
  export default {
    name:'Footer',

    components:{
      FooterList,
      Newsletter,
    },
  }

</script>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
@use '../scss/main' as *;

footer{
  background-color: $color-dark;
  padding-bottom: 25px;

  hr{
    background-color: $bg-hr;
    padding-bottom: 2px;
    margin-bottom: 20px;
  }
  span{
    color: $color-link-footer;
  }
}

</style>