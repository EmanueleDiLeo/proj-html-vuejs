<template>
  <footer>
    <div class="container">
      <div class="row py-90">
        <FooterList title="CONTACT INFO" type="contact"/>
        <FooterList title="INFORMATION" type="info"/>
        <FooterList title="USEFUL LINKS" type="useful"/>
      </div>
    </div>
  </footer>

</template>

<script>
import FooterList from './partials/FooterList.vue';
  export default {
    name:'Footer',

    components:{
      FooterList,
    },
  }

</script>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
@use '../scss/main' as *;

footer{
  background-color: $color-dark;
}

</style>