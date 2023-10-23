<template>
  <div class="col-3">
    <h6>Newsletter</h6>
    <span>Subscribe To Receive Inspiration, Ideas & News In Your Inbox.</span>
    <input type="email" placeholder="Enter Your Email">
    <button class="btn my-btn">SUBSCRIBE</button>
  </div>
  
</template>

<script>
export default {
  name:'Newsletter',

}
</script>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
@use '../../scss/main' as *;

  h6{
    padding-bottom: 30px;
  }
  span{
    color:$color-link-footer;
  }
  input{
    width: 100%;
    height: 50px;
    margin: 15px 0;
    background-color: $bg-imput-footer;
    color:$color-p;
    border: none;
    text-indent: 20px;
  }
  ::placeholder{
    color:$color-p ; 
    opacity: 1;
  }
  .my-btn{
    width: 60%;
    background-color: $color-white;
    color:$color-dark;
    border-radius: 0;
  }

</style>