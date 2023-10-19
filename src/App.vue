<template>
  <Header />
  <Main />
  <Footer />
</template>



<script>

// IMPORT COMPONENT
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';


  export default {
    name:'App',

    components:{
      Header,
      Main,
      Footer,
    }
  }

</script>



<style lang="scss">
  @use './scss/main.scss';

</style>